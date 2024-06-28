import { defineConfig } from 'vitepress'
import { getSideBarList } from './utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "星梦启航",
  description: "A VitePress Site",
  // appearance: false,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/image/lemon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://lksrctest03.lkcoffee.com/static/layui/css/layui.css' }],
    ['script', { src: 'https://lguardbetest03.lkcoffee.com/static/lguard-sdk-20240419.js' }],
    ['script', {}, `
      console.log('window', window);
      console.log('document', document);
      `
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/image/lintongxue.jpg',
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    //本地搜索
    search: {
      provider: 'local'
    },
    //中英文
    i18nRouting: true,
    outline: {
      level: [2, 4],
      label: '当前页'
    },
    sidebar: {
      '/basic/': getSideBarList('/basic'),
      '/api/': getSideBarList('/api'),
      '/core/': getSideBarList('/core'),
      '/teach/': getSideBarList('/teach'),
      '/summarize/': getSideBarList('/summarize'),
      '/team/': getSideBarList('/team'),
    },
    nav: [
      {
        text: '基础',
        link: '/basic/index'
      },
      {
        text: 'API',
        link: '/api/index'
      },
      {
        text: '核心篇',
        link: '/core/index'
      },
      {
        text: '实战教学篇',
        items: [
          {
            text: '原生 JS 开发',
            link: '/teach/index'
          },
          {
            text: 'Vue',
            link: '/teach/index'
          },
          {
            text: 'React',
            link: '/teach/index'
          },
          {
            text: 'CRXJS Vue',
            link: '/teach/index'
          },
          {
            text: 'CRXJS React',
            link: '/teach/index'
          }
        ]
      },
      {
        text: '实用插件推荐',
        link: '/summarize/index'
      },
      {
        text: '团队',
        link: '/team/index'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present lcx'
    }
  }
})
