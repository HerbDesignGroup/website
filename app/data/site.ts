export interface NavigationLink {
  label: string
  to: string
}

export interface NavigationGroup {
  label: string
  to?: string
  children?: NavigationLink[]
}

export interface ServiceDefinition {
  slug: string
  name: string
  summary: string
  description: string[]
  deliverables: string[]
}

export interface ProductDownload {
  label: string
  url: string
  size?: string
}

export interface ProductRelease {
  version: string
  name?: string
  publishedAt: string
  notes: string[]
  downloads: ProductDownload[]
}

export interface ProductFeatureImage {
  src: string
  alt: string
}

export interface ProductDocument {
  slug: string
  title: string
  summary: string
  to: string
  sourcePath: string
}

export interface ProductDefinition {
  slug: string
  name: string
  tagline: string
  summary: string
  description: string[]
  highlights: string[]
  releaseFallbackTag: string
  purchaseUrl: string
  releases: ProductRelease[]
  featureImage?: ProductFeatureImage
  documents?: ProductDocument[]
}

export const siteConfig = {
  companyName: 'Herb Design Group',
  taglineShort: 'Custom websites & software',
  location: 'York, Pennsylvania',
  metaDescription:
    'Herb Design Group builds thoughtful websites and custom software for businesses in York, Pennsylvania and beyond.',
  intro:
    'Herb Design Group helps businesses build websites, search visibility, and software that feel steady, useful, and well cared for.',
  blurb:
    'At Herb Design Group, we are passionate about providing top-quality service and solutions that provide the utmost satisfaction for our clients. Our full-trust approach is designed to help guide you on your journey to achieving your goals without pressuring you to get to the finish line as quickly as possible. Honesty, patience, and care are our core values from the moment we are introduced to each other to the moment of delivery.',
  colors: {
    primary: '#627254',
    accent: '#95A686'
  },
  navigation: [
    { label: 'Home', to: '/' },
    {
      label: 'Products',
      children: [{ label: 'Q Virtual Amp', to: '/products/q-virtual-amp' }]
    },
    {
      label: 'Services',
      children: [
        { label: 'Websites', to: '/services/websites' },
        { label: 'Hosting', to: '/services/hosting' },
        { label: 'SEO', to: '/services/seo' },
        { label: 'Custom Software', to: '/services/custom-software' }
      ]
    },
    { label: 'Contact', to: '/contact' }
  ] as NavigationGroup[],
  values: [
    {
      title: 'Honesty first',
      text: 'Clear expectations, straightforward recommendations, and practical guidance at every stage.'
    },
    {
      title: 'Patience in the process',
      text: 'Thoughtful work takes time. We move with purpose while giving ideas room to mature.'
    },
    {
      title: 'Care that shows',
      text: 'Every build is shaped around the people who will rely on it day after day.'
    }
  ],
  process: [
    {
      title: 'Listen well',
      text: 'We begin by learning what matters to your business, your customers, and your long-term goals.'
    },
    {
      title: 'Build deliberately',
      text: 'Design and development stay grounded in clarity, performance, and maintainability.'
    },
    {
      title: 'Support with confidence',
      text: 'Launch is the start of the relationship, not the end of it.'
    }
  ]
}

export const services: ServiceDefinition[] = [
  {
    slug: 'websites',
    name: 'Websites',
    summary:
      'Design and development for brands that need a site that feels polished, dependable, and easy to grow.',
    description: [
      'Whether you need design, development, or both, we create websites that present your business clearly and leave room for growth.',
      'From the first planning conversation through launch, the goal is to make your online presence feel intentional and genuinely representative of your brand.'
    ],
    deliverables: [
      'Brand-aware visual design',
      'Responsive front-end development',
      'Content structure and page planning',
      'Maintainable foundations for future updates'
    ]
  },
  {
    slug: 'hosting',
    name: 'Hosting',
    summary:
      'Safe, reliable hosting that gives your website a steady place to live and keeps it available when customers need it.',
    description: [
      'A good website needs dependable infrastructure behind it. We help set up hosting that is stable, secure, and suited to how your business operates.',
      'The result is less guesswork, fewer surprises, and a site your customers can reach with confidence.'
    ],
    deliverables: [
      'Reliable deployment setup',
      'Ongoing hosting guidance',
      'Performance-minded configuration',
      'A practical home for your website'
    ]
  },
  {
    slug: 'seo',
    name: 'SEO',
    summary:
      'Audit and optimization work that helps your website earn visibility and stand out in the right searches.',
    description: [
      'SEO is about helping the right people find you at the right time. We review what is helping, what is getting in the way, and where clear improvements can be made.',
      'That includes content structure, technical fundamentals, and practical steps that support long-term visibility.'
    ],
    deliverables: [
      'Search visibility audits',
      'On-page optimization recommendations',
      'Technical SEO improvements',
      'Clear next steps and priorities'
    ]
  },
  {
    slug: 'custom-software',
    name: 'Custom Software',
    summary:
      'Purpose-built tools for businesses that need solutions extending well beyond a traditional website.',
    description: [
      'Some problems call for something more tailored than off-the-shelf software. We build focused solutions that fit your workflow and support the way your team actually works.',
      'The emphasis stays on usefulness, maintainability, and software that gives your business room to grow.'
    ],
    deliverables: [
      'Workflow-focused application planning',
      'Custom internal or customer-facing tools',
      'Thoughtful feature development',
      'Long-term maintainable codebases'
    ]
  }
]

