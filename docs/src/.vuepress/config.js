const { description } = require('../../package')

module.exports = {
  title: 'easepick2',
  description: description,
  base: '/easepick2/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'easepick, easepick2, easepick alternative, easepick fork, maintained easepick, date picker, datepicker, daterangepicker, month picker, year picker, calendar' }],
    ['meta', { property: 'og:title', content: 'easepick2 — A Maintained Alternative to easepick' }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/images/og_image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'easepick2 — A Maintained Alternative to easepick' }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: '/images/og_image.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { src: '/js/custom.js', defer: true, async: true }],
  ],

  themeConfig: {
    repo: 'https://github.com/YuaFox/easepick2',
    editLinks: false,
    lastUpdated: true,
    activeHeaderLinks: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/guide/',
      },
      {
        title: 'Configurator',
        path: '/configurator/',
        collapsable: false,
        sidebarDepth: 0,
      },

      {
        title: 'Packages',
        children: [
          {
            title: '@yuafox/easepick2',
            path: '/packages/bundle',
          },
          {
            title: '@yuafox/easepick2-base-plugin',
            path: '/packages/base-plugin',
          },
          {
            title: '@yuafox/easepick2-datetime',
            path: '/packages/datetime',
          },
          {
            title: '@yuafox/easepick2-core',
            path: '/packages/core',
          },
          {
            title: '@yuafox/easepick2-amp-plugin',
            path: '/packages/amp-plugin',
          },
          {
            title: '@yuafox/easepick2-kbd-plugin',
            path: '/packages/kbd-plugin',
          },
          {
            title: '@yuafox/easepick2-lock-plugin',
            path: '/packages/lock-plugin',
          },
          {
            title: '@yuafox/easepick2-range-plugin',
            path: '/packages/range-plugin',
          },
          {
            title: '@yuafox/easepick2-preset-plugin',
            path: '/packages/preset-plugin',
          },
          {
            title: '@yuafox/easepick2-time-plugin',
            path: '/packages/time-plugin',
          },
        ],
      },

      {
        title: 'Development',
        children: [
          {
            title: 'Environment',
            path: '/development/environment',
          },
          {
            title: 'Creating plugins',
            path: '/development/plugins',
          },
        ]
      },

      {
        title: 'Support',
        children: [
          {
            title: 'Getting support',
            path: '/support/getting-support',
          },
          {
            title: 'Reporting issues',
            path: '/support/reporting-issues',
          },
          {
            title: 'License',
            path: '/support/license',
          },
        ]
      },

      {
        title: 'Examples',
        children: [
          {
            title: 'Basic example',
            path: '/examples/basic',
          },
          {
            title: 'Month picker',
            path: '/examples/month-picker',
          },
          {
            title: 'Year picker',
            path: '/examples/year-picker',
          },
          {
            title: 'Basic hotel calendar',
            path: '/examples/hotel',
          },
          {
            title: 'Show nights in tooltip',
            path: '/examples/nights',
          },
          {
            title: 'Using another language',
            path: '/examples/language',
          },
          {
            title: 'Allowed days',
            path: '/examples/allowed-days',
          },
          {
            title: 'Days with prices',
            path: '/examples/days-with-prices',
          },
          {
            title: 'Customize',
            path: '/examples/customize',
          },
        ]
      },
    ],
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@mr-hope/sitemap',
      {
        hostname: 'https://yua.sh',
      },
    ],
  ],
}
