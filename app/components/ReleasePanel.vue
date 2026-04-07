<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import type { ProductRelease } from '~/data/site'

defineProps<{
  latestRelease: ProductRelease | null
  olderReleases: ProductRelease[]
}>()

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true
})

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
}

function getReleaseNotesSource(release: ProductRelease) {
  return release.notesMarkdown || release.notes.join('\n\n')
}

function renderReleaseNotes(release: ProductRelease) {
  return markdown.render(getReleaseNotesSource(release))
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
      <div class="release-card__top">
        <div>
          <p class="eyebrow">Latest version</p>
          <h3>{{ latestRelease.name || latestRelease.version }}</h3>
          <p class="muted">Available {{ formatDate(latestRelease.publishedAt) }}</p>
        </div>
      </div>

      <div
        v-if="getReleaseNotesSource(latestRelease)"
        class="page-copy release-notes"
        v-html="renderReleaseNotes(latestRelease)"
      />

      <div v-if="latestRelease.downloads.length" class="download-actions">
        <div v-for="download in latestRelease.downloads" :key="download.url" class="download-item">
          <div class="download-item__meta">
            <strong class="download-item__name">{{ download.label }}</strong>
            <span class="muted">{{ download.size || 'Latest download' }}</span>
          </div>

          <a
            :href="download.url"
            target="_blank"
            rel="noreferrer"
            class="button button-primary"
          >
            Download
          </a>
        </div>
      </div>
    </div>

    <div v-if="olderReleases.length" class="card archive-card">
      <div class="archive-card__heading">
        <p class="eyebrow">Past versions</p>
      </div>

      <div class="archive-accordion">
        <details v-for="release in olderReleases" :key="release.version" class="archive-item">
          <summary class="archive-item__summary">
            <div>
              <strong>{{ release.name || release.version }}</strong>
              <p class="muted">{{ formatDate(release.publishedAt) }}</p>
            </div>
            <span class="archive-item__toggle">
              <span class="archive-item__toggle-label archive-item__toggle-label--closed">View details</span>
              <span class="archive-item__toggle-label archive-item__toggle-label--open">Hide details</span>
            </span>
          </summary>

          <div class="archive-item__content">
            <div
              v-if="getReleaseNotesSource(release)"
              class="page-copy release-notes"
              v-html="renderReleaseNotes(release)"
            />

            <div v-if="release.downloads.length" class="download-actions download-actions--stacked">
              <div v-for="download in release.downloads" :key="download.url" class="download-item">
                <div class="download-item__meta">
                  <strong class="download-item__name">{{ download.label }}</strong>
                  <span class="muted">{{ download.size || 'Installer' }}</span>
                </div>

                <a
                  :href="download.url"
                  target="_blank"
                  rel="noreferrer"
                  class="button button-secondary"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>
