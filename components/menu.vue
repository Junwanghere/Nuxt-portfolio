<template>
  <nav class="font-mono">
    <ul class="flex space-x-4">
      <li>
        <NuxtLink to="/" class="link ">首頁</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">關於</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">專案</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="link">部落格</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style  scoped>
.link {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800
}

</style>