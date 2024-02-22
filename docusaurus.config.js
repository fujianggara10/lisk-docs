// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import * as process from 'process';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lisk Documentation',
  //tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: process.env.LISK_DOC_URL ?? 'https://documentation.lisk.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.LISK_DOC_BASE_URL ?? '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LiskHQ', // Usually your GitHub org/user name.
  projectName: 'lisk-documentation', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: '/lisk-documentation/js/matomo.js',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // sidebarCollapsible: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/LiskHQ/lisk-documentation/tree/main/',
          routeBasePath: '/',
        },
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        blog: false,
        theme: {
          customCss: [
            './src/css/custom.css',
          ]
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      // Replace with your project's social card
      image: '/img/lisk-icon-light.svg',
      navbar: {
        logo: {
          alt: 'Lisk Logo',
          src: '/img/lisk-icon-light.svg',
          srcDark: '/img/lisk-icon-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://stack.optimism.io',

            html: `
              <img src="/img/op_stack_dark.svg" class="op-dark" />
              <img src="/img/op_stack.svg" class="op-light" />
            `,
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            items: [
              {
                html: `
              <img src="/img/lisk-icon-light.svg" class="lsk-light" />
              <img src="/img/lisk-icon-dark.svg" class="lsk-dark" />
            `},
            ],
          },
          {
            items: [
              {
                label: 'X',
                href: 'https://twitter.com/LiskHQ',
                className: 'footer__links footer__link-item social_links',
              },
              {
                label: 'Discord',
                href: 'https://lisk.chat',
                className: 'footer__links footer__link-item social_links',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LiskHQ',
                className: 'footer__links footer__link-item social_links',
              },
            ],
          },
          {
            items: [
              {
                html: `<p class=copyright>Copyright © ${new Date().getFullYear()} Onchain Foundation.</p>`
              },
            ],
          },
        ],

      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oceanicNext,
        additionalLanguages: ['solidity', 'bash', 'javascript', 'typescript', 'rust', 'css', 'json'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;