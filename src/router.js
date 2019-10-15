import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import User from './views/User.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
    },
  ],
});
