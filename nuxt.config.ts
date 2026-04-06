import { productSlugs, serviceSlugs, siteConfig } from './app/data/site'

const configuredBaseURL = process.env.NUXT_APP_BASE_URL?.trim()
const baseURL = !configuredBaseURL || configuredBaseURL === '/'
  ? '/'
  : configuredBaseURL.endsWith('/')
    ? configuredBaseURL
    : `${configuredBaseURL}/`

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: `%s · ${siteConfig.companyName}`,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: siteConfig.metaDescription
        },
        {
          name: 'theme-color',
          content: siteConfig.colors.primary
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      qvaPurchaseUrl: process.env.NUXT_PUBLIC_QVA_PURCHASE_URL || 'https://polar.sh/herbdesigngroup'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/contact', ...serviceSlugs, ...productSlugs]
    }
  },
  routeRules: {
    '/**': { prerender: true }
  }
})
