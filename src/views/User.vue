<template>
  <div>
    <UserInfo :user="user"></UserInfo>
    <PostList></PostList>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import PostList from '@/components/PostList.vue';
import UserInfo from '@/components/UserInfo.vue';

export default {
  name: 'user',
  components: {
    PostList, UserInfo,
  },
  computed: {
    ...mapState(['user']),
  },
  created() {
    this.$store.dispatch('getUser', this.$route.params.id);
  },
};
</script>
