<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../api'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import AlertMessage from '../components/AlertMessage.vue'
import ProductCard from '../components/ProductCard.vue'
import SectionHeading from '../components/SectionHeading.vue'

const items = ref([]), loading = ref(true), error = ref('')
onMounted(async () => {
  try { const { data } = await api.get('/products'); items.value = data }
  catch { error.value = 'Failed to load products.' }
  finally { loading.value = false }
})
</script>

<template>
 <section class="section">
  <div class="container">
    <SectionHeading title="Wellness Essentials" />
    <LoadingSpinner v-if="loading" />
    <AlertMessage v-else-if="error">{{ error }}</AlertMessage>
    <div v-else class="row g-3">
      <div v-for="p in items" :key="p.id" class="col-12 col-sm-6 col-lg-4">
        <ProductCard :item="p" />
      </div>
    </div>
    </div>
  </section>
</template>