export const products: ProductDefinition[] = [
  {
    slug: 'q-virtual-amp',
    name: 'Q Virtual Amp',
    tagline: 'A virtual practice amplifier and pedalboard for guitar.',
    summary:
      'Q Virtual Amp is a virtual practice amplifier and pedalboard for guitar, built to help players dial in tone quickly and stay focused on playing.',
    description: [
      'Q Virtual Amp gives guitarists a streamlined way to plug in, shape their tone, and practice without needing a room full of hardware.',
      'From amp-style character to pedalboard-inspired flexibility, it is designed to keep the experience immediate, musical, and easy to return to every day.'
    ],
    highlights: [
      'A focused virtual amp and pedalboard workflow for everyday guitar practice',
      'Simple purchase and download access from one place',
      'A clean interface built to keep tone shaping close at hand'
    ],
    releaseFallbackTag: 'v1.0.1',
    purchaseUrl: 'https://buy.polar.sh/polar_cl_hLOtuINmOuwO8riqMSce30BuQjiAF85qpcrRP0N8mf8',
    featureImage: {
      src: '/q-virtual-amp/q-virtual-amp-interface.png',
      alt: 'Screenshot of the Q Virtual Amp interface showing the pedalboard and controls.'
    },
    documents: [
      {
        slug: 'getting-started',
        title: 'Getting Started & Features Guide',
        summary: 'Learn the core controls, pedalboard workflow, and built-in tools included with Q Virtual Amp.',
        to: '/q-virtual-amp/getting-started',
        sourcePath: '/q-virtual-amp/getting-started.md'
      },
      {
        slug: 'end-user-license-agreement',
        title: 'End User License Agreement',
        summary: 'Review the license terms that govern installation, activation, refunds, and permitted use.',
        to: '/q-virtual-amp/end-user-license-agreement',
        sourcePath: '/q-virtual-amp/end-user-license-agreement.md'
      },
      {
        slug: 'privacy-policy',
        title: 'Privacy Policy',
        summary: 'See how Q Virtual Amp handles local data, licensing, and third-party services such as Polar.sh and GitHub.',
        to: '/q-virtual-amp/privacy-policy',
        sourcePath: '/q-virtual-amp/privacy-policy.md'
      },
      {
        slug: 'terms-of-service',
        title: 'Terms of Service',
        summary: 'Read the purchase, usage, refund, and legal terms that apply to Q Virtual Amp.',
        to: '/q-virtual-amp/terms-of-service',
        sourcePath: '/q-virtual-amp/terms-of-service.md'
      }
    ],
    releases: [
      {
        version: 'v1.0.1',
        name: 'v1.0.1 — First Release',
        publishedAt: '2026-04-05',
        notes: [
          'The initial release of Q Virtual Amp.'
        ],
        downloads: [
          {
            label: 'QVirtualAmpInstaller.msi',
            url: 'https://github.com/HerbDesignGroup/Q-Virtual-Amp/releases/download/v1.0.1/QVirtualAmpInstaller.msi',
            size: '5.39 MB'
          }
        ]
      }
    ]
  }
]

export const serviceSlugs = services.map((service) => `/services/${service.slug}`)
export const productSlugs = products.map((product) => `/products/${product.slug}`)
export const productDocumentRoutes = products.flatMap((product) => product.documents?.map((document) => document.to) ?? [])

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getQvaDocumentBySlug(slug: string) {
  return products
    .find((product) => product.slug === 'q-virtual-amp')
    ?.documents?.find((document) => document.slug === slug)
}
