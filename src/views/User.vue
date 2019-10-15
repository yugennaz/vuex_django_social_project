<template>
  <div>
    <UserInfo></UserInfo>
    <PostList></PostList>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import UserInfo from '@/components/UserInfo.vue';

export default {
  name: 'user',
  components: {
    PostList, UserInfo,
  },
};
</script>
