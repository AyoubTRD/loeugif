import Vue from "vue";
import Vuex from "vuex";

import { fetchGifs, searchForGifs } from "../api/giphy";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifs: [],
    loading: false,
    searchKeyword: "",
  },
  getters: {
    gifs(state) {
      return state.gifs;
    },
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    setGifs(state, gifs) {
      state.gifs = gifs;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setSearchKeyword(state, q) {
      state.searchKeyword = q;
    },
  },
  actions: {
    async getGifs({ commit }, params = {}) {
      if (!params.clean) {
        commit("setLoading", true);
      }
      const data = await fetchGifs(params);
      if (!params.clean) {
        commit("setGifs", data.data);
      }
      if (!params.clean) {
        commit("setLoading", false);
      }

      return data.data;
    },
    async searchGifs({ commit }, q, params = {}) {
      if (!params.clean) {
        commit("setSearchKeyword", q);
      }
      if (!params.clean) {
        commit("setLoading", true);
      }
      const data = await searchForGifs(q, params);
      if (!params.clean) {
        commit("setGifs", data.data);
      }
      if (!params.clean) {
        commit("setLoading", false);
      }
      return data.data;
    },
    async loadMore({ dispatch, commit, state }) {
      if (state.searchKeyword) {
        return commit("setGifs", [
          ...state.gifs,
          ...(await dispatch("searchGifs", state.searchKeyword, {
            offset: state.gifs.length,
            clean: true,
          })),
        ]);
      }
      return commit("setGifs", [
        ...state.gifs,
        ...(await dispatch("getGifs", {
          offset: state.gifs.length,
          clean: true,
        })),
      ]);
    },
  },
  modules: {},
});
