<template>
  <article class="product-tile h-100 border rounded-4 bg-white">
    <!-- IMAGE -->
    <div class="position-relative overflow-hidden rounded-top-4">
      <img
        class="w-100 d-block product-img"
        :src="item.img || '/images/products/placeholder.jpg'"
        :alt="item.name"
        loading="lazy"
        sizes="(min-width: 992px) 33vw, (min-width: 576px) 50vw, 100vw"
        @error="onImgError"
      />
      <span
        v-if="item.badge"
        class="badge text-bg-success position-absolute top-0 start-0 m-2"
        :aria-label="item.badge"
      >
        <i v-if="item.badge.toLowerCase().includes('eco')" class="bi bi-leaf me-1"></i>
        {{ item.badge }}
      </span>
    </div>

    <!-- BODY -->
    <div class="p-3 d-flex flex-column">
      <h2 class="h6 mb-1 product-name">{{ item.name }}</h2>

      <!-- Ratings (visual only) -->
      <div class="text-warning small mb-2" aria-label="Rated 4.5 out of 5">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        <i class="bi bi-star-half"></i>
        <span class="text-muted">(128)</span>
      </div>

      <p class="text-muted small flex-grow-1 mb-2">{{ item.desc }}</p>

      <!-- Optional meta line: shows only if any exist -->
      <ul class="list-unstyled small text-muted mb-2"
          v-if="item.material || item.category || item.color || item.size">
        <li v-if="item.material"><i class="bi bi-recycle me-1"></i><strong>Material:</strong> {{ item.material }}</li>
        <li v-if="item.category"><i class="bi bi-tag me-1"></i><strong>Category:</strong> {{ item.category }}</li>
        <li v-if="item.color"><i class="bi bi-palette me-1"></i><strong>Color:</strong> {{ item.color }}</li>
        <li v-if="item.size"><i class="bi bi-arrows-fullscreen me-1"></i><strong>Size:</strong> {{ item.size }}</li>
      </ul>

      <div class="d-flex align-items-center justify-content-between mt-2">
        <strong class="fs-5">R{{ item.price }}</strong>
        <button type="button" class="btn btn-success btn-sm" disabled aria-disabled="true" title="Add to cart coming soon">
          <i class="bi bi-cart3 me-1"></i> Add to cart
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({ item: Object })

function onImgError(e) {
  if (!e.target.__errored) {
    e.target.__errored = true
    e.target.src = '/images/products/placeholder.jpg'
  }
}
</script>

<style scoped>
.product-img { height: 210px; object-fit: cover; }
.product-tile { transition: transform .2s ease, box-shadow .2s ease; box-shadow: 0 10px 24px rgba(0,0,0,.06); }
.product-tile:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(0,0,0,.08); }
.product-name { font-family: "Playfair Display", Georgia, serif; }
</style>
