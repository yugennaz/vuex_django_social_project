import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);
const API_URL = 'http://127.0.0.1:8000/api';


export default new Vuex.Store({
  state: {
    posts: [],
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    login_success(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = '';
    },
    postSet(state, posts) {
      state.posts = posts;
    },

  },

  actions: {
    async getPosts(context) {
      const response = await axios.get(`${API_URL}/images/`);
      context.commit('postSet', response.data);
    },
    async login(context, credentials) {
      const response = await axios.post(`${API_URL}/auth/`, credentials);
      const { token } = response.data.token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common.Authorization = `Token  ${token}`;
      context.commit('login_success', token);
    },
    logout(context) {
      context.commit('logout');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common.Authorization;
    },

  },
});
