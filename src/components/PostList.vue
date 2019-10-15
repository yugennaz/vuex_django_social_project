<template>
   <ul class="list-group list-group-flush">
     <Post v-for="post in posts" :key="post.id" :post="post"></Post>
   </ul>
</template>

<script>
import { mapState } from 'vuex';
import Post from '@/components/Post.vue';

export default {
  name: 'PostList',
  components: { Post },
  computed: { ...mapState(['posts', 'user']) },
  created() {
    console.log(this.$store.user);
    this.$store.dispatch('getPosts', this.$store.user);
  },
};
</script>
