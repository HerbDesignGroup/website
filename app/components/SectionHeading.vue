<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div class="section-heading" :class="align === 'center' ? 'section-heading--center' : ''">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="intro" class="section-intro">{{ intro }}</p>
  </div>
</template>
