<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
         <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
         <router-link to="/about" class="nav-link">About</router-link>
      </li>
      </ul>

      <ul class="navbar-nav ml-auto">
      <li>
        <div class="form-inline my-2 my-lg-0" v-if="token">
          <button class="btn btn-outline-success my-2 my-sm-0" @click="logout">Logout</button>
        </div>
        <div class="form-inline my-2 my-lg-0" v-else>
          <input class="form-control mr-sm-2" type="text" v-model="username"/>
          <input class="form-control mr-sm-2" type="password" v-model="password"/>
          <button class="btn btn-outline-success my-2 my-sm-0" @click="login({username, password})">Login</button>
        </div>
      </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      username: 'username',
      password: 'password'
    }
  },
  computed: {
    ...mapState(['token', 'error'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
}
</script>