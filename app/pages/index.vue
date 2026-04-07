<script setup lang="ts">
import { services, siteConfig } from '~/data/site'

const serviceCards = services.map((service) => ({
  eyebrow: 'Service',
  title: service.name,
  text: service.summary,
  bullets: service.deliverables.slice(0, 3),
  to: `/services/${service.slug}`,
  linkText: 'View service'
}))

const valueCards = siteConfig.values.map((value) => ({
  eyebrow: 'Core value',
  title: value.title,
  text: value.text
}))

const processCards = siteConfig.process.map((step, index) => ({
  eyebrow: `Step ${index + 1}`,
  title: step.title,
  text: step.text
}))

useSeoMeta({
  title: 'Home',
  description: siteConfig.metaDescription,
  ogTitle: siteConfig.companyName,
  ogDescription: siteConfig.metaDescription
})
</script>

<template>
  <div>
    <HeroSection
      eyebrow="York, Pennsylvania"
      title="Consumer-focused digital products built to last"
      :intro="siteConfig.intro"
      :actions="[
        { label: 'Explore services', to: '#services' },
        { label: 'Get in touch with us', to: '/contact', variant: 'secondary' }
      ]"
    />

    <section class="section-block">
      <div class="container split-section">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A steady partner for the work that matters."
            :intro="siteConfig.blurb"
          />
        </div>

        <div class="image-panel">
          <img src="/handshake.jpg" alt="A handshake representing partnership and trust." />
        </div>
      </div>
    </section>

    <section class="section-block section-block--soft">
      <div class="container">
        <SectionHeading
          eyebrow="Values"
          title="The way we work is just as important as what we build."
          intro="Every engagement is shaped by practical communication and a long-view mindset."
        />
        <FeatureGrid :items="valueCards" />
      </div>
    </section>

    <section id="services" class="section-block">
      <div class="container">
        <SectionHeading
          eyebrow="Services"
          title="Support where your brand and infrastructure need it most."
          intro="From polished websites to custom internal tools, each service is designed to meet real business needs."
        />
        <FeatureGrid :items="serviceCards" :columns="2" />
      </div>
    </section>

    <section class="section-block section-block--soft">
      <div class="container spotlight-grid">
        <div>
          <SectionHeading
            eyebrow="Working together"
            title="Practical guidance without unnecessary pressure"
            intro="The goal is not to rush you into decisions. It is to build something useful, steady, and aligned with where your business is headed."
          />
        </div>

        <div class="card">
          <p class="eyebrow">What that looks like</p>
          <h3>Clear communication, thoughtful pacing, and solutions that fit.</h3>
          <p>
            From first conversations through launch, the process stays collaborative, honest, and grounded in what will serve your business well over time.
          </p>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <SectionHeading
          eyebrow="Process"
          title="A calmer path from idea to launch"
          intro="We keep the work grounded, realistic, and aligned with your goals from the first conversation onward."
        />
        <FeatureGrid :items="processCards" />
      </div>
    </section>
  </div>
</template>
