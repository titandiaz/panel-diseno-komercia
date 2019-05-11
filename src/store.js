import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    indexDevice: 3,
    indexType: 1
  },
  mutations: {
    SET_INDEXDEVICE(state, value) {
      state.indexDevice = value;
    },
    SET_INDEXTYPE(state, value) {
      state.indexType = value;
    }
  },
  actions: {}
});
