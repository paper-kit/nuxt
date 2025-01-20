import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, installModule, addImports } from '@nuxt/kit'

export type ModuleOptions = object

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'paper-ui',
    configKey: 'myModule',
  },
  defaults: {},
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    const resolveRuntimeModule = (path: string) => resolver.resolve('./runtime', path)

    addPlugin(resolver.resolve('./runtime/plugin'))

    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
    })

    addImports([
      { name: 'useToast', as: 'useToast', from: resolveRuntimeModule('./composables/useToast') },
      { name: 'useModal', as: 'useModal', from: resolveRuntimeModule('./composables/useModal') },
    ])

    _nuxt.options.css.push(resolver.resolve('./runtime/style.css'))

    await installModule('@nuxtjs/tailwindcss', {
      exposeConfig: true,
      config: {
        cssPath: ['./runtime/assets/css/tailwind.css', { injectPosition: 'first' }],
        content: {
          files: [
            resolver.resolve('./runtime/components/**/*.{vue,mjs,ts}'),
            resolver.resolve('./runtime/*.{mjs,js,ts}'),
          ],
        },
        theme: {
          extend: {
            colors: {
              primary: {
                light: {
                  50: '#F5F5F5',
                  100: '#E8E8E8',
                  200: '#C7C7C7',
                  300: '#A3A3A3',
                  400: '#616161',
                  500: '#1c1c1c',
                  600: '#1A1717',
                  700: '#140F0F',
                  800: '#120B0B',
                  900: '#0D0606',
                  950: '#080202',
                },
                dark: {
                  50: '#FCFCFC',
                  100: '#FAFAFA',
                  200: '#F0F0F0',
                  300: '#E6E6E6',
                  400: '#D4D4D4',
                  500: '#c1c1c1',
                  600: '#AD9C9C',
                  700: '#916D6D',
                  800: '#754646',
                  900: '#572727',
                  950: '#381010',
                },
              },
            },
          },
        },
      },
    })
  },
})
