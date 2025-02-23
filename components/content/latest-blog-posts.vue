<template>
  <BlogPost v-slot="posts" :post-limit="postLimit">
    <ul>
      <li v-for="post in posts" :key="post.title">
        <NuxtLink :to="post.path">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </BlogPost>
</template>

<script setup> 
defineProps({
  postLimit: {
    type: Number,
    default: null
  }
})


</script>