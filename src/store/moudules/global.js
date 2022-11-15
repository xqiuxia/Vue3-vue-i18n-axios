const state = {
  lang: "zn",
  username: "",
};
const mutations = {
  updateLang(state, payload) {
    state.lang = payload;
  },
  updateUserName(state, payload) {
    state.username = payload;
  },
};
const action = {
  updateUserName(context, payload) {
    context.commit("updateUserName", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  action,
};
