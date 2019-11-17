import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/auth");

const config = {
  apiKey: "AIzaSyANOUo5WzeIJcMPa3ox1o4JQ-PVD-D9OEk",
  authDomain: "inhaled-bh19.firebaseapp.com",
  databaseURL: "https://inhaled-bh19.firebaseio.com",
  projectId: "inhaled-bh19",
  storageBucket: "inhaled-bh19.appspot.com",
  messagingSenderId: "778630671101",
  appId: "1:778630671101:web:5112945aa63bd8fab9ec94",
  measurementId: "G-1D66FT4M97"
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export const auth = firebase.auth();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
