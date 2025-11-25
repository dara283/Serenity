<template>
  <div class="text-center mb-4">
    <h1 class="h2 mb-1">{{ title }}</h1>
    <p class="text-muted mb-0">{{ subtitle }}</p>
  </div>
</template>
<script setup>
defineProps({ title: String, subtitle: String })
</script>
