<template>
  <slot  v-bind="posts">
    <section class="not-prose font-mono ">
      <div class="column text-gray-400 text-sm">
        <div>Date</div>
        <div>Title</div>
      </div>
      <ul>
        <li v-for="post in posts" :key="post.path">
          <NuxtLink :to="post.path" class="column group hover:bg-gray-100 hover:dark:bg-gray-800">
            <div :class="{'text-white dark:text-gray-900 group-hover:text-gray-100  dark:group-hover:text-gray-800': !post.showYear, 'text-gray-400 dark:text-gray-500 ': post.showYear}" >{{ post.year }}</div>
            <div>
              {{ post.title }}
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>

</template>

<script setup>
const props = defineProps({
  postLimit: {
    type: Number,
    default: null
  }
})


const { data } = await useAsyncData(() => {
  const query = (queryCollection("content")
    .where('path', 'LIKE', '/blog%')
    .where('path', 'NOT LIKE', '/blog')
    .select('title', 'path', 'publishedAt')
    .order('publishedAt', 'DESC'))

  if(props.postLimit){
    query.limit(props.postLimit)
  }

  return query.all()
})



const posts = computed(() => {
  let lastYear = null
  return data.value.map((post) => {
    const publishYear = post.publishedAt?.split('-')[0] 
    post.year = publishYear
    post.showYear = publishYear != lastYear
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