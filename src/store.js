import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    indexDevice: 3
  },
  mutations: {
    SET_INDEXDEVICE(state, value) {
      state.indexDevice = value;
    }
  },
  actions: {}
});
