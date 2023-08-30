import { LocalStorage } from "quasar";
import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function ( { store, ssrContext } ) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  const autoLogin = () => {
    if (
      store.getters["auth/user"] !== null &&
      store.getters["auth/user"].token !== null &&
      store.getters["auth/user"].token !== undefined
    ) {
      return true;
    }
    // clean storage from not allowed keys

    let keys = LocalStorage.getAllKeys();
    for (let index = 0; index < keys.length; index++) {
      if (keys[index] != "session") LocalStorage.remove(keys[index]);
    }

    if (LocalStorage.has("session")) {
      let session = LocalStorage.getItem("session");

      // in case app version changes clear LocalStorage

      if (session.user != undefined) {
        store.dispatch("auth/logIn", {
          username: session.user,
          api_key: session.token,
          people: session.people,
          company: session.company,
          
          email: session.email,
          phone: session.phone,
          avatar: session.avatar,
          realname: session.realname,
          active: session.active,
          type: session.type,
        });

        return true;
      }
    } 

    return false;
  };

  Router.beforeEach((to, from, next) => {
    const isLoginPage = to.path == "/login";
    const isHomePage = to.path == "/";
    const publicPages = ["/login", "/quote", "/shop"];
    const isPrivatePage = !publicPages.includes(to.path);
    const isLogged = autoLogin();

    // ------ /task/checklist/id/{integer}
    if (to.name === "ChecklistDetails" || to.name === "ContractAccept") {
      // Para não redirecionar para página de login ao abrir vistoria sem estar logado
      return next();
    }

    //sub router for /shop
    if (
      to.name === "ProductsInCategory" ||
      to.name === "CategoriesIndex" ||
      to.name === "ProductDetails"
    ) {
      return next();
    }

    if (to.path.match(/^\/forgot-password\/[\w\W]+\/[\w\W]+$/g)) {
      return next();
    }

    if ((isLoginPage || isHomePage) && isLogged) {
      return next({ name: "HomeIndex" });
    }

    if (isPrivatePage === true && isLogged === false) {
      return next("/login");
    }

    next();
  });

  return Router;
});
