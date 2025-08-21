<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="v2-page">
    <div class="hero-section">
      <div class="hero-content flex flex-col items-center justify-center gap-8">
        <PUBadge
          label="NEW"
          size="large"
          severity="warning"
          class="hero-badge"
        />
        <h1 class="hero-title">
          Paper UI v2.0
        </h1>
        <p class="hero-description">
          A new era of Vue.js components with unique design and advanced features
        </p>
        <div class="hero-actions">
          <PUButton
            flavor="outlined"
            size="large"
            @click="scrollToFeatures"
          >
            Explore Features
          </PUButton>
          <PUButton
            flavor="ghost"
            size="large"
            @click="showConfetti"
          >
            🎉 Celebrate
          </PUButton>
        </div>
      </div>
    </div>

    <div
      ref="featuresRef"
      class="features-section"
    >
      <h2 class="section-title">
        ✨ What's New in v2.0
      </h2>

      <PUGrid
        :cols="3"
        gap="large"
        class="features-grid"
      >
        <PUGridItem>
          <div class="feature-header">
            <span class="feature-icon">🎨</span>
            <h3>Design System</h3>
          </div>
          <p>Consistent design system with customizable themes</p>
          <div class="feature-tags">
            <PUTag label="Responsive" />
            <PUTag label="Accessible" />
            <PUTag label="Customizable" />
          </div>
        </PUGridItem>

        <PUGridItem>
          <div class="feature-header">
            <span class="feature-icon">⚡</span>
            <h3>Performance</h3>
          </div>
          <p>Optimized components for maximum speed</p>
          <div class="feature-tags">
            <PUTag label="Lazy Loading" />
            <PUTag label="Tree Shaking" />
            <PUTag label="Bundle Size" />
          </div>
        </PUGridItem>

        <PUGridItem>
          <div class="feature-header">
            <span class="feature-icon">🔧</span>
            <h3>Developer Experience</h3>
          </div>
          <p>Full TypeScript support and interactive documentation</p>
          <div class="feature-tags">
            <PUTag label="TypeScript" />
            <PUTag label="IntelliSense" />
            <PUTag label="Playground" />
          </div>
        </PUGridItem>
      </PUGrid>
    </div>

    <div class="components-section">
      <h2 class="section-title">
        🆕 New Components
      </h2>

      <PUTabs
        :tabs="componentTabs"
        class="components-tabs"
      >
        <template #tab="{ tab }">
          <div class="tab-content">
            <span class="tab-icon">{{ tab.icon }}</span>
            <span class="tab-label">{{ tab.label }}</span>
          </div>
        </template>
        <template #content="{ tab }">
          <div class="components-grid">
            <div
              v-for="component in tab.components"
              :key="component.name"
              class="component-item"
            >
              <div class="component-card">
                <h4>{{ component.name }}</h4>
                <p>{{ component.description }}</p>
                <div class="component-actions">
                  <PUButton
                    flavor="ghost"
                    size="small"
                    @click="viewComponent(component.link)"
                  >
                    View Demo
                  </PUButton>
                  <PUBadge
                    v-if="component.new"
                    label="NEW"
                    size="small"
                    severity="warning"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </PUTabs>
    </div>

    <div class="stats-section">
      <h2 class="section-title">
        📊 Project Stats
      </h2>

      <PUGrid
        :cols="4"
        gap="large"
        class="stats-grid"
      >
        <PUGridItem>
          <div class="stat-card">
            <PUCounter
              :model-value="50"
              :show-controls="false"
              class="stat-number"
            />
            <p class="stat-label">
              Components
            </p>
          </div>
        </PUGridItem>
        <PUGridItem>
          <div class="stat-card">
            <PUCounter
              :model-value="15"
              :show-controls="false"
              class="stat-number"
            />
            <p class="stat-label">
              New in v2.0
            </p>
          </div>
        </PUGridItem>
        <PUGridItem>
          <div class="stat-card">
            <PUCounter
              :model-value="99"
              :show-controls="false"
              suffix="%"
              class="stat-number"
            />
            <p class="stat-label">
              Compatibility
            </p>
          </div>
        </PUGridItem>
        <PUGridItem>
          <div class="stat-card">
            <PUCounter
              :model-value="396"
              :show-controls="false"
              class="stat-number"
            />
            <p class="stat-label">
              Hours of Development
            </p>
          </div>
        </PUGridItem>
      </PUGrid>
    </div>

    <div class="cta-section">
      <div class="w-full">
        <div class="cta-content">
          <h2>Ready to get started?</h2>
          <p>Explore all the new components and features of Paper UI v2.0</p>
          <div class="cta-actions">
            <PUButton
              flavor="outlined"
              size="large"
              @click="goToDocs"
            >
              View Documentation
            </PUButton>
            <PUButton
              flavor="ghost"
              size="large"
              @click="goToGitHub"
            >
              <PUIcon name="github-alt" />
              GitHub
            </PUButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const featuresRef = ref(null)
const showConfettiEffect = ref(false)

