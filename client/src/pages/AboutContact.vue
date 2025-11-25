<template>
  <!-- TOP: page header -->
  <section class="section">
    <div class="container">
      <div class="text-center mb-4">
        <h1 class="h2 mb-2" style="font-family:'Playfair Display', Georgia, serif;">About & Contact</h1>
    
      </div>
      <div class="row g-4">
        <!-- ABOUT COLUMN -->
        <div class="col-12 col-lg-6">
          <div class="border rounded-4 bg-white p-4 shadow-sm h-100">
            <h2 class="h4 mb-2" style="font-family:'Playfair Display', Georgia, serif;">Our Story</h2>
            <p class="text-muted">
              Serenity Studio is a mindful space for yoga, meditation, and gentle strength work. 
              We keep classes small for personal attention and offer approachable programs for all levels.
            </p>

            <div class="row g-3 mt-2">
              <div class="col-12 col-md-6">
                <div class="d-flex align-items-start gap-2">
                  <i class="bi bi-people fs-4 text-success"></i>
                  <div>
                    <div class="fw-semibold">Small groups</div>
                    <small class="text-muted">Max 10 per class for care and clarity.</small>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex align-items-start gap-2">
                  <i class="bi bi-flower1 fs-4 text-success"></i>
                  <div>
                    <div class="fw-semibold">Beginner-friendly</div>
                    <small class="text-muted">Options and props to meet you where you are.</small>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex align-items-start gap-2">
                  <i class="bi bi-heart fs-4 text-success"></i>
                  <div>
                    <div class="fw-semibold">Mind–body approach</div>
                    <small class="text-muted">Movement, breath, and simple rituals for balance.</small>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex align-items-start gap-2">
                  <i class="bi bi-sun fs-4 text-success"></i>
                  <div>
                    <div class="fw-semibold">Warm community</div>
                    <small class="text-muted">A supportive space to recharge and connect.</small>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ (Bootstrap accordion) -->
            <div class="mt-4">
              <h3 class="h5 mb-2" style="font-family:'Playfair Display', Georgia, serif;">FAQ</h3>
              <div class="accordion" id="faq">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="q1">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="a1">
                      I’m new to yoga—where do I start?
                    </button>
                  </h2>
                  <div id="a1" class="accordion-collapse collapse" aria-labelledby="q1" data-bs-parent="#faq">
                    <div class="accordion-body text-muted">
                      Try <strong>Gentle Flow</strong> or <strong>Restorative</strong>. Arrive 10 minutes early; our coaches will get you set up with props and options.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="q2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="a2">
                      What should I bring?
                    </button>
                  </h2>
                  <div id="a2" class="accordion-collapse collapse" aria-labelledby="q2" data-bs-parent="#faq">
                    <div class="accordion-body text-muted">
                      Comfortable clothing and a water bottle. Mats and props are provided, or you can bring your own.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="q3">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="a3">
                      Do you offer private sessions?
                    </button>
                  </h2>
                  <div id="a3" class="accordion-collapse collapse" aria-labelledby="q3" data-bs-parent="#faq">
                    <div class="accordion-body text-muted">
                      Yes—book <strong>Wellness Coaching</strong> or a private yoga session to focus on your goals and schedule.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CONTACT COLUMN -->
        <div class="col-12 col-lg-6">
          <div class="border rounded-4 bg-white p-4 shadow-sm h-100 d-flex flex-column">
            <h2 class="h4 mb-2" style="font-family:'Playfair Display', Georgia, serif;">Get in touch</h2>
            <p class="text-muted">Questions, bookings, or first-time guidance, we’re here to help.</p>

            <!-- Contact details -->
            <ul class="list-unstyled small text-muted mb-3">
              <li class="mb-1"><i class="bi bi-geo-alt me-2"></i>25 Loop Street, Cape Town, 8000</li>
              <li class="mb-1"><i class="bi bi-telephone me-2"></i>060 777 8899</li>
              <li class="mb-1"><i class="bi bi-envelope me-2"></i>hello@serenitystudio.co.za</li>
              <li class="mb-1"><i class="bi bi-clock me-2"></i>Mon–Fri 06:00–19:30 · Sat 08:00–14:00</li>
            </ul>

            <!-- Contact form (UI only) -->
            <form @submit.prevent class="mt-2">
              <div class="row g-3">
                <div class="col-12 col-md-6">
                  <label class="form-label" for="name">Name</label>
                  <input id="name" class="form-control" required />
                </div>
                <div class="col-12 col-md-6">
                  <label class="form-label" for="email">Email</label>
                  <input id="email" type="email" class="form-control" required />
                </div>
                <div class="col-12 col-md-6">
                  <label class="form-label" for="interest">Class of Interest</label>
                  <select id="interest" class="form-select">
                    <option>Gentle Flow Yoga</option>
                    <option>Vinyasa Energize</option>
                    <option>Guided Meditation</option>
                    <option>Restorative Yoga</option>
                    <option>Wellness Coaching</option>
                    <option>Prenatal Yoga</option>
                  </select>
                </div>
                <div class="col-12 col-md-6">
                  <label class="form-label" for="subject">Subject</label>
                  <input id="subject" class="form-control" placeholder="Booking, Pricing, Schedule…" />
                </div>
                <div class="col-12">
                  <label class="form-label" for="msg">Message</label>
                  <textarea id="msg" rows="4" class="form-control" placeholder="Tell us a little about what you need…"></textarea>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="consent" required />
                    <label class="form-check-label small text-muted" for="consent">
                      I agree to be contacted about my enquiry.
                    </label>
                  </div>
                </div>
              </div>
              <div class="d-flex gap-2 mt-3">
                <button class="btn btn-success" type="submit" disabled title="Demo form">
                  Send message
                </button>
                <a class="btn btn-outline-success" href="tel:0607778899">
                  <i class="bi bi-telephone me-1"></i> Call us
                </a>
              </div>
            </form>

            <!-- Map / image (keeps the card tall and balanced) -->
            <div class="mt-4">
              <div class="map-ratio rounded-4 overflow-hidden border">
                <img src="/images/map-placeholder.png" alt="Map to Serenity Studio" class="w-100 h-100 object-fit-cover" />
              </div>
              <small class="text-muted d-block mt-2">
                Street parking available on Loop Street. 2-minute walk from bus stop.
              </small>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// page is static UI; no script logic required beyond Vue SFC
</script>

<style scoped>
/* 16:9 map/media box using pure CSS, keeps layout calm and consistent */
.map-ratio { position: relative; width: 100%; padding-top: 56.25%; }
.map-ratio > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
</style>
