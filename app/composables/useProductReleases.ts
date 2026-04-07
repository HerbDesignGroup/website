import type { ProductDefinition, ProductRelease } from '~/data/site'

interface GitHubReleaseAsset {
  name: string
  browser_download_url: string
  size: number
}

interface GitHubRelease {
  name: string | null
  tag_name: string
  body: string | null
  published_at: string
  draft: boolean
  prerelease: boolean
  assets: GitHubReleaseAsset[]
}

function formatFileSize(bytes: number) {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return undefined
  }

  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }

  if (bytes >= 1024) {
    return `${Math.round(bytes / 1024)} KB`
  }

  return `${bytes} B`
}

function formatReleaseNotes(body: string | null) {
  const lines = body
    ?.split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^#+\s*/, '').replace(/^[-*]\s+/, '')) ?? []

  return lines.length ? lines : ['Download the latest build from GitHub.']
}

function mapGitHubRelease(release: GitHubRelease): ProductRelease {
  return {
    version: release.tag_name,
    name: release.name || undefined,
    publishedAt: release.published_at,
    notes: formatReleaseNotes(release.body),
    notesMarkdown: release.body || undefined,
    downloads: release.assets.map((asset) => ({
      label: asset.name,
      url: asset.browser_download_url,
      size: formatFileSize(asset.size)
    }))
  }
}

export function useProductReleases(product: ProductDefinition) {
  const fallbackReleases = product.releases

  const { data, error, refresh, status } = useAsyncData<ProductRelease[]>(
    `product-releases-${product.slug}`,
    async () => {
      const releaseSource = product.releaseSource

      if (!releaseSource || releaseSource.provider !== 'github') {
        return fallbackReleases
      }

      const releases = await $fetch<GitHubRelease[]>(
        `https://api.github.com/repos/${releaseSource.owner}/${releaseSource.repo}/releases`,
        {
          headers: {
            Accept: 'application/vnd.github+json'
          }
        }
      )

      const mappedReleases = releases
        .filter((release) => !release.draft && !release.prerelease)
        .map(mapGitHubRelease)
        .filter((release) => release.downloads.length)

      return mappedReleases.length ? mappedReleases : fallbackReleases
    },
    {
      server: false,
      lazy: true,
      default: () => fallbackReleases
    }
  )

  const releases = computed(() => data.value?.length ? data.value : fallbackReleases)

  return {
    releases,
    releaseError: error,
    refreshReleases: refresh,
    releaseStatus: status
  }
}
