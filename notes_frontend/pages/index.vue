<!--
  pages/index.vue
  Generated from Figma assets (assets/figma-home/index.html, styles.css)
  - Template contains the inner content of the Figma index.html (without html/head/body)
  - Styles are imported from ~/assets/figma-home/styles.css
  - Interactivity translated into Vue methods and lifecycle hooks.

  IMPORTANT: Images are referenced via public URLs in the template, bound via refs computed at runtime on the client.
-->
<template>
  <!-- Root Frame: Home Screen (frame 414x1100, background dark with subtle gradient overlay) -->
  <main id="home-screen-125-171" role="main" aria-label="Home Screen">
    <!-- Hero Text: Notes -->
    <h1 class="typo-14 hero-text" aria-label="Notes" style="left: 24px; top: 47px;">Notes</h1>

    <!-- Top Right Buttons: Search and Info -->
    <button
      ref="searchBtn"
      class="icon-btn"
      aria-label="Search"
      style="left: 268px; top: 51px;"
      @click="onIconClick('Search')"
      @keydown.enter.prevent="onKeyActivate('Search')"
      @keydown.space.prevent="onKeyActivate('Search')"
    >
      <img :src="imgSearch" alt="Search Icon" width="24" height="24" />
    </button>
    <button
      ref="infoBtn"
      class="icon-btn"
      aria-label="Info"
      style="left: 339px; top: 51px;"
      @click="onIconClick('Info')"
      @keydown.enter.prevent="onKeyActivate('Info')"
      @keydown.space.prevent="onKeyActivate('Info')"
    >
      <img :src="imgInfo" alt="Info Icon" width="24" height="24" />
    </button>

    <!-- Note Cards -->
    <section class="card card--pink" aria-label="Book Review card" style="left: 24px; top: 143px; width: 365px; height: 157px;">
      <h2 class="typo-13 card-title" style="left: 45px; top: 168px; width: 270px;">
        Book Review : The Design of Everyday Things by Don Norman
      </h2>
    </section>

    <section class="card card--green" aria-label="Ufotable Animes card" style="left: 24px; top: 323px; width: 365px; height: 123px;">
      <h2 class="typo-13 card-title" style="left: 45px; top: 352px; width: 254px;">
        Animes produced by Ufotable
      </h2>
    </section>

    <section class="card card--yellow" aria-label="Mangas Planned card" style="left: 24px; top: 471px; width: 365px; height: 110px;">
      <h2 class="typo-13 card-title" style="left: 45px; top: 494px; width: 259px;">
        Mangas planned to read
      </h2>
    </section>

    <section class="card card--cyan" aria-label="Awesome Tweets card" style="left: 24px; top: 606px; width: 365px; height: 120px;">
      <h2 class="typo-13 card-title" style="left: 45px; top: 633px; width: 287px;">
        Awesome tweets collection
      </h2>
    </section>

    <section class="card card--lavender" aria-label="FOSS Apps card" style="left: 24px; top: 751px; width: 365px; height: 100px;">
      <h2 class="typo-13 card-title" style="left: 45px; top: 768px; width: 297px;">
        List of free & open source apps
      </h2>
    </section>

    <!-- Floating Add Button -->
    <button
      ref="fabBtn"
      class="fab"
      aria-label="Add Note"
      style="left: 327px; top: 984px;"
      @click="onFabClick"
      @keydown.enter.prevent="onFabKeyActivate"
      @keydown.space.prevent="onFabKeyActivate"
    >
      <img :src="imgAdd" alt="Add Icon" width="28" height="28" />
    </button>
  </main>
</template>

<script setup lang="ts">
// PUBLIC_INTERFACE
/**
 * Home page generated from Figma assets.
 * Provides basic interactions for icon buttons and FAB with accessible keyboard activation.
 * Images are bound via refs to avoid Vite import-analysis of static asset strings.
 */
import { onMounted, ref } from 'vue'

const searchBtn = ref<HTMLButtonElement | null>(null)
const infoBtn = ref<HTMLButtonElement | null>(null)
const fabBtn = ref<HTMLButtonElement | null>(null)

// Build public image URLs at runtime on client only.
const imgSearch = ref<string>('')
const imgInfo = ref<string>('')
const imgAdd = ref<string>('')

onMounted(() => {
  const base = ''
  // Use absolute paths resolved at runtime; these are served from public/.
  imgSearch.value = base + '/assets/figmaimages/figma_image_125_190_8_12.png'
  imgInfo.value = base + '/assets/figmaimages/figma_image_125_188_8_9.png'
  imgAdd.value = base + '/assets/figmaimages/figma_image_125_192_115_19.png'

  const buttons: Array<HTMLButtonElement | null> = [searchBtn.value, infoBtn.value]
  buttons.forEach((btn) => {
    if (!btn) return
    btn.setAttribute('role', 'button')
    btn.setAttribute('tabindex', '0')
  })
  if (fabBtn.value) {
    fabBtn.value.setAttribute('role', 'button')
    fabBtn.value.setAttribute('tabindex', '0')
  }
})

// PUBLIC_INTERFACE
function onIconClick(label: string) {
  /** Handle icon button clicks. */
  console.log(`Clicked ${label}`)
}

// PUBLIC_INTERFACE
function onKeyActivate(label: string) {
  /** Activate icon button via keyboard. */
  onIconClick(label)
}

// PUBLIC_INTERFACE
function onFabClick() {
  /** Handle FAB click for adding a note. */
  console.log('Add Note action triggered')
}

// PUBLIC_INTERFACE
function onFabKeyActivate() {
  /** Activate FAB via keyboard. */
  onFabClick()
}
</script>

<style>
/* Import the Figma stylesheet globally for this page (no url(...) images here) */
@import '~/assets/figma-home/styles.css';
</style>
