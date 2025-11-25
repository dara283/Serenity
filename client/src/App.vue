<template>
  <Navbar />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
main { min-height: 70vh; }

:root{
  --sage-50:#f4f6f1; --sage-500:#a3b18a; --sage-700:#6b755c;
  --coral-500:#ff9b9b; --border:#e5e7eb; --text:#2c2c2c; --bg:#f8f9f5;
}
html, body { background: var(--bg); }
body {
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif;
  color: var(--text); letter-spacing: .1px;
}
h1, .display-6, .brand, .hero-title { font-family: "Playfair Display", Georgia, serif; }
.card {
  border: 1px solid var(--border); border-radius: 1rem;
  box-shadow: 0 10px 24px rgba(0,0,0,.06);
  transition: transform .2s ease, box-shadow .2s ease; background: #fff;
}
.card:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(0,0,0,.08); }
.btn { border-radius: 999px; padding: .6rem 1.1rem; font-weight: 600; }
.btn-coral { background: var(--coral-500); color: #1f2937; border: none; }
.btn-coral:hover { filter: brightness(.95); }
.section { padding: 4rem 0; }
.section-soft { background: linear-gradient(180deg, var(--sage-50), #fff); }
.hero {
  position: relative; min-height: clamp(380px, 48vh, 540px);
  display: grid; place-items: center; text-align: center; overflow: hidden;
  background: radial-gradient(1000px 500px at 50% -10%, #ffffff80, #ffffff),
              linear-gradient(180deg, #ffffff, var(--sage-50));
}
.hero.has-image {
  background: linear-gradient(180deg, rgba(255,255,255,.85), rgba(244,246,241,.9)),
              url('/images/hero-yoga.jpg') center/cover no-repeat;
}
.hero .kicker {
  display:inline-block; font-weight:600; letter-spacing:1px; text-transform:uppercase;
  color: var(--sage-700); background:#fff; border:1px solid var(--border);
  border-radius:999px; padding:.25rem .7rem;
}
.hero .hero-title { font-size: clamp(28px, 5vw, 44px); margin:.75rem 0 1rem; }
.hero .hero-sub { color:#4b5563; max-width:720px; margin:0 auto 1.25rem; }
.navbar { background:#fff !important; backdrop-filter:saturate(180%) blur(6px); }
.nav-link { padding: .5rem 1rem !important; }
hr { opacity: .3; }

.slogan-text {
  font-family: "Playfair Display", Georgia, serif; /* same as headings */
  font-size: 1 rem; /* slightly bigger than normal text */
  font-weight: 600;
  color: #000; /* calm, muted tone */
}



</style>