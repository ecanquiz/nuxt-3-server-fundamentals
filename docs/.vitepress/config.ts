import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Fundamentos del Servidor Nuxt 3',
  description: 'TDD con Vue 3.',
  base: '/nuxt-3-server-fundamentals/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/me.jpg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/intro' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' },     
    ],
    sidebar: [{      
      path: '/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      items: [
        { text: 'Introducción', link: '/intro' },
        { text: 'Ruta Básica de la API del Servidor', link: '/server-api-basic-route' },
        { text: 'Ruta Dinámica Básica de la API del Servidor', link: '/basic-dynamic-server-api-route' },
        { text: 'Ruta Anidada Básica de la API del Servidor', link: '/basic-nested-server-api-route' },
        { text: 'Ruta Dinámica Anidada de la API del Servidor', link: '/dynamic-nested-server-api-route' },
        { text: 'Middleware de Servidor', link: '/server-middleware' },
        { text: 'Cómo Utilizar la Consola para Desarrolladores', link: '/how-to-use-the-js-dev-console' },        
      ]
    }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/nuxt-3-server-fundamentals' }
    ]
  }
})




