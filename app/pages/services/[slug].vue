<script setup lang="ts">
import { getServiceBySlug, services } from '~/data/site'

const route = useRoute()
const matchedService = getServiceBySlug(route.params.slug as string)

if (!matchedService) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service not found'
  })
}

const service = matchedService

const relatedServices = services
  .filter((entry) => entry.slug !== service.slug)
  .map((entry) => ({
    eyebrow: 'Also available',
    title: entry.name,
    text: entry.summary,
    to: `/services/${entry.slug}`,
    linkText: 'View service'
  }))

useSeoMeta({
  title: service.name,
  description: service.summary,
  ogTitle: `${service.name} | Herb Design Group`,
  ogDescription: service.summary
})
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Service"
      :title="service.name"
      :intro="service.summary"
      :actions="[
        { label: 'Back to home', to: '/', variant: 'secondary' },
        { label: 'Explore websites', to: '/services/websites' }
      ]"
    />

    <section class="section-block">
      <div class="container split-section">
        <div>
          <SectionHeading
            eyebrow="Overview"
            :title="`What ${service.name.toLowerCase()} looks like with Herb Design Group`"
          />

          <div class="page-copy">
            <p v-for="paragraph in service.description" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>

        <div class="card">
          <p class="eyebrow">Included focus areas</p>
          <h3>How we can help</h3>
          <ul class="bullet-list">
            <li v-for="item in service.deliverables" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section-block section-block--soft">
      <div class="container">
        <SectionHeading
          eyebrow="Related services"
          title="Need support in another area?"
          intro="The work often overlaps, so it is easy to connect website, hosting, search, and software needs under one roof."
        />
        <FeatureGrid :items="relatedServices" />
      </div>
    </section>
  </div>
</template>
