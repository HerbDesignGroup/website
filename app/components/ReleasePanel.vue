<script setup lang="ts">
import type { ProductRelease } from '~/data/site'

const props = defineProps<{
  latestRelease: ProductRelease | null
  olderReleases: ProductRelease[]
}>()

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
}
</script>

<template>
  <section class="release-panel">
    <div class="release-panel__header">
      <SectionHeading
        eyebrow="Downloads"
        title="Downloads"
      />
    </div>

    <div v-if="latestRelease" class="card release-card release-card--latest">
      <p class="eyebrow">Latest version</p>
      <h3>{{ latestRelease.name || latestRelease.version }}</h3>
      <p class="muted">Available {{ formatDate(latestRelease.publishedAt) }}</p>

      <div v-if="latestRelease.notes?.length" class="page-copy release-notes">
        <p v-for="line in latestRelease.notes" :key="line">{{ line }}</p>
      </div>

      <ul v-if="latestRelease.downloads.length" class="download-list">
        <li v-for="download in latestRelease.downloads" :key="download.url">
          <a :href="download.url" target="_blank" rel="noreferrer">
            {{ download.label }}
          </a>
          <span>{{ download.size || 'Download' }}</span>
        </li>
      </ul>
    </div>

    <div v-if="olderReleases.length" class="card archive-card">
      <div class="archive-card__heading">
        <h3>Past versions</h3>
        <p class="muted">Earlier downloads will appear here as additional versions become available.</p>
      </div>

      <ul class="archive-list">
        <li v-for="release in olderReleases" :key="release.version">
          <div>
            <strong>{{ release.name || release.version }}</strong>
            <p>{{ formatDate(release.publishedAt) }}</p>
          </div>
          <a :href="release.downloads[0]?.url" target="_blank" rel="noreferrer">Download</a>
        </li>
      </ul>
    </div>
  </section>
</template>
