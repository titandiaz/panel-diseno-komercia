import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import getCookie from "./utils/getCookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    indexDevice: 3,
    indexType: 1,
    urlKomercia: "https://api2.komercia.co",
    configAxios: {
      headers: {
        "content-type": "application/json",
        Authorization: "",
        "Access-Control-Allow-Origin": "*",
        Access: "application/json"
      }
    },
    accessToken: ''
  },
  mutations: {
    SET_INDEXDEVICE(state, value) {
      state.indexDevice = value;
    },
    SET_INDEXTYPE(state, value) {
      state.indexType = value;
    },
    SET_ACCESSTOKEN(state, value) {
      state.accessToken = value;
    }
  },
  actions: {
    GET_LOGIN({ state, commit }) {
      const token = getCookie("authData");
      console.log(token);
      axios
        .post(`${state.urlKomercia}/api/login`, token, state.configAxios)
        .then(response => {
          commit("SET_ACCESSTOKEN", response.data.data);
        });
    }
  }
});
