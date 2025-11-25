<template>
  <footer class="mt-4 text-light">
    <div class="bg-black py-5">
      <div class="container">
        <div class="row g-4">
          <!-- Brand / Slogan -->
          <div class="col-12 col-md-4">
            <div class="h5 mb-2">Serenity</div>
            <p class="mb-3 text-secondary">
              Move. Breathe. Restore. A calm, welcoming studio for yoga, meditation, and holistic wellness.
            </p>
            <div class="d-flex gap-3 fs-5">
              <a class="text-secondary" href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
              <a class="text-secondary" href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a class="text-secondary" href="#" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
              <a class="text-secondary" href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-6 col-md-4">
            <div class="h6 mb-3">Quick Links</div>
            <ul class="list-unstyled">
              <li><router-link class="footer-link" to="/">Home</router-link></li>
              <li><router-link class="footer-link" to="/services">Classes</router-link></li>
              <li><router-link class="footer-link" to="/products">Shop</router-link></li>
              <li><router-link class="footer-link" to="/gallery">Gallery</router-link></li>
              <li><router-link class="footer-link" to="/about">Contact</router-link></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="col-6 col-md-4">
            <div class="h6 mb-3">Contact</div>
            <ul class="list-unstyled text-secondary mb-3">
              <li><i class="bi bi-geo-alt me-2"></i>25 Loop Street, Cape Town, 8000</li>
              <li><i class="bi bi-telephone me-2"></i>060 777 8899</li>
              <li><i class="bi bi-envelope me-2"></i>hello@serenitystudio.co.za</li>
              <li><i class="bi bi-clock me-2"></i>Mon–Fri 06:00–19:30; Sat 08:00–14:00</li>
            </ul>
            <router-link to="/about" class="btn btn-success btn-sm">Get in touch</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark py-3">
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <small class="text-secondary">© {{ new Date().getFullYear() }} Serenity. All rights reserved.</small>
        <div class="mt-2 mt-md-0">
          <a class="text-secondary me-3 footer-link" href="#">Terms</a>
          <a class="text-secondary footer-link" href="#">Privacy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  color: #6c757d; /* matches the muted gray used for other text */
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #ffffff; /* turns white on hover for a calm effect */
  text-decoration: underline;
}

</style>
