<script setup lang="ts">
const props = defineProps<{
  open: boolean
  productName: string
}>()

const emit = defineEmits<{
  close: []
}>()

function handleBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.open) {
    emit('close')
  }
}

watch(
  () => props.open,
  (open) => {
    if (!import.meta.client) {
      return
    }

    document.body.style.overflow = open ? 'hidden' : ''

    if (open) {
      window.addEventListener('keydown', handleEscape)
    }
    else {
      window.removeEventListener('keydown', handleEscape)
    }
  },
  { flush: 'post', immediate: true }
)

onUnmounted(() => {
  if (!import.meta.client) {
    return
  }

  window.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="purchase-thanks-backdrop"
      role="presentation"
      @click="handleBackdropClick"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="purchase-thanks-title"
        class="purchase-thanks-dialog"
        @click.stop
      >
        <button
          type="button"
          class="purchase-thanks-dialog__close"
          aria-label="Close confirmation"
          @click="emit('close')"
        >
          ×
        </button>

        <p class="eyebrow">Purchase complete</p>
        <h2 id="purchase-thanks-title">Thank you for your purchase</h2>
        <p class="purchase-thanks-dialog__intro">
          We appreciate your support for <strong>{{ productName }}</strong>.
        </p>
        <p class="purchase-thanks-dialog__detail">
          Please check your email for your license key and activation instructions. If you don’t see it within a few minutes, check your spam folder.
        </p>

        <div class="purchase-thanks-dialog__actions">
          <button type="button" class="button button-primary" @click="emit('close')">
            Got it
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
