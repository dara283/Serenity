<script setup>
import SectionHeading from '../components/SectionHeading.vue'
</script>

<template>
  <!-- HERO -->
   
 <section class="hero has-image">
  <div class="container py-5 text-center">
      <h1 class="hero-title">Find balance in your body and mind.</h1>
      <p class="hero-sub">
        A calm, welcoming studio for yoga, meditation, and holistic wellness in Cape Town.
        Join us to build strength, ease stress, and recharge your energy.
      </p>
      <div class="d-flex gap-2 justify-content-center">
        <router-link to="/services" class="btn btn-success">View Classes</router-link>
        <router-link to="/products" class="btn btn-outline-success">Shop Essentials</router-link> 
   </div>
    </div>
  </section>
  

  <!-- PILLARS -->
  <section>
    <div class="container">
      <SectionHeading title="Our Pillars" subtitle="Thoughtfully designed for all levels" />
      <div class="row g-3">
        <div class="col-12 col-md-4">
          <div class="card h-100"><div class="card-body">
            <h2 class="h5">Move</h2>
            <p>Gentle yoga and mindful strength to support posture, mobility, and balance.</p>
          </div></div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card h-100"><div class="card-body">
            <h2 class="h5">Breathe</h2>
            <p>Breathwork and meditation practices that reduce stress and improve focus.</p>
          </div></div>
        </div>
        <div class="col-12 col-md-4">
          <div class="card h-100"><div class="card-body">
            <h2 class="h5">Restore</h2>
            <p>Restorative sessions to unwind your nervous system and recharge your energy.</p>
          </div></div>
        </div>
      </div>
    </div>
  </section>
</template>
