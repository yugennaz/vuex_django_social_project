<template>
   <ul class="list-group list-group-flush">
     <Post v-for="post in posts" :key="post.id" :post="post"></Post>
   </ul>
</template>
<script>
import Post from '@/components/Post.vue'
import { mapState } from 'vuex'
export default {
   name: 'PostList',
   components: { Post },
   computed: { ...mapState(['posts']) },
   created () { this.$store.dispatch('getPosts') }
}
</script>

