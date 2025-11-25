<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../api'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import AlertMessage from '../components/AlertMessage.vue'
import GalleryImage from '../components/GalleryImage.vue'
import SectionHeading from '../components/SectionHeading.vue'

const items = ref([]), loading = ref(true), error = ref('')
onMounted(async () => {
  try { const { data } = await api.get('/gallery'); items.value = data }
  catch { error.value = 'Failed to load gallery.' }
  finally { loading.value = false }
})
</script>

<template>
   <section class="section">
  <div class="container">
    <SectionHeading title="Studio Gallery" />
    <LoadingSpinner v-if="loading" />
    <AlertMessage v-else-if="error">{{ error }}</AlertMessage>
    <div v-else class="row g-3">
      <div v-for="g in items" :key="g.id" class="col-12 col-sm-6 col-lg-4">
        <GalleryImage :item="g" />
      </div>
    </div>
    </div>
  </section>
</template>
