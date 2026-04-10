<template>
  <div class="site-shell">
    <SiteHeader />
    <PromoPopup />
    <main id="main-content" class="site-main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
