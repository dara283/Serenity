<template>
  <figure class="m-0">
    <img :src="item.url" :alt="item.alt" class="img-fluid rounded border" />
  </figure>
</template>
<script setup>
defineProps({ item: Object })
</script>
