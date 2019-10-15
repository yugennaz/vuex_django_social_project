<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="container">
       <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>
