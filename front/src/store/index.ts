import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    user: localStorage.getItem('username') || null,
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, user) {
      state.user = { ...user };
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearAuth(state) {
      state.token = null,
        state.user = null,
        localStorage.removeItem('token')
    }
  },
  actions: {
    login({ commit }, token) {
      // Stocker le token
      commit('setToken', token);
      // Décoder le token pour obtenir les informations utilisateur
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      // Stocker les informations de l'utilisateur
      commit('setUser', decodedToken);
    },
    logout({ commit }) {
      commit('clearAuth');
    },
    checkAuth({ commit, state }) {
      if (state.token) {
        // Décoder le token pour obtenir les informations utilisateur
        const decodedToken = JSON.parse(atob(state.token.split('.')[1]));
        // Stocker les informations de l'utilisateur
        commit('setUser', decodedToken);
      }
    }
  },
  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
    isLoggedIn: (state) => !!state.token

  }
})
