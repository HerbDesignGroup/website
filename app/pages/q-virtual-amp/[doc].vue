<script setup lang="ts">
import endUserLicenseAgreementSource from '../../../public/q-virtual-amp/end-user-license-agreement.md?raw'
import gettingStartedSource from '../../../public/q-virtual-amp/getting-started.md?raw'
import privacyPolicySource from '../../../public/q-virtual-amp/privacy-policy.md?raw'
import termsOfServiceSource from '../../../public/q-virtual-amp/terms-of-service.md?raw'
import { getQvaDocumentBySlug } from '~/data/site'

const route = useRoute()
const documentInfo = getQvaDocumentBySlug(route.params.doc as string)

if (!documentInfo) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Document not found'
  })
}

const documentSources: Record<string, string> = {
  'end-user-license-agreement': endUserLicenseAgreementSource,
  'getting-started': gettingStartedSource,
  'privacy-policy': privacyPolicySource,
  'terms-of-service': termsOfServiceSource
}

const markdown = computed(() => documentSources[documentInfo.slug] ?? '')

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function renderInline(value: string) {
  return escapeHtml(value)
    .replace(/&lt;br\s*\/?&gt;/gi, '<br>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
}

function parseTableRow(line: string) {
  return line
    .split('|')
    .slice(1, -1)
    .map((cell) => cell.trim())
}

function isTableDivider(cells: string[]) {
  return cells.every((cell) => /^:?-{3,}:?$/.test(cell))
}

function renderMarkdown(source: string) {
  const lines = source.replace(/\r\n/g, '\n').split('\n')
  const html: string[] = []
  let paragraphLines: string[] = []
  let listType: 'ul' | 'ol' | null = null
  let listItems: string[] = []
  let tableRows: string[][] = []

  const flushParagraph = () => {
    if (!paragraphLines.length) {
      return
    }

    html.push(`<p>${paragraphLines.join(' ')}</p>`)
    paragraphLines = []
  }

  const flushList = () => {
    if (!listType || !listItems.length) {
      listType = null
      listItems = []
      return
    }

    html.push(`<${listType}>${listItems.map((item) => `<li>${item}</li>`).join('')}</${listType}>`)
    listType = null
    listItems = []
  }

  const flushTable = () => {
    if (!tableRows.length) {
      return
    }

    const [header = [], ...rest] = tableRows
    const bodyRows = rest[0] && isTableDivider(rest[0]) ? rest.slice(1) : rest

    html.push(`
      <div class="doc-table-wrap">
        <table>
          <thead>
            <tr>${header.map((cell) => `<th>${renderInline(cell)}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${bodyRows.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
    `)

    tableRows = []
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      flushParagraph()
      flushList()
      flushTable()
      continue
    }

    if (/^\|.*\|$/.test(line)) {
      flushParagraph()
      flushList()
      tableRows.push(parseTableRow(line))
      continue
    }

    flushTable()

    if (/^---+$/.test(line)) {
      flushParagraph()
      flushList()
      html.push('<hr>')
      continue
    }

    const headingMatch = line.match(/^(#{1,4})\s+(.*)$/)

    if (headingMatch) {
      flushParagraph()
      flushList()
      const [, hashes = '#', headingText = ''] = headingMatch
      const level = hashes.length
      html.push(`<h${level}>${renderInline(headingText)}</h${level}>`)
      continue
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/)

    if (orderedMatch) {
      flushParagraph()
      if (listType && listType !== 'ol') {
        flushList()
      }
      listType = 'ol'
      const orderedText = orderedMatch[1] ?? ''
      listItems.push(renderInline(orderedText))
      continue
    }

    const bulletMatch = line.match(/^[-*]\s+(.*)$/)

    if (bulletMatch) {
      flushParagraph()
      if (listType && listType !== 'ul') {
        flushList()
      }
      listType = 'ul'
      const bulletText = bulletMatch[1] ?? ''
      listItems.push(renderInline(bulletText))
      continue
    }

    flushList()
    paragraphLines.push(renderInline(line))
  }

  flushParagraph()
  flushList()
  flushTable()

  return html.join('\n')
}

const renderedHtml = computed(() => renderMarkdown(markdown.value ?? ''))

useSeoMeta({
  title: `${documentInfo.title} | Q Virtual Amp`,
  description: documentInfo.summary,
  ogTitle: `${documentInfo.title} | Q Virtual Amp`,
  ogDescription: documentInfo.summary
})
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Q Virtual Amp docs"
      :title="documentInfo.title"
      :intro="documentInfo.summary"
      :actions="[
        { label: 'Back to Q Virtual Amp', to: '/products/q-virtual-amp', variant: 'secondary' },
        { label: 'Open raw markdown', to: documentInfo.sourcePath, external: true }
      ]"
    />

    <section class="section-block">
      <div class="container">
        <article class="card doc-shell">
          <div class="doc-meta">
            <p class="eyebrow">Included with Q Virtual Amp</p>
            <p class="muted">
              This page is rendered from the original markdown document bundled in `public/q-virtual-amp`.
            </p>
          </div>

          <div class="doc-content" v-html="renderedHtml" />
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.doc-shell {
  padding: clamp(1.25rem, 2vw, 2rem);
}

.doc-meta {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.doc-meta p {
  margin: 0;
}

.doc-content {
  color: var(--muted-strong);
}

.doc-content :deep(h1),
.doc-content :deep(h2),
.doc-content :deep(h3),
.doc-content :deep(h4) {
  color: var(--text);
  margin: 1.5rem 0 0.75rem;
}

.doc-content :deep(h1:first-child),
.doc-content :deep(h2:first-child),
.doc-content :deep(h3:first-child) {
  margin-top: 0;
}

.doc-content :deep(p),
.doc-content :deep(ul),
.doc-content :deep(ol) {
  margin: 0 0 1rem;
}

.doc-content :deep(ul),
.doc-content :deep(ol) {
  padding-left: 1.25rem;
}

.doc-content :deep(li + li) {
  margin-top: 0.45rem;
}

.doc-content :deep(hr) {
  border: 0;
  border-top: 1px solid var(--border);
  margin: 1.5rem 0;
}

.doc-content :deep(code) {
  padding: 0.12rem 0.38rem;
  border-radius: 0.4rem;
  background: rgba(98, 114, 84, 0.08);
  font-family: "SFMono-Regular", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.92em;
}

.doc-content :deep(a) {
  font-weight: 700;
}

.doc-content :deep(.doc-table-wrap) {
  overflow-x: auto;
  margin: 1rem 0 1.5rem;
}

.doc-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  min-width: 40rem;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid var(--border);
  border-radius: 0.9rem;
}

.doc-content :deep(th),
.doc-content :deep(td) {
  padding: 0.8rem 0.9rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--border);
}

.doc-content :deep(th) {
  color: var(--text);
  background: rgba(98, 114, 84, 0.08);
}

.doc-content :deep(tr:last-child td) {
  border-bottom: 0;
}

@media (max-width: 640px) {
  .doc-content :deep(table) {
    min-width: 34rem;
  }
}
</style>
