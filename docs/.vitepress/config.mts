import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Home Server Setup',
  description: 'converting a old laptop into a home server',
  sitemap: {
    hostname: 'https://docs.sarthakjdev.co'
  },
  themeConfig: {
    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction'
      },
      {
        text: 'Wifi Access',
        link: '/wifi-setup'
      },
      {
        text: 'Storage Resolution',
        link: '/storage-setup'
      },
      {
        text: 'Shell',
        link: '/shell-setup'
      },
      {
        text: 'SSH Setup',
        link: '/networking/ssh'
      },
      {
        text: 'Services Setup',
        collapsed: false,
        items: [
          {
            text: 'Objectives',
            link: '/services/objectives'
          },
          {
            text: 'Tooling',
            link: '/services/tooling'
          },
          {
            text: 'Infrastructure',
            link: '/services/infrastructure'
          },
          {
            text: 'Web Server',
            link: '/services/web-server'
          },
          {
            text: "Storage Cloud",
            link: "/services/cloud-file-storage"
          },
          {
            text: "Monitoring Setup",
            link: "/services/monitoring"
          },
          {
            text: "Logging Setup",
            link: "/services/logging"
          }
        ]
      },
      {
        text: 'Automations',
        collapsed: false,
        items: [
          {
            text: 'CI / CD',
            link: '/automations/ci-cd'
          },
          {
            text: 'Configuration Management',
            link: '/automations/configuration'
          },
          {
            text: 'Services Deployment',
            link: '/automations/services-deployment'
          }
        ]
      },
      {
        text: 'Miscellaneous',
        link: '/miscellaneous'
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://sarthakjdev/' }, { icon: 'x', link: 'https://x.com/sarthakjdev' }, { icon: 'linkedin', link: 'https://linkedin.com/in/sarthakjdev' }],

    nav: [
      { text: 'Faqs', link: '/faq' }
    ],

    siteTitle: 'Home Server',
    logo: '/favicons/ms-icon-310x310.png',

    footer: {
      message: 'Released under MIT License.',
      copyright: `Copyright ©sarthakjdev 2023-${new Date().getFullYear()} | All rights reserved.`
    },

    editLink: {
      pattern: 'https://github.com/sarthakjdev/home-server-setup/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    logoLink: '/',

    search: {
      provider: 'local',
    }
  },

  markdown: {
    lineNumbers: true
  },

  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-icon-180x180.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/favicons/manifest.json' }],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ]
})
