import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);
const API_URL = 'http://127.0.0.1:8000/api';


export default new Vuex.Store({
  state: {
    posts: [],
    token: localStorage.getItem('token') || '',
    user: null,
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
    userSet(state, user) {
      state.user = user;
    },
  },

  actions: {
    async getPosts(context, user) {
      let response;
      if (user) {
        response = await axios.get(`${API_URL}/images/?user_id=${user.id}`);
      } else {
        response = await axios.get(`${API_URL}/images/`);
      }
      context.commit('postSet', response.data);
    },
    async getUser(context, userId) {
      const response = await axios.get(`${API_URL}/users/${userId}`);
      context.commit('userSet', response.data);
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
