<script setup lang="ts">
interface FeatureItem {
  title: string
  text: string
  eyebrow?: string
  bullets?: string[]
  to?: string
  linkText?: string
  external?: boolean
}

withDefaults(defineProps<{
  items: FeatureItem[]
  columns?: 2 | 3
}>(), {
  columns: 3
})
</script>

<template>
  <div class="card-grid" :class="{ 'card-grid--two': columns === 2 }">
    <article v-for="item in items" :key="item.title" class="card card--feature">
      <p v-if="item.eyebrow" class="eyebrow">{{ item.eyebrow }}</p>
      <h3>{{ item.title }}</h3>
      <p>{{ item.text }}</p>

      <ul v-if="item.bullets?.length" class="bullet-list">
        <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
      </ul>

      <NuxtLink
        v-if="item.to"
        :to="item.to"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noreferrer' : undefined"
        class="text-link"
      >
        {{ item.linkText || 'Learn more' }}
      </NuxtLink>
    </article>
  </div>
</template>
