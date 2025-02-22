<script setup lang="ts">
  defineProps({
    error: Object
  })

</script>

<template>
  <div>
    Something went wrong!
  </div>
  <h2>{{ error.statusCode }}</h2>
</template>