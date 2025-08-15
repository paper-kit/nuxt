<template>
  <div class="changelog-page">
    <div class="changelog-header">
      <div class="version-badge">
        <span class="version-number">v2.0</span>
        <span class="version-label">Major Release</span>
      </div>
      <h1 class="page-title">
        Changelog v2.0
      </h1>
      <p class="page-description">
        Welcome to Paper UI v2.0! This major release brings significant improvements to the documentation experience,
        enhanced component styling, and a completely redesigned sidebar navigation system.
      </p>
    </div>

    <div class="changelog-content">
      <div class="section">
        <div class="section-header">
          <h2 class="section-title">
            🎉 Major Features
          </h2>
          <div class="section-decoration" />
        </div>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              ✨
            </div>
            <h3>New Accordion Sidebar Menu</h3>
            <p>The documentation now features a completely redesigned sidebar with accordion functionality</p>
            <ul>
              <li>Expandable Sections</li>
              <li>Global Controls</li>
              <li>Smooth Animations</li>
              <li>Visual Indicators</li>
            </ul>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              🎨
            </div>
            <h3>Enhanced Visual Design</h3>
            <p>Maintains the unique "drawn by hand" aesthetic with improved styling</p>
            <ul>
              <li>Hand-drawn Style</li>
              <li>Improved Typography</li>
              <li>Color Consistency</li>
              <li>Dark Mode Support</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <h2 class="section-title">
            🚀 New Components
          </h2>
          <div class="section-decoration" />
        </div>

        <div class="components-grid">
          <div class="component-category">
            <h3>Layout & Structure</h3>
            <div class="component-list">
              <span class="component-tag">PUGrid</span>
              <span class="component-tag">PUGridItem</span>
              <span class="component-tag">PUCard</span>
              <span class="component-tag">PUDivider</span>
            </div>
          </div>

          <div class="component-category">
            <h3>Form Controls</h3>
            <div class="component-list">
              <span class="component-tag">PUDropdown</span>
              <span class="component-tag">PUSlider</span>
              <span class="component-tag">PURating</span>
              <span class="component-tag">PUDatePicker</span>
              <span class="component-tag">PUCounter</span>
            </div>
          </div>

          <div class="component-category">
            <h3>Actions & Feedback</h3>
            <div class="component-list">
              <span class="component-tag">PUCopyToClipboard</span>
              <span class="component-tag">PUConfetti</span>
              <span class="component-tag">PULoading</span>
              <span class="component-tag">PUProgress</span>
            </div>
          </div>

          <div class="component-category">
            <h3>Data Display</h3>
            <div class="component-list">
              <span class="component-tag">PUTable</span>
              <span class="component-tag">PUAvatar</span>
              <span class="component-tag">PUCompare</span>
            </div>
          </div>

          <div class="component-category">
            <h3>Media & Content</h3>
            <div class="component-list">
              <span class="component-tag">PUAudio</span>
              <span class="component-tag">PUVideo</span>
            </div>
          </div>

          <div class="component-category">
            <h3>Navigation & Search</h3>
            <div class="component-list">
              <span class="component-tag">PUSearch</span>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <h2 class="section-title">
            🔧 Technical Improvements
          </h2>
          <div class="section-decoration" />
        </div>

        <div class="improvements-list">
          <div class="improvement-item">
            <div class="improvement-icon">
              ⚡
            </div>
            <div class="improvement-content">
              <h4>Performance Optimization</h4>
              <p>Faster rendering and better memory usage across all components</p>
            </div>
          </div>

          <div class="improvement-item">
            <div class="improvement-icon">
              🎯
            </div>
            <div class="improvement-content">
              <h4>TypeScript Support</h4>
              <p>Enhanced type safety and better developer experience</p>
            </div>
          </div>

          <div class="improvement-item">
            <div class="improvement-icon">
              ♿
            </div>
            <div class="improvement-content">
              <h4>Accessibility</h4>
              <p>Better ARIA labels and keyboard navigation support</p>
            </div>
          </div>

          <div class="improvement-item">
            <div class="improvement-icon">
              📱
            </div>
            <div class="improvement-content">
              <h4>Responsive Design</h4>
              <p>Optimized for all screen sizes and devices</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-header">
          <h2 class="section-title">
            🎯 Future Roadmap
          </h2>
          <div class="section-decoration" />
        </div>

        <div class="roadmap-grid">
          <div class="roadmap-item">
            <h4>Theme Customization</h4>
            <p>Advanced theming options for complete customization</p>
          </div>

          <div class="roadmap-item">
            <h4>Animation Library</h4>
            <p>Pre-built animation components for enhanced UX</p>
          </div>

          <div class="roadmap-item">
            <h4>Form Builder</h4>
            <p>Visual form creation tool for rapid development</p>
          </div>

          <div class="roadmap-item">
            <h4>Component Playground</h4>
            <p>Interactive component testing environment</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.changelog-page {
  @apply max-w-6xl mx-auto p-6 space-y-12;
}

