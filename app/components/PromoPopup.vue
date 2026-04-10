<script setup lang="ts">
const storageKey = 'hdg-q-virtual-amp-may-2026-promo-dismissed'
const expiresAt = new Date('2026-06-01T00:00:00')

const isMounted = ref(false)
const isDismissed = ref(false)

const isVisible = computed(() => isMounted.value && !isDismissed.value && new Date() < expiresAt)

function dismissPromo() {
  isDismissed.value = true

  if (import.meta.client) {
    window.localStorage.setItem(storageKey, 'true')
  }
}

onMounted(() => {
  isMounted.value = true

  if (new Date() >= expiresAt) {
    isDismissed.value = true
    return
  }

  isDismissed.value = window.localStorage.getItem(storageKey) === 'true'
})
</script>

<template>
  <aside v-if="isVisible" class="promo-popup" aria-label="Limited-time Q Virtual Amp offer">
    <button
      type="button"
      class="promo-popup__close"
      aria-label="Dismiss offer"
      @click="dismissPromo"
    >
      ×
    </button>

    <p class="promo-popup__eyebrow">Limited-time offer</p>
    <h2>Use code <code>QVALAUNCH</code> for 50% off Q Virtual Amp.</h2>
    <p class="promo-popup__copy">
      Save on your license through <strong>May 31</strong>, then jump into a streamlined virtual amp and pedalboard setup.
    </p>

    <div class="promo-popup__actions">
      <NuxtLink to="/products/q-virtual-amp" class="button button-primary">
        View Q Virtual Amp
      </NuxtLink>
      <button type="button" class="promo-popup__dismiss" @click="dismissPromo">
        Maybe later
      </button>
    </div>
  </aside>
</template>
