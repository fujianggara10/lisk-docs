/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //documentationSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  documentationSidebar: [
    {
      type: 'category',
      label: 'About Lisk',
      collapsible: true,
      collapsed: false,
      items: [
        'intro',
        'about-lisk/network-info',
        'about-lisk/fees'
      ],
    },
    {
      type: 'category',
      label: 'Building on Lisk',
      collapsible: true,
      collapsed: false,
      items: [
        { type: 'ref', id: 'docs-user/connecting-to-a-wallet' },
        'building-on-lisk/contracts',
        'building-on-lisk/bridged-tokens',
        'building-on-lisk/run-a-lisk-node',
        {
          type: 'category',
          label: 'Deploying a Smart Contract',
          collapsible: true,
          collapsed: true,
          items: [
            'building-on-lisk/deploying-smart-contract/with-Foundry',
            'building-on-lisk/deploying-smart-contract/with-Hardhat',
            'building-on-lisk/deploying-smart-contract/with-thirdweb',
          ],
          link: {
            type: 'generated-index',
            title: 'Deploying a Smart Contract',
            description: 'Guides explainig how to deploy a smart contract on Lisk for different smart contract development frameworks.',
            slug: '/category/building-on-lisk/deploying-smart-contract',
            keywords: ['guides','smart contracts','deployment'],
          },
        },
        {
          type: 'category',
          label: 'Interacting with the blockchain',
          collapsible: true,
          collapsed: true,
          items: [
            'building-on-lisk/interacting-with-the-blockchain/viem',
            'building-on-lisk/interacting-with-the-blockchain/ethers',
            'building-on-lisk/interacting-with-the-blockchain/web3',

          ],
        },
        {
          type: 'category',
          label: 'Bridging an L1 token to Lisk',
          collapsible: true,
          collapsed: true,
          items: [
            'building-on-lisk/add-token-to-lisk/index',
            'building-on-lisk/add-token-to-lisk/standard-token',
            'building-on-lisk/add-token-to-lisk/custom-token',
          ],
          link: {
            type: 'generated-index',
            title: 'Bridging an L1 token to Lisk',
            description: 'Guides explainig how to bridge tokens from Ethereum to Lisk and add them to the superchain token list.',
            slug: '/category/building-on-lisk/add-token-to-lisk',
            keywords: ['guides','smart contracts','bridging','superchain token list'],
          },
        },
        {
          type: 'category',
          label: 'Token development',
          collapsible: true,
          collapsed: true,
          items: [
            'building-on-lisk/token-development/overview',
            'building-on-lisk/token-development/deploy-erc-20',
            'building-on-lisk/token-development/deploy-erc-721',
            'building-on-lisk/token-development/deploy-erc-1155',
          ],
          link: {
            type: 'generated-index',
            title: 'Token development',
            description: 'Guides explainig how to create a new token on Lisk.',
            slug: '/category/building-on-lisk/token-development',
            keywords: ['guides','smart contracts','token development','token standards','erc-20','erc-721','erc-1155'],
          },
        },
        'building-on-lisk/web3-app-development',
        {
          type: 'category',
          label: 'Using oracle data',
          collapsible: true,
          collapsed: true,
          items: [
            'building-on-lisk/using-oracle-data/tellor',
            'building-on-lisk/using-oracle-data/redstone-pull',
            'building-on-lisk/using-oracle-data/redstone-push',
          ],
        }
      ],
      link: {
        type: 'generated-index',
        title: 'Building on Lisk',
        description: 'Guides for developers to start building dApps on Lisk L2.',
        slug: '/category/building-on-lisk',
        keywords: ['guides'],
      },
    },
    {
      type: 'category',
      label: 'Lisk Tools',
      collapsible: true,
      collapsed: false,
      items: [
        'lisk-tools/api-providers',
        'lisk-tools/faucets',
        { type: 'ref', id: 'docs-user/bridges' },
        { type: 'ref', id: 'docs-user/wallets' },
        'lisk-tools/oracles',
        'lisk-tools/utilities',
        'lisk-tools/indexers'
      ],
    },
    {
      type: 'category',
      label: 'Lisk L1 legacy chain',
      collapsible: true,
      collapsed: false,
      items: [
        'lisk-l1/legacy-chain-service',
        'lisk-l1/migration-guide',
      ],
    },
  ],


  userSidebar: [
    {
      type: 'category',
      label: 'Using Lisk',
      collapsible: true,
      collapsed: false,
      items: [
        // 'docs-user/intro-user',
        'docs-user/connecting-to-a-wallet',
        'docs-user/using-lisk/import-lsk',
        'docs-user/exchanges',
        'docs-user/wallets',
        'docs-user/claiming',
        'docs-user/bridges',
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'docs-user/governance/overview',
        'docs-user/governance/delegation',
        'docs-user/governance/proposal-lifecycle',
        'docs-user/governance/voting',
      ],
    },
    {
      type: 'category',
      label: 'Staking',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'docs-user/staking/staking',
        'docs-user/staking/stake-unstake',
        'docs-user/staking/pause-position',
        'docs-user/staking/increase-stake',
        'docs-user/staking/extend-duration',
        'docs-user/staking/early-unlock',
      ],
    },
  ],
};

export default sidebars;
