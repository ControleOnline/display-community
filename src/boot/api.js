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
      uri = this.buildQueryString(uri,options);            
    }

    return myFetch(uri, options).catch((e) => {
      if (e.message == "Unauthorized" || e.message == "Invalid credentials.") {
        myStore.dispatch("auth/logOut");
        localStorage.set("session", null);
        location.reload();
      }
    });
  },

   serialize(obj, prefix) {
    const pairs = [];
  
    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
  
      const value = obj[key];
      let fullKey = prefix ? `${prefix}[${key}]` : key;
  
      // Se o valor for um objeto, fazemos uma chamada recursiva
      if (typeof value === "object" && value !== null) {
        pairs.push(...serialize(value, fullKey));
      } else if (Array.isArray(value)) {
        // Tratamento específico para arrays
        fullKey = `${fullKey}[]`;
        value.forEach(val => {
          pairs.push(`${encodeURIComponent(fullKey)}=${encodeURIComponent(val)}`);
        });
      } else {
        // Para valores primitivos
        pairs.push(`${encodeURIComponent(fullKey)}=${encodeURIComponent(value)}`);
      }
    }
  
    return pairs;
  },
  
   buildQueryString(uri,options) {    
    if (options.params) {
      const params = this.serialize(options.params);
      uri = `${uri}?${params.join("&")}`;
    }
    return uri;
  },
  execute: function (params) {
    return axios(params);
  },
};

export default async ({ store }) => {
  myStore = store;
};
