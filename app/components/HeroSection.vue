<script setup lang="ts">
interface HeroAction {
  label: string
  to: string
  external?: boolean
  variant?: 'primary' | 'secondary'
}

defineProps<{
  eyebrow?: string
  title: string
  intro: string
  actions?: HeroAction[]
}>()
</script>

<template>
  <section class="hero-section">
    <div class="container hero-layout">
      <div class="hero-copy">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h1>{{ title }}</h1>
        <p class="hero-intro">{{ intro }}</p>

        <div v-if="actions?.length" class="hero-actions">
          <NuxtLink
            v-for="action in actions"
            :key="`${action.label}-${action.to}`"
            :to="action.to"
            :target="action.external ? '_blank' : undefined"
            :rel="action.external ? 'noreferrer' : undefined"
            class="button"
            :class="action.variant === 'secondary' ? 'button-secondary' : 'button-primary'"
          >
            {{ action.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
