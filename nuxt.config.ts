// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: [
      'composables',
      'composables/**',
      'utils',
      'utils/**'
    ]
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'ja', file: 'ja.json', name: 'Japanese' },
      { code: 'vi', file: 'vi.json', name: 'Vietnamese' }
    ],
    defaultLocale: 'ja',
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix'
  },
  css: [
    'primeicons/primeicons.css'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    viewer: true,
  },
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark',
          cssLayer: false
        }
      }
    }
  },
  app: {
    head: {
      title: 'Compliance System - Hệ thống Kiểm soát Tuân thủ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Hệ thống Kiểm soát Tuân thủ và Quản lý Hồ sơ Pháp lý Doanh nghiệp (SaaS Multi-company)' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap' }
      ],
      htmlAttrs: {
        lang: 'ja'
      }
    }
  }
})
