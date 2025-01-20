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


`@paper-ui/nuxt` é uma biblioteca de componentes para Nuxt.js que busca criar uma estética "desenhada" para seus componentes. Com esta biblioteca, você pode construir interfaces com componentes que possuem um estilo único e artisticamente projetado.

## Instalação

Para instalar o módulo em seu projeto Nuxt.js, utilize o seguinte comando:

```bash
npm install @paper-ui/nuxt
```

Ou, se estiver utilizando o `pnpm`:

```bash
pnpm add @paper-ui/nuxt
```

## Como usar

Depois de instalar o módulo, basta adicioná-lo ao seu arquivo `nuxt.config.js`:

```js
export default defineNuxtConfig({
  modules: [
    '@paper-ui/nuxt'
  ]
})
```

Agora você pode utilizar os componentes oferecidos pela biblioteca em suas páginas e componentes Vue.

### Exemplo de uso

```vue
<template>
  <PUButton>Click Me!</PUButton>
</template>

```

## Scripts

Aqui estão alguns scripts úteis disponíveis durante o desenvolvimento e a manutenção do módulo:

- `dev`: Inicia o ambiente de desenvolvimento com o Playground do Nuxt.
- `dev:build`: Construa o ambiente do Playground para testes.
- `dev:prepare`: Prepara o ambiente de desenvolvimento com `nuxt-module-build`.
- `release`: Realiza a preparação para a liberação, rodando testes, linting e publicando o módulo.
- `lint`: Executa o linting do código com ESLint.
- `test`: Executa os testes usando Vitest.
- `test:watch`: Observa as mudanças e executa os testes automaticamente.
- `test:types`: Verifica os tipos do TypeScript.

## Dependências

- `@nuxt/kit`: Núcleo do Nuxt 3.
- `@nuxtjs/tailwindcss`: Integração com o Tailwind CSS.

## Desenvolvimento

Durante o desenvolvimento, você pode testar o módulo localmente utilizando o Playground incluído no projeto. O ambiente de desenvolvimento permite que você veja como os componentes se comportam enquanto você faz alterações.

### Rodando o Playground

Execute o comando abaixo para iniciar o Playground em modo de desenvolvimento:

```bash
npm run dev
```

Ou, se estiver usando o `pnpm`:

```bash
pnpm dev
```

Isso abrirá o servidor de desenvolvimento do Nuxt, permitindo que você visualize os componentes em ação.

## Licença

Este módulo é licenciado sob a [Licença MIT](LICENSE).

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
