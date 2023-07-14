import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";
import { version } from "../../package.json";
import { LocalStorage } from "quasar";

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store }) {
  const Router = new VueRouter({
    routes: routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
    scrollBehavior: () => ({
      x: 0,
      y: 0,
    }),
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

      if (session.version == undefined || session.version != version) {
        // do logout

        store.dispatch("auth/logOut");

        // set updated version

        LocalStorage.set("session", { version });
      }

      // do login and restore LocalStorage data
      else {
        if (session.user != undefined) {
          store.dispatch("auth/logIn", {
            username: session.user,
            api_key: session.token,
            people: session.people,
            company: session.company,
            version: version,
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
    } else {
      LocalStorage.set("session", { version });
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
    if (to.name === "ProductsInCategory" || to.name === "CategoriesIndex" || to.name === "ProductDetails") {
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
}
