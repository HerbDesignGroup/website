<script setup lang="ts">
import { siteConfig } from '~/data/site'

const isMenuOpen = ref(false)
const openGroup = ref<string | null>(null)
const route = useRoute()

function toggleGroup(label: string) {
  openGroup.value = openGroup.value === label ? null : label
}

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
    openGroup.value = null
  }
)

watch(isMenuOpen, (open) => {
  if (!open) {
    openGroup.value = null
  }
})
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink to="/" class="brand" @click="isMenuOpen = false">
        <img src="/hdg-logo.svg" alt="" class="brand-logo" />
        <span class="brand-copy">
          <strong>{{ siteConfig.companyName }}</strong>
          <small>{{ siteConfig.taglineShort }}</small>
        </span>
      </NuxtLink>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        Menu
      </button>

      <nav id="primary-navigation" class="site-nav" :class="{ 'is-open': isMenuOpen }" aria-label="Primary">
        <ul class="nav-list">
          <li v-for="item in siteConfig.navigation" :key="item.label" class="nav-item">
            <NuxtLink
              v-if="item.to"
              :to="item.to"
              class="nav-link"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>

            <div v-else class="nav-group" :class="{ 'is-open': openGroup === item.label }">
              <button
                type="button"
                class="nav-group__label"
                :aria-label="`${item.label} menu`"
                :aria-expanded="openGroup === item.label"
                @click="toggleGroup(item.label)"
              >
                {{ item.label }}
              </button>

              <div class="dropdown-panel" :aria-label="`${item.label} submenu`">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.to"
                  :to="child.to"
                  class="dropdown-link"
                  @click="isMenuOpen = false"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