.changelog-header {
  @apply text-center space-y-6;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 100%);
  border-radius: 20px;
  padding: 3rem 2rem;
  border: 2px solid rgba(59, 130, 246, 0.2);
}

.version-badge {
  @apply inline-flex flex-col items-center bg-primary-light-500 text-white px-6 py-3 rounded-full;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  transform: rotate(-2deg);
}

.version-number {
  @apply text-2xl font-bold;
}

.version-label {
  @apply text-sm opacity-90;
}

.page-title {
  @apply text-4xl font-bold text-primary-light-600 dark:text-primary-dark-400;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  transform: rotate(-1deg);
}

.page-description {
  @apply text-lg text-primary-light-700 dark:text-primary-dark-300 max-w-3xl mx-auto leading-relaxed;
}

.section {
  @apply space-y-8;
}

.section-header {
  @apply flex items-center space-x-4 mb-8;
}

.section-title {
  @apply text-3xl font-bold text-primary-light-600 dark:text-primary-dark-400;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
  transform: rotate(-0.5deg);
}

.section-decoration {
  @apply flex-1 h-1 bg-gradient-to-r from-primary-light-500 to-transparent rounded-full;
}

.feature-grid {
  @apply grid md:grid-cols-2 gap-8;
}

.feature-card {
  @apply bg-white dark:bg-primary-light-800 p-6 rounded-2xl border-2 border-primary-light-500/20;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform: rotate(-0.5deg);
}

.feature-card:hover {
  transform: rotate(0deg) translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  @apply text-4xl mb-4;
}

.feature-card h3 {
  @apply text-xl font-bold text-primary-light-600 dark:text-primary-dark-400 mb-3;
}

.feature-card p {
  @apply text-primary-light-700 dark:text-primary-dark-300 mb-4;
}

.feature-card ul {
  @apply space-y-2;
}

.feature-card li {
  @apply text-sm text-primary-light-600 dark:text-primary-dark-400;
  position: relative;
  padding-left: 1.5rem;
}

.feature-card li::before {
  content: '→';
  @apply absolute left-0 text-primary-light-500;
}

.components-grid {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.component-category {
  @apply bg-white dark:bg-primary-light-800 p-6 rounded-xl border-2 border-primary-light-500/20;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.component-category:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.component-category h3 {
  @apply text-lg font-bold text-primary-light-600 dark:text-primary-dark-400 mb-4;
  border-bottom: 2px solid rgba(59, 130, 246, 0.2);
  padding-bottom: 0.5rem;
}

.component-list {
  @apply flex flex-wrap gap-2;
}

.component-tag {
  @apply bg-primary-light-500 text-white px-3 py-1 rounded-full text-sm font-medium;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  transition: all 0.2s ease;
}

.component-tag:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.improvements-list {
  @apply space-y-6;
}

.improvement-item {
  @apply flex items-start space-x-4 bg-white dark:bg-primary-light-800 p-6 rounded-xl border-2 border-primary-light-500/20;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.improvement-item:hover {
  transform: translateX(4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.improvement-icon {
  @apply text-2xl flex-shrink-0;
}

.improvement-content h4 {
  @apply text-lg font-bold text-primary-light-600 dark:text-primary-dark-400 mb-2;
}

.improvement-content p {
  @apply text-primary-light-700 dark:text-primary-dark-300;
}

.roadmap-grid {
  @apply grid md:grid-cols-2 gap-6;
}

.roadmap-item {
  @apply bg-white dark:bg-primary-light-800 p-6 rounded-xl border-2 border-primary-light-500/20;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.roadmap-item::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light-500 to-primary-light-400;
}

.roadmap-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.roadmap-item h4 {
  @apply text-lg font-bold text-primary-light-600 dark:text-primary-dark-400 mb-3;
}

.roadmap-item p {
  @apply text-primary-light-700 dark:text-primary-dark-300;
}

@media (prefers-color-scheme: dark) {
  .changelog-header {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 197, 253, 0.2) 100%);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .page-title {
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.1);
  }

  .section-title {
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.1);
  }
}
</style>
