<template>
  <article class="
    prose 
    dark:prose-invert 
    prose-pre:bg-white  
    dark:prose-pre:bg-gray-800 
    prose-pre:text-gray-200">
    <div class="grid grid-cols-6 gap-16">
      <div :class="{'col-span-4': page?.toc, 'col-span-6' : !page?.toc}">
        <ContentRenderer v-if="page" :value="page"></ContentRenderer>
      </div>
      <div class="col-span-2 not-prose" v-if="page?.toc">
        <aside class="sticky top-8">
          <div class="font-semibold mb-2">
            Table of Content
          </div>
          <nav>
            <toc-links :links="page.body.toc?.links" :intersectElement="intersectElement"></toc-links>
          </nav>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup >
const route = useRoute()
const intersectElement = ref(null)

const { data: page } = await useAsyncData(`${route.path}` ,() => {
  return queryCollection("content").path(route.path).first()
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})

onMounted(() => {
  const callback = (entries) => {
    for( const entry of entries){
      console.log(entry)
      console.log(window.innerHeight)
      if(entry.isIntersecting){
        intersectElement.value = entry.target.id
      }
    }
  }

  const options = {
    root: null,
    threshold: 0.5,
    rootMargin: '-500px 0px 0px 0px'
  }

  const observer = new IntersectionObserver(callback, options)
  const elements = document.querySelectorAll(['h2', 'h3'])
  elements.forEach((element) => {
    observer.observe(element)
  })

  onUnmounted(() => {
    elements.forEach((element) => {
      observer.unobserve(element)
    })
  })

})
</script>

<style scoped>

</style>