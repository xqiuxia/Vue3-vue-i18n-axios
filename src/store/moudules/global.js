const state = {
  lang: "zn",
};
const mutations = {
  updateLang(state, payload) {
    state.lang = payload;
  },
};
const action = {
  // updateLang(context, payload) {
  //   context.commit("updateName", payload);
  // },
};

export default {
  namespaced: true,
  state,
  mutations,
  action,
};
