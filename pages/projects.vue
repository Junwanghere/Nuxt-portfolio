<template>
  <article class="    
    prose
    dark:prose-invert 
    prose-pre:bg-white  
    dark:prose-pre:bg-gray-800 
    prose-pre:text-gray-200 ">
    <ContentRenderer v-if="page" :value="page"></ContentRenderer>
  </article>
</template>

<script setup>
const route = useRoute()

const { data: page } = await useAsyncData(() => {
  return queryCollection("content").path(route.path).first()
})


useSeoMeta({
  title: '專案',
  description: '專案列表'
})
</script>