<script setup lang="ts">
import { getProductBySlug } from '~/data/site'

const route = useRoute()
const matchedProduct = getProductBySlug(route.params.slug as string)

if (!matchedProduct) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found'
  })
}

const product = matchedProduct
const latestRelease = computed(() => product.releases[0] ?? null)
const olderReleases = computed(() => product.releases.slice(1))
const latestDownload = computed(() => latestRelease.value?.downloads?.[0] ?? null)
const purchaseUrl = computed(() => product.purchaseUrl)

const heroActions = computed(() => [
  {
    label: 'Purchase a license',
    to: purchaseUrl.value,
    external: true
  },
  {
    label: 'Download current version',
    to: latestDownload.value?.url || purchaseUrl.value,
    external: true,
    variant: 'secondary' as const
  }
])

useHead({
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js',
      defer: true,
      'data-auto-init': true,
      tagPosition: 'bodyClose'
    }
  ]
})

useSeoMeta({
  title: product.name,
  description: product.summary,
  ogTitle: `${product.name} | Herb Design Group`,
  ogDescription: product.summary
})
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Product"
      :title="product.name"
      :intro="product.summary"
      :actions="heroActions"
    />

    <section class="section-block">
      <div class="container split-section">
        <div>
          <SectionHeading
            eyebrow="Overview"
            :title="product.tagline"
          />

          <div class="page-copy">
            <p v-for="paragraph in product.description" :key="paragraph">{{ paragraph }}</p>
          </div>

          <ul class="bullet-list">
            <li v-for="highlight in product.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </div>

        <div class="card">
          <p class="eyebrow">Purchase</p>
          <h3>Get your license and start playing.</h3>
          <p>
            Purchase Q Virtual Amp securely below. Once licensed, you can download the current build and get right into your practice setup.
          </p>
          <a
            :href="purchaseUrl"
            class="button button-primary polar-button"
            data-polar-checkout
            data-polar-checkout-theme="dark"
          >
            Purchase
          </a>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <ReleasePanel
          :latest-release="latestRelease"
          :older-releases="olderReleases"
        />
      </div>
    </section>
  </div>
</template>
