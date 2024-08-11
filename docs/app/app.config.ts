export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
  },
  seo: {
    siteName: 'Nuxt Cropper - Nuxt Module for Cropper',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    colorMode: true,
    links: [
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/ezequidias/nuxt-cropper',
        'target': '_blank',
        'aria-label': 'Nuxt Cropper on GitHub',
      },
    ],
  },
  footer: {
    credits: '',
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-nuxtdotjs',
        'to': 'https://nuxt.com',
        'target': '_blank',
        'aria-label': 'Nuxt Website',
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/ezequidias/nuxt-cropper',
        'target': '_blank',
        'aria-label': 'Nuxt Cropper on GitHub',
      },
    ],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/ezequidias/nuxt-cropper/docs/edit/main/content',
      links: [
        {
          icon: 'i-heroicons-star',
          label: 'Star on GitHub',
          to: 'https://github.com/ezequidias/nuxt-cropper',
          target: '_blank',
        },
        {
          icon: 'i-simple-icons-nuxtdotjs',
          label: 'Online Demo',
          to: 'https://cropper.nuxt.dev',
          target: '_blank',
        },
        {
          icon: 'i-simple-icons-stackblitz',
          label: 'Online Playground',
          to: 'https://stackblitz.com/github/ezequidias/nuxt-cropper?file=playground%2Fapp.vue',
          target: '_blank',
        },
      ],
    },
  },
})
