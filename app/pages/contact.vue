<script setup lang="ts">
import { siteConfig } from '~/data/site'

useSeoMeta({
  title: 'Contact',
  description: 'Contact Herb Design Group for general questions or support inquiries.',
  ogTitle: `Contact | ${siteConfig.companyName}`,
  ogDescription: 'Get in touch with Herb Design Group for general questions or support inquiries.'
})
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Contact"
      title="Get in touch with Herb Design Group"
      intro="For general questions or support needs, reach out directly using the contact details below."
    />

    <section class="section-block">
      <div class="container split-section">
        <div class="card">
          <p class="eyebrow">Email</p>
          <h3>Reach the right inbox</h3>
          <ul class="footer-links contact-links">
            <li>
              <strong>General Inquiries: </strong>
              <a href="mailto:contact@herbdesigngroup.com">contact@herbdesigngroup.com</a>
            </li>
            <li>
              <strong>Support Inquiries: </strong>
              <a href="mailto:support@herbdesigngroup.com">support@herbdesigngroup.com</a>
            </li>
          </ul>
        </div>

        <div class="card">
          <p class="eyebrow">Social</p>
          <h3>Connect online</h3>
          <ul class="footer-links social-icon-links">
            <li>
              <a href="https://www.facebook.com/herbdesigngroup" target="_blank" rel="noreferrer" class="social-link">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="social-link__icon">
                  <path fill="currentColor" d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3V11H9v3h2.3v7h2.2Z" />
                </svg>
                <span>Herb Design Group</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/herbdesigngroup/" target="_blank" rel="noreferrer" class="social-link">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="social-link__icon">
                  <path fill="currentColor" d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.4a1.56 1.56 0 0 1 .04 3.1ZM5.6 18.6V9.8h2.7v8.8H5.6Zm4.3 0V9.8h2.6V11h.04c.36-.69 1.25-1.42 2.57-1.42 2.75 0 3.26 1.8 3.26 4.14v4.88h-2.7v-4.33c0-1.03-.02-2.36-1.44-2.36-1.45 0-1.68 1.13-1.68 2.29v4.4H9.9Z" />
                </svg>
                <span>Herb Design Group</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
