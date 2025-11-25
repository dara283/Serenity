import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Services from '../pages/Services.vue'
import Gallery from '../pages/Gallery.vue'
import AboutContact from '../pages/AboutContact.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/products', name: 'products', component: Products },
  { path: '/services', name: 'services', component: Services },
  { path: '/gallery', name: 'gallery', component: Gallery },
  { path: '/about', name: 'about', component: AboutContact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})
