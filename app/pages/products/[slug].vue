<script setup lang="ts">
import { useProductReleases } from '~/composables/useProductReleases'
import { getProductBySlug } from '~/data/site'

const route = useRoute()
const router = useRouter()
const matchedProduct = getProductBySlug(route.params.slug as string)

if (!matchedProduct) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found'
  })
}

const product = matchedProduct
const { releases } = useProductReleases(product)
const latestRelease = computed(() => releases.value[0] ?? null)
const olderReleases = computed(() => releases.value.slice(1))
const purchaseUrl = computed(() => product.purchaseUrl)
const latestDownloadUrl = computed(() => {
  const src = product.releaseSource
  if (
    src?.provider === 'github'
    && src.latestAssetName
    && product.releaseFallbackTag
  ) {
    return `https://github.com/${src.owner}/${src.repo}/releases/download/${encodeURIComponent(product.releaseFallbackTag)}/${encodeURIComponent(src.latestAssetName)}`
  }

  return latestRelease.value?.downloads?.[0]?.url || purchaseUrl.value
})

const heroActions = computed(() => [
  {
    label: 'Purchase a license',
    to: purchaseUrl.value,
    external: true
  },
  {
    label: 'Download latest version',
    to: latestDownloadUrl.value,
    external: true,
    variant: 'secondary' as const
  }
])

useSeoMeta({
  title: product.name,
  description: product.summary,
  ogTitle: `${product.name} | Herb Design Group`,
  ogDescription: product.summary
})

function hasPolarCheckoutId() {
  const raw = route.query.checkout_id
  const id = Array.isArray(raw) ? raw[0] : raw
  return typeof id === 'string' && id.trim().length > 0
}

const showPolarCheckoutThanks = ref(false)

function syncPolarCheckoutThanks() {
  showPolarCheckoutThanks.value = hasPolarCheckoutId()
}

function dismissPolarCheckoutThanks() {
  showPolarCheckoutThanks.value = false

  if (!hasPolarCheckoutId()) {
    return
  }

  const nextQuery = { ...route.query }
  delete nextQuery.checkout_id
  router.replace({ path: route.path, query: nextQuery })
}

onMounted(() => {
  syncPolarCheckoutThanks()
})

watch(() => route.query.checkout_id, () => {
  syncPolarCheckoutThanks()
})
</script>

<template>
  <div>
    <PurchaseThanksDialog
      :open="showPolarCheckoutThanks"
      :product-name="product.name"
      @close="dismissPolarCheckoutThanks"
    />

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
        </div>

        <div v-if="product.featureImage" class="image-panel image-panel--contain">
          <img :src="product.featureImage.src" :alt="product.featureImage.alt">
        </div>

        <div v-else class="card">
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

    <section v-if="product.documents?.length" class="section-block section-block--soft">
      <div class="container">
        <SectionHeading
          eyebrow="Documentation"
          title="Guides, setup help, and policies"
        />

        <div class="card-grid card-grid--two">
          <article v-for="document in product.documents" :key="document.slug" class="card card--feature">
            <p class="eyebrow">Document</p>
            <h3>{{ document.title }}</h3>
            <p>{{ document.summary }}</p>
            <NuxtLink :to="document.to" class="text-link">Read</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
