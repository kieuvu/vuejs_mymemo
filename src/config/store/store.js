import { createStore } from 'vuex';

const store = createStore({
  state() {
    const loggedUser = localStorage.getItem('userInfo');
    return {
      userInfo: loggedUser ? JSON.parse(loggedUser) : null,
    };
  },

  getters: {
    userInfo: function (state) {
      return state.userInfo;
    }
  },

  mutations: {
    setUserInfo: function (state, data) {
      state.userInfo = data;
    },
  },

  actions: {

  }
});

export default store;