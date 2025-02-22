<template>
  <section class="not-prose font-mono ">
    <div class="column text-gray-400 text-sm">
      <div>Date</div>
      <div>Title</div>
    </div>
    <ul>
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path" class="column hover:bg-gray-100 hover:dark:bg-gray-800">
          <div class="text-gray-400 dark:text-gray-500">{{ post.year }}</div>
          <div>
            {{ post.title }}
          </div>
        </NuxtLink>
      </li>
    </ul>
    <slot/>
  </section>
</template>

<script setup>
const { data } = await useAsyncData(() => {
  return queryCollection("content").where('path', 'LIKE', '/blog%').where('path', 'NOT LIKE', '/blog').select('title', 'path', 'publishedAt').order('publishedAt', 'DESC').all()
})



const posts = computed(() => {
  let lastYear = null
  return data.value.map((post) => {
    const publishYear = post.publishedAt?.split('-')[0] 
    post.year = publishYear != lastYear ? publishYear : ''
    lastYear = publishYear
    return post
  })
})

</script>

<style  scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>