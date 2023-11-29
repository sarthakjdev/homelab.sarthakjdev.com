import { defineConfig } from 'vitepress'


export default defineConfig({
  lang: 'en-US',
  title: 'Home Server Setup',
  description: "Explore comprehensive documentation on setting up a robust Home Server using Docker Swarm. Learn to configure and manage Nextcloud, Nginx, and other services for a secure, scalable, and efficient home network infrastructure.",
  sitemap: {
    hostname: 'https://homelab.sarthakjdev.com',
  },
  transformPageData(pageData) {
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:title',
        content: 'Home Lab Setup Documentation'
      }
    ])
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:image',
        content: '/assets/homelab_banner.png'
      }
    ])
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:description',
        content: 'Explore comprehensive documentation on setting up a robust Home Server using Docker Swarm. Learn to configure and manage Nextcloud, Nginx, and other services for a secure, scalable, and efficient home network infrastructure.'
      }
    ])
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:type',
        content: 'website'
      }
    ])
  },
  themeConfig: {
    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction',
        collapsed: false,
        items: [
          {
            text: 'Purpose',
            link: '/introduction/purpose'
          },
          {
            text: 'Overview',
            link: '/introduction/overview'
          },
          {
            text: 'Hardware Specification',
            link: '/introduction/hardware-speicification'
          },
          {
            text: 'OS Installation',
            link: '/introduction/os-installation'
          },
          {
            text: 'Shell',
            link: '/introduction/shell'
          },
          {
            text: 'Storage Rescue',
            link: '/introduction/storage'
          },
          {
            text: 'Tooling',
            link: '/introduction/tooling'
          },

        ]
      },
      {
        text: 'Networking',
        link: '/networking',
        collapsed: false,
        items: [
          {
            text: 'Router Configuration',
            link: '/networking/router-setup'
          },
          {
            text: 'Wifi Configuration',
            link: '/networking/wifi-setup'
          },
          {
            text: 'SSH Setup',
            link: '/networking/ssh-setup'
          },
          {
            text: 'Local DNS',
            link: '/networking/local-dns'
          },
          {
            text: 'Cloudflare Tunnel Setup',
            link: '/networking/cloudflare-tunnel'
          },
        ],
      },
      {
        text: 'Services Setup',
        link: '/services',
        collapsed: false,
        items: [
          {
            text: 'Objectives',
            link: '/services/objectives'
          },
          {
            text: 'Web Server',
            link: '/services/web-server'
          },
          {
            text: "Storage Cloud",
            link: "/services/cloud-file-storage"
          },
          // {
          //   text: "Monitoring Setup",
          //   link: "/services/monitoring"
          // },
          // {
          //   text: "Logging Setup",
          //   link: "/services/logging"
          // }
        ]
      },
      {
        text: 'Automation and CI/CD',
        collapsed: false,
        link: '/automations',
        items: [
          {
            text: 'Continuous Integration',
            link: '/ci-cd/continuous-integration'
          },
          {
            text: 'Configuration Management',
            link: '/ci-cd/configuration-management'
          },
          {
            text: 'Deployment Automation',
            link: '/ci-cd/deployment-automation'
          },
        ],
      },
      {
        text: 'Frequently Asked Questions',
        link: '/faq'
      },
      {
        text: 'Miscellaneous',
        link: '/miscellaneous'
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sarthakjdev'
      },
      {
        icon: 'x',
        link: 'https://x.com/sarthakjdev'
      },
      {
        icon: 'linkedin',
        link: 'https://linkedin.com/in/sarthakjdev'
      }
    ],
    nav: [
      {
        text: 'Faqs',
        link: '/faq'
      }
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
        href: '/assets/apple-touch-icon.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/assets/favicon-16x16.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/assets/manifest.json' }],
    ['link', { rel: 'shortcut icon', href: '/assets/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-config', content: '/assets/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  appearance: 'dark',
})

