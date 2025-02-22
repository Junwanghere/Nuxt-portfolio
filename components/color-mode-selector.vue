<template>
  <div class="flex items-center space-x-2">
    <div v-if="showNextModelLabel" class="text-gray-500 text-xs">切換到： {{ nextMode }}</div>
    <button 
      @click="toggleMode" 
      @mouseenter="showNextModelLabel = true"
      @mouseleave="showNextModelLabel = false"
      class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>
<script setup>
const colorMode = useColorMode()
const showNextModelLabel = ref(false)

const modes = [
  'system', 
  'light', 
  'dark'
]

const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const nextMode = computed(() => {
  const currentIndex = modes.indexOf(colorMode.preference)
  let nextIndex 
  if(currentIndex == 2){
    nextIndex = 0
  }else{
    nextIndex = currentIndex + 1
  }
  return modes[nextIndex]
})
const toggleMode = () => {
  colorMode.preference = nextMode.value
}
</script>