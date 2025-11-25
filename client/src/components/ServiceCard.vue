<template>
  <div class="h-100 border rounded-4 bg-white p-3 shadow-sm">
    <h2 class="h5 mb-2" style="font-family:'Playfair Display', Georgia, serif;">{{ item.title }}</h2>
    <p class="text-muted small mb-3">{{ item.desc }}</p>

    <!-- meta row -->
    <ul class="list-unstyled small mb-3">
      <li><i class="bi bi-clock me-1"></i><strong>Duration:</strong> {{ item.duration }}</li>
      <li><i class="bi bi-activity me-1"></i><strong>Intensity:</strong> {{ item.intensity }}</li>
      <li><i class="bi bi-layers me-1"></i><strong>Level:</strong> {{ item.level }}</li>
      <li><i class="bi bi-person me-1"></i><strong>Coach:</strong> {{ item.coach }}</li>
      <li><i class="bi bi-calendar-event me-1"></i><strong>Schedule:</strong> {{ item.schedule }}</li>
    </ul>

    <!-- price (plain text, not a green badge) -->
    <div class="fw-semibold">Price: {{ item.price }}</div>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>
