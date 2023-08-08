import myFetch from "@controleonline/quasar-common-ui/src/utils/fetch";
import axios from "axios";

let myStore = null;
const MIME_TYPE = "application/ld+json";
export const api = {
  fetch: function (uri, options = {}) {
    if (typeof options.headers === "undefined")
      Object.assign(options, { headers: new Headers() });
    if (myStore.getters["auth/user"] && myStore.getters["auth/user"].token)
      options.headers.set("API-TOKEN", myStore.getters["auth/user"].token);
    options.headers.set("Content-Type", MIME_TYPE);
    options.headers.set("Accept", MIME_TYPE);

    if (options.body && typeof options.body != "string") {
      options.body = JSON.stringify(options.body);
    }
    if (options.params) {
      let params = [];

      Object.keys(options.params).map((key) => {
        if (Array.isArray(options.params[key])) {
          params.push(
            options.params[key].map((value) => `${key}[]=${value}`).join("&")
          );
        } else {
          params.push(key + "=" + options.params[key]);
        }
      });
      uri = `${uri}?${params.join("&")}`;
    }

    return myFetch(uri, options).catch((e) => {
      if (e.message == "Unauthorized" || e.message == "Invalid credentials.") {
        myStore.dispatch("auth/logOut");
        localStorage.set("session", null);
        location.reload();
      }
    });
  },

  execute: function (params) {
    return axios(params);
  },
};

export default async ({ store }) => {
  myStore = store;
};
