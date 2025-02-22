<template>
  <div class="text-red-400">
    this is from Main page
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'Main Page',
  ogTitle: 'Main Page',
  description: 'This is the main page.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>