const componentTabs = [
  {
    label: 'Layout',
    icon: '📐',
    components: [
      { name: 'PUGrid', description: 'Flexible grid system', link: '/docs/components/pu-grid', new: true },
      { name: 'PUCard', description: 'Unique design cards', link: '/docs/components/pu-card', new: true },
      { name: 'PUDivider', description: 'Visual separators', link: '/docs/components/pu-divider', new: true },
    ],
  },
  {
    label: 'Forms',
    icon: '📝',
    components: [
      { name: 'PUDropdown', description: 'Dropdown menus', link: '/docs/components/pu-dropdown', new: true },
      { name: 'PUSlider', description: 'Slider controls', link: '/docs/components/pu-slider', new: true },
      { name: 'PURating', description: 'Rating system', link: '/docs/components/pu-rating', new: true },
      { name: 'PUDatePicker', description: 'Date selection', link: '/docs/components/pu-datepicker', new: true },
    ],
  },
  {
    label: 'Interaction',
    icon: '🎮',
    components: [
      { name: 'PUCopyToClipboard', description: 'Copy to clipboard', link: '/docs/components/pu-copy', new: true },
      { name: 'PUConfetti', description: 'Celebration effects', link: '/docs/components/pu-confetti', new: true },
      { name: 'PULoading', description: 'Loading states', link: '/docs/components/pu-loading', new: true },
      { name: 'PUProgress', description: 'Progress bars', link: '/docs/components/pu-progress', new: true },
    ],
  },
  {
    label: 'Media',
    icon: '🎵',
    components: [
      { name: 'PUAudio', description: 'Audio player', link: '/docs/components/pu-audio', new: true },
      { name: 'PUVideo', description: 'Video player', link: '/docs/components/pu-video', new: true },
    ],
  },
]

const scrollToFeatures = () => {
  featuresRef.value?.scrollIntoView({ behavior: 'smooth' })
}

const showConfetti = () => {
  showConfettiEffect.value = true
}

const viewComponent = (link: string) => {
  navigateTo(link)
}

const goToDocs = () => {
  navigateTo('/docs')
}

const goToGitHub = () => {
  window.open('https://github.com/paper-kit/nuxt', '_blank')
}

// SEO
useSeoMeta({
  title: 'Paper UI v2.0 - New Components and Features',
  description: 'Discover all the new features of Paper UI v2.0: new components, better performance and enhanced developer experience.',
})
</script>

<style scoped>
.v2-page {
  @apply min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50;
  font-family: 'Patrick Hand', serif;
  padding: 2rem 0;
}

.hero-section {
  @apply max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 text-center space-y-6 sm:space-y-8;
}

.hero-badge {
  @apply inline-block transform rotate-2;
}

.hero-title {
  @apply text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-light-600;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  transform: rotate(-1deg);
}

.hero-description {
  @apply text-base sm:text-lg lg:text-xl text-primary-light-700 max-w-2xl mx-auto px-4;
  line-height: 1.6;
}

.hero-actions {
  @apply flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4;
}

.features-section {
  @apply max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16;
}

.components-section {
  @apply max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16;
}

.section-title {
  @apply text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary-light-600 mb-8 sm:mb-12;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
  transform: rotate(-0.5deg);
}

.features-grid {
  @apply gap-4 sm:gap-6 lg:gap-8;
}

.feature-header {
  @apply flex items-center gap-2 sm:gap-3;
}

.feature-icon {
  @apply text-xl sm:text-2xl;
}

.feature-tags {
  @apply flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4;
}

.components-tabs {
  @apply mt-8;
}

.tab-content {
  @apply flex items-center gap-2;
}

.tab-icon {
  @apply text-lg;
}

.tab-label {
  @apply font-medium;
}

.components-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6;
}

.component-item {
  @apply transition-all duration-300 hover:scale-105;
}

.component-card {
  @apply bg-white p-4 sm:p-6 rounded-xl border-2 border-primary-light-500/20 shadow-lg;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform: rotate(-0.5deg);
}

.component-card:hover {
  transform: rotate(0deg) translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.component-card h4 {
  @apply text-lg font-bold text-primary-light-600 mb-2;
}

.component-card p {
  @apply text-primary-light-700 mb-4;
}

.component-actions {
  @apply flex items-center justify-between;
}

.stats-section {
  @apply max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16;
}

.stats-grid {
  @apply gap-4 sm:gap-6 lg:gap-8;
}

.stat-card {
  @apply text-center bg-white p-4 sm:p-6 lg:p-8 rounded-xl border-2 border-primary-light-500/20 shadow-lg;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform: rotate(-0.5deg);
}

.stat-card:hover {
  transform: rotate(0deg) scale(1.05);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.stat-number {
  @apply text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-light-500 mb-2;
}

.stat-label {
  @apply text-primary-light-700 font-medium;
}

.cta-section {
  @apply max-w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16;
}

.cta-card {
  @apply bg-gradient-to-r from-primary-light-500 to-primary-light-600 text-white;
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.3);
}

.cta-content {
  @apply text-center space-y-6;
}

.cta-content h2 {
  @apply text-2xl sm:text-3xl font-bold;
}

.cta-content p {
  @apply text-base sm:text-lg opacity-90;
}

.cta-actions {
  @apply flex flex-col sm:flex-row gap-4 justify-center;
}

@media (max-width: 640px) {
  .hero-title {
    @apply text-3xl;
  }

  .hero-description {
    @apply text-base;
  }

  .section-title {
    @apply text-2xl;
  }

  .components-grid {
    @apply grid-cols-1;
  }

  .stats-grid {
    @apply grid-cols-1;
  }

  .feature-header h3 {
    @apply text-lg;
  }

  .component-card h4 {
    @apply text-base;
  }

  .stat-label {
    @apply text-sm;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .stats-grid {
    @apply grid-cols-2;
  }
}
</style>
