<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: paper-ui
- Description: My new Nuxt module
-->

# @paper-ui/nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

![paper-ui-home](https://github.com/user-attachments/assets/c5b4f83a-d052-475d-ad0b-596c9621b5a0)

`@paper-ui/nuxt` is a component library for Nuxt.js that aims to create a "hand-drawn" aesthetic for your UI. With this library, you can build interfaces using components with a unique and artistically crafted style.

## Links

- [✨ Demo](https://stackblitz.com/edit/nuxt-starter-mkfqhq74?file=app.vue)
- [📖 Documentation](https://paper-docs.nuxt.space/)
- [📦 NPM Package](https://www.npmjs.com/package/@paper-ui/nuxt)
- [🌍 Nuxt Module Page](https://nuxt.com/modules/paper-ui)

## Installation

To install the module in your Nuxt.js project, use `one` of the following commands:

```bash
npx nuxi@latest module add paper-ui
```

```bash
npm install @paper-ui/nuxt
```

```bash
pnpm add @paper-ui/nuxt
```

## Usage

After installing the module, add it to your `nuxt.config.js` file:

```js
export default defineNuxtConfig({
  modules: ["@paper-ui/nuxt"],
});
```

Now you can use the components provided by the library in your pages and Vue components.

### Example Usage

```vue
<template>
  <PUButton>Click Me!</PUButton>
</template>
```

## Scripts

Here are some useful scripts available during development and maintenance of the module:

- `dev`: Starts the development environment with the Nuxt Playground.
- `dev:build`: Builds the Playground environment for testing.
- `dev:prepare`: Prepares the development environment using `nuxt-module-build`.
- `release`: Prepares for release by running tests, linting, and publishing the module.
- `lint`: Runs ESLint to check code quality.
- `test`: Runs tests using Vitest.
- `test:watch`: Watches for changes and runs tests automatically.
- `test:types`: Checks TypeScript types.

## Dependencies

- `@nuxt/kit`: Core module for Nuxt 3.
- `@nuxtjs/tailwindcss`: Integration with Tailwind CSS.

## Development

During development, you can test the module locally using the included Playground. The development environment allows you to see how components behave as you make changes.

### Running the Playground

Run the following command to start the Playground in development mode:

```bash
npm run dev
```

Or, if you're using `pnpm`:

```bash
pnpm dev
```

This will start the Nuxt development server, allowing you to preview the components in action.

## License

This module is licensed under the [MIT License](LICENSE).

## Changelog

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/paper-ui?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@paper-ui/nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@paper-ui/nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/paper-ui.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@paper-ui/nuxt
[license-src]: https://img.shields.io/npm/l/@paper-ui/nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@paper-ui/nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
