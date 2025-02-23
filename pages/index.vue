<script setup>
const route = useRoute()

const { data: page } = await useAsyncData('home', () => queryCollection("content").path(route.path).first())
</script>
<template>
  <article class="prose dark:prose-invert">
    <ContentRenderer :value="page" />
  </article>
</template>