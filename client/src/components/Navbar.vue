<template>
  <nav class="navbar navbar-expand-lg border-bottom sticky-top">
    <div class="container">
      <router-link class="navbar-brand brand fw-bold" to="/">Serenity</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="nav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item"><router-link class="nav-link" active-class="active fw-semibold" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" active-class="active fw-semibold" to="/products">Products</router-link></li>
          <li class="nav-item"><router-link class="nav-link" active-class="active fw-semibold" to="/services">Services</router-link></li>
          <li class="nav-item"><router-link class="nav-link" active-class="active fw-semibold" to="/gallery">Gallery</router-link></li>
          <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
            <router-link class="btn btn-success" to="/about">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
