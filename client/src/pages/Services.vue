<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../api'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import AlertMessage from '../components/AlertMessage.vue'
import ServiceCard from '../components/ServiceCard.vue'
import SectionHeading from '../components/SectionHeading.vue'

const items = ref([]), loading = ref(true), error = ref('')
onMounted(async () => {
  try { const { data } = await api.get('/services'); items.value = data }
  catch { error.value = 'Failed to load services.' }
  finally { loading.value = false }
})
</script>

<template>
 <section class="section">
  <div class="container">
    <SectionHeading title="Classes & Programs" subtitle="All levels welcome — capped at 10 participants" />
    <LoadingSpinner v-if="loading" />
    <AlertMessage v-else-if="error">{{ error }}</AlertMessage>
    <div v-else class="row g-3">
      <div v-for="s in items" :key="s.id" class="col-12 col-md-6 col-lg-4">
        <ServiceCard :item="s" />
      </div>
    </div>
    </div>
  </section>
</template>
