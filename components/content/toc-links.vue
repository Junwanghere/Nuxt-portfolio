<script setup>
const route = useRoute()

defineProps({
  links: Array,
  intersectElement: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink :to="{ path: route.path, hash: `#${link.id}`}" :class="{'ml-4' : link.depth != 2, 'text-green-500': intersectElement == link.id}">
        {{ link.text }}
      </NuxtLink>
      <TocLinks :links="link.children" :intersectElement="intersectElement" />
    </li>
  </ul>
</template>  
