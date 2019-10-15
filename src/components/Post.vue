<template>
  <li class="list-group-item">
      <div class="media">
          <a class="pull-left" href="#">
            <img class="media-object" width="350" height="350" :src="post.image">
          </a>
        <div class="media-body">
          <h3 class="mt-0">User: <a href="#"></a></h3>
            <p>Description: {{ post.description }} </p>
        </div>
      </div>
  </li>
</template>

<script>
export default {
  name: 'Post',
  props: ['post']
}
</script>