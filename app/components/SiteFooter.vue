<script setup lang="ts">
import { products, services, siteConfig } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p class="eyebrow">{{ siteConfig.companyName }}</p>
        <h2>Thoughtful digital work, built to last</h2>
        <p class="footer-copy">
          {{ siteConfig.intro }}
        </p>
      </div>

      <div>
        <h3>Services</h3>
        <ul class="footer-links">
          <li v-for="service in services" :key="service.slug">
            <NuxtLink :to="`/services/${service.slug}`">{{ service.name }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h3>Products</h3>
        <ul class="footer-links">
          <li v-for="product in products" :key="product.slug">
            <NuxtLink :to="`/products/${product.slug}`">{{ product.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="container footer-bar">
      <p>© {{ year }} {{ siteConfig.companyName }}. Based in {{ siteConfig.location }}.</p>
    </div>
  </footer>
</template>
