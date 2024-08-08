"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[7939],{8042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var i=t(5893),a=t(1151),l=t(4866),s=t(5162);const c={title:"...with viem",slug:"/building-on-lisk/interacting-with-blockchain/viem",description:"Documentation for using Viem, a TypeScript interface for EVM-compatible blockchains. This page covers installation, setup, and various functionalities such as reading and writing blockchain data and interacting with smart contracts on Lisk.",keywords:["viem","Lisk","Lisk mainnet","Lisk testnet","Ethereum","smart contracts","blockchain","RPC URL","JavaScript","TypeScript"]},r="Interacting with the blockchain with viem",o={id:"building-on-lisk/interacting-with-the-blockchain/viem",title:"...with viem",description:"Documentation for using Viem, a TypeScript interface for EVM-compatible blockchains. This page covers installation, setup, and various functionalities such as reading and writing blockchain data and interacting with smart contracts on Lisk.",source:"@site/docs/building-on-lisk/interacting-with-the-blockchain/viem.mdx",sourceDirName:"building-on-lisk/interacting-with-the-blockchain",slug:"/building-on-lisk/interacting-with-blockchain/viem",permalink:"/lisk-documentation/building-on-lisk/interacting-with-blockchain/viem",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/interacting-with-the-blockchain/viem.mdx",tags:[],version:"current",frontMatter:{title:"...with viem",slug:"/building-on-lisk/interacting-with-blockchain/viem",description:"Documentation for using Viem, a TypeScript interface for EVM-compatible blockchains. This page covers installation, setup, and various functionalities such as reading and writing blockchain data and interacting with smart contracts on Lisk.",keywords:["viem","Lisk","Lisk mainnet","Lisk testnet","Ethereum","smart contracts","blockchain","RPC URL","JavaScript","TypeScript"]},sidebar:"documentationSidebar",previous:{title:"Deploying a custom token",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk/custom-token"},next:{title:"...with ethers.js",permalink:"/lisk-documentation/building-on-lisk/interacting-with-the-blockchain/ethers"}},u={},h=[{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Public Client",id:"public-client",level:3},{value:"Wallet Client",id:"wallet-client",level:3},{value:"Reading data from the blockchain",id:"reading-data-from-the-blockchain",level:2},{value:"Writing data to the blockchain",id:"writing-data-to-the-blockchain",level:2},{value:"Interacting with smart contracts",id:"interacting-with-smart-contracts",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"interacting-with-the-blockchain-with-viem",children:"Interacting with the blockchain with viem"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://viem.sh/",children:"viem"})," a TypeScript interface for Ethereum that provides low-level stateless primitives for interacting with Ethereum."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use viem to interact with smart contracts deployed on Lisk.\nViem provides first-class support for chains implemented on the OP stack, see ",(0,i.jsx)(n.a,{href:"https://viem.sh/op-stack",children:"viem.sh > OP stack"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.p,{children:"To install viem run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save viem\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["Before you can start using viem, you need to setup a ",(0,i.jsx)(n.a,{href:"https://viem.sh/op-stack/client",children:"Client"})," with a desired ",(0,i.jsx)(n.a,{href:"https://viem.sh/docs/clients/intro.html#transports",children:"Transport"})," and ",(0,i.jsx)(n.a,{href:"https://viem.sh/docs/chains/introduction",children:"Chain"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"public-client",children:"Public Client"}),"\n",(0,i.jsxs)(n.p,{children:["In order to read data from Lisk, you need to create a ",(0,i.jsx)(n.strong,{children:"Public client"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["By extending the public client with ",(0,i.jsx)(n.code,{children:"publicActionsL2"})," or ",(0,i.jsx)(n.code,{children:"publicActionsL1"}),", you have access to additional methods for Lisk and other chains built on top of the OP stack.\nSee ",(0,i.jsx)(n.a,{href:"https://viem.sh/op-stack/client#layer-2-extensions",children:"Layer 2 extensions"})," for more information."]}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"mainnet",label:"Lisk",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="public-client.js"',children:"import { createPublicClient, http } from 'viem'\nimport { lisk, ethereum } from 'viem/chains'\nimport { publicActionsL2, publicActionsL1 } from 'viem/op-stack'\n\nexport const publicClientL2 = createPublicClient({\n  chain: lisk,\n  transport: http()\n}).extend(publicActionsL2()) \n\nexport const publicClientL1 = createPublicClient({\n  chain: ethereum,\n  transport: http()\n}).extend(publicActionsL1()) \n"})})}),(0,i.jsx)(s.Z,{value:"testnet",label:"Lisk Sepolia",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="public-client.js"',children:"import { createPublicClient, http } from 'viem'\nimport { liskSepolia, sepolia } from 'viem/chains'\nimport { publicActionsL2, publicActionsL1 } from 'viem/op-stack'\n\nexport const publicClientL2 = createPublicClient({\n  chain: liskSepolia,\n  transport: http()\n}).extend(publicActionsL2()) \n\nexport const publicClientL1 = createPublicClient({\n  chain: sepolia,\n  transport: http()\n}).extend(publicActionsL1()) \n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"wallet-client",children:"Wallet Client"}),"\n",(0,i.jsxs)(n.p,{children:["In order to write data to Lisk, you need to create a Wallet client (",(0,i.jsx)(n.code,{children:"createWalletClient"}),") and specify an ",(0,i.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/accounts/",children:(0,i.jsx)(n.code,{children:"Account"})})," to use."]}),"\n",(0,i.jsxs)(n.p,{children:["By extending the wallet client with ",(0,i.jsx)(n.code,{children:"walletActionsL1"})," or ",(0,i.jsx)(n.code,{children:"walletActionsL2"}),", you have access to additional methods for Lisk and other chains built on top of the OP stack.\nSee ",(0,i.jsx)(n.a,{href:"https://viem.sh/op-stack/client#layer-2-extensions",children:"Layer 2 extensions"})," for more information."]}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"jsonrpc",label:"JSON-RPC Account",children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"mainnet",label:"Lisk",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="wallet-client.js"',children:"import { createWalletClient, custom } from 'viem'\nimport { ethereum, lisk } from 'viem/chains'\nimport { walletActionsL1, walletActionsL2 } from 'viem/op-stack'\n\n// Retrieve Account from an EIP-1193 Provider.\nconst [account] = await window.ethereum.request({ \n  method: 'eth_requestAccounts'\n}) \n\nexport const walletClientL1 = createWalletClient({\n  account, \n  chain: ethereum,\n  transport: custom(window.ethereum)\n}).extend(walletActionsL1());\n\nexport const walletClientL2 = createWalletClient({\n  account, \n  chain: lisk,\n  transport: custom(window.ethereum)\n}).extend(walletActionsL2());\n"})})}),(0,i.jsx)(s.Z,{value:"testnet",label:"Lisk Sepolia",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="wallet-client.js"',children:"import { createWalletClient, custom } from 'viem'\nimport { sepolia, liskSepolia } from 'viem/chains'\nimport { walletActionsL1, walletActionsL2 } from 'viem/op-stack'\n\n// Retrieve Account from an EIP-1193 Provider.\nconst [account] = await window.ethereum.request({ \n  method: 'eth_requestAccounts'\n}) \n\nexport const walletClientL1 = createWalletClient({\n  account, \n  chain: sepolia,\n  transport: custom(window.ethereum)\n}).extend(walletActionsL1());\n\nexport const walletClientL2 = createWalletClient({\n  account, \n  chain: liskSepolia,\n  transport: custom(window.ethereum)\n}).extend(walletActionsL2());\n"})})})]})}),(0,i.jsxs)(s.Z,{value:"local",label:"Local Account",children:[(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"<PRIVATE_KEY>"})," with the private key of the account you want to use.\nThe ",(0,i.jsx)(n.code,{children:"0x"})," prefix indicates that the following string is a hexadecimal number."]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"mainnet",label:"Lisk",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="wallet-client.js"',children:"import { createWalletClient, http } from 'viem'\nimport { privateKeyToAccount } from 'viem/accounts'\nimport { ethereum, lisk } from 'viem/chains'\nimport { walletActionsL1, walletActionsL2 } from 'viem/op-stack'\n\n// Wallet client for Ethereum\nexport const walletClientL1 = createWalletClient({\n  account: privateKeyToAccount('0x<PRIVATE_KEY>'), \n  chain: ethereum,\n  transport: http()\n}).extend(walletActionsL1());\n\n// Wallet client for Lisk\nexport const walletClientL2 = createWalletClient({\n  account: privateKeyToAccount('0x<PRIVATE_KEY>'), \n  chain: lisk,\n  transport: http()\n}).extend(walletActionsL2());\n"})})}),(0,i.jsx)(s.Z,{value:"testnet",label:"Lisk Sepolia",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="wallet-client.js"',children:"import { createWalletClient, http } from 'viem'\nimport { privateKeyToAccount } from 'viem/accounts'\nimport { sepolia, liskSepolia } from 'viem/chains'\nimport { walletActionsL1, walletActionsL2 } from 'viem/op-stack'\n\n// Wallet client for Ethereum\nexport const walletClientL1 = createWalletClient({\n  account: privateKeyToAccount('0x<PRIVATE_KEY>'), \n  chain: sepolia,\n  transport: http()\n}).extend(walletActionsL1());\n\n// Wallet client for Lisk\nexport const walletClientL2 = createWalletClient({\n  account: privateKeyToAccount('0x<PRIVATE_KEY>'), \n  chain: liskSepolia,\n  transport: http()\n}).extend(walletActionsL2());\n"})})})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["In addition to making a JSON-RPC request (",(0,i.jsx)(n.code,{children:"eth_requestAccounts"}),") to get an Account, viem provides various helper methods for creating an ",(0,i.jsx)(n.code,{children:"Account"}),", including: ",(0,i.jsx)(n.a,{href:"https://viem.sh/docs/accounts/privateKey.html",children:(0,i.jsx)(n.code,{children:"privateKeyToAccount"})}),", ",(0,i.jsx)(n.a,{href:"https://viem.sh/docs/accounts/mnemonic.html",children:(0,i.jsx)(n.code,{children:"mnemonicToAccount"})}),", and ",(0,i.jsx)(n.a,{href:"https://viem.sh/docs/accounts/hd.html",children:(0,i.jsx)(n.code,{children:"hdKeyToAccount"})}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"reading-data-from-the-blockchain",children:"Reading data from the blockchain"}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.a,{href:"#public-client",children:"public client"})," and use it to read and access data from Lisk using ",(0,i.jsx)(n.a,{href:"https://viem.sh/docs/actions/public/introduction",children:"Public Actions"})," and ",(0,i.jsx)(n.a,{href:"https://viem.sh/op-stack/client#layer-2-extensions",children:"OP stack public actions"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:['Public Actions are client methods that map one-to-one with a "public" Ethereum RPC method (',(0,i.jsx)(n.code,{children:"eth_blockNumber"}),", ",(0,i.jsx)(n.code,{children:"eth_getBalance"}),", etc.)."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you can use the ",(0,i.jsx)(n.code,{children:"getBlockNumber"})," action to get the latest block:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="read-example.js"',children:"import { parseEther } from 'viem'\nimport { publicClientL2 } from './public-client.js'\n\nconst blockNumber = await publicClientL2.getBlockNumber();\n\nexport const l1Gas = await publicClientL2.estimateL1Gas({ \n  account: '0x3C46A11471f285E36EE8d089473ce98269D1b081', \n  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', \n  value: parseEther('0.1') \n}) \n\nconsole.log(blockNumber);\nconsole.log(l1Gas);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"writing-data-to-the-blockchain",children:"Writing data to the blockchain"}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.a,{href:"#wallet-client",children:"wallet client"})," and use it to read and access data from Lisk using ",(0,i.jsx)(n.a,{href:"https://viem.sh/docs/actions/wallet/introduction",children:"Wallet Actions"})," and ",(0,i.jsx)(n.a,{href:"https://viem.sh/op-stack/client#layer-2-extensions",children:"OP stack wallet actions"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:['Wallet Actions are actions that map one-to-one with a "wallet" or "signable" Ethereum RPC method (',(0,i.jsx)(n.code,{children:"eth_requestAccounts"}),", ",(0,i.jsx)(n.code,{children:"eth_sendTransaction"}),", etc)."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you can use the ",(0,i.jsx)(n.code,{children:"sendTransaction"})," action to post a transaction:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="write-example.js"',children:"import { walletClientL2 } from './wallet-client.js'\n\nconst hash = await walletClientL2.sendTransaction({ \n  to: '0x...',\n  value: 1000000000000000000n\n})\n\nconsole.log(hash);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interacting-with-smart-contracts",children:"Interacting with smart contracts"}),"\n",(0,i.jsxs)(n.p,{children:["You can use viem to interact with a smart contract on Lisk by creating a ",(0,i.jsx)(n.code,{children:"Contract"})," instance using ",(0,i.jsx)(n.a,{href:"https://viem.sh/docs/contract/getContract.html",children:(0,i.jsx)(n.code,{children:"getContract"})})," and passing it the contract ABI, contract address, and and ",(0,i.jsx)(n.a,{href:"https://viem.sh/docs/clients/public.html",children:"Public"})," and/or ",(0,i.jsx)(n.a,{href:"https://viem.sh/docs/clients/wallet.html",children:"Wallet"})," Client:"]}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"example",label:"contract-example.js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="contract-example.js"',children:"import { getContract } from 'viem'\nimport { wagmiAbi } from './abi.js'\nimport { publicClient, walletClient } from './client.js'\n \n// 1. Create contract instance\nconst contract = getContract({\n  address: 'CONTRACT_ADDRESS',\n  abi: wagmiAbi,\n  // 1a. Insert a single client\n  //client: publicClient,\n  // 1b. Or public and/or wallet clients\n  client: { public: publicClient, wallet: walletClient }\n})\n \n// 2. Call contract methods, fetch events, listen to events, etc.\nconst result = await contract.read.totalSupply()\nconst logs = await contract.getEvents.Transfer()\nconst unwatch = contract.watchEvent.Transfer(\n  { from: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e' },\n  { onLogs(logs) { console.log(logs) } }\n)\n"})})}),(0,i.jsx)(s.Z,{value:"client",label:"client.js",children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{value:"mainnet",label:"Lisk",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="client.js"',children:"import { createPublicClient, createWalletClient, http, custom } from 'viem'\nimport { lisk } from 'viem/chains'\nimport { EthereumProvider } from '@walletconnect/ethereum-provider'\nimport { publicActionsL2 } from 'viem/op-stack'\n\nexport const publicClient = createPublicClient({\n  chain: lisk,\n  transport: http(),\n}).extend(publicActionsL2());\n\n// eg: Metamask\nexport const walletClient = createWalletClient({\n  chain: lisk,\n  transport: custom(window.ethereum),\n})\n\n// eg: WalletConnect\nconst provider = await EthereumProvider.init({\n  projectId: \"abcd1234\",\n  showQrModal: true,\n  chains: [1],\n})\n\nexport const walletClientWC = createWalletClient({\n  chain: lisk,\n  transport: custom(provider),\n})\n"})})}),(0,i.jsx)(s.Z,{value:"testnet",label:"Lisk Sepolia",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="client.js"',children:"import { createPublicClient, createWalletClient, http, custom } from 'viem'\nimport { liskSepolia } from 'viem/chains'\nimport { EthereumProvider } from '@walletconnect/ethereum-provider'\nimport { publicActionsL2 } from 'viem/op-stack'\n\nexport const publicClient = createPublicClient({\n  chain: liskSepolia,\n  transport: http(),\n}).extend(publicActionsL2());\n\n// eg: Metamask\nexport const walletClient = createWalletClient({\n  chain: liskSepolia,\n  transport: custom(window.ethereum),\n})\n\n// eg: WalletConnect\nconst provider = await EthereumProvider.init({\n  projectId: \"abcd1234\",\n  showQrModal: true,\n  chains: [1],\n})\n\nexport const walletClientWC = createWalletClient({\n  chain: liskSepolia,\n  transport: custom(provider),\n})\n"})})})]})}),(0,i.jsxs)(s.Z,{value:"abi",label:"abi.js",children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ABI of a contract can be found on the respective contract page in ",(0,i.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/",children:"BlockScout"}),"."]})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="abi.js"',children:'export const wagmiAbi = [\n  [\n    {\n        "inputs": [],\n        "stateMutability": "nonpayable",\n        "type": "constructor"\n    },\n    {\n        "anonymous": false,\n        "inputs": [\n            {\n                "indexed": true,\n                "internalType": "address",\n                "name": "sender",\n                "type": "address"\n            },\n            {\n                "indexed": false,\n                "internalType": "string",\n                "name": "message",\n                "type": "string"\n            }\n        ],\n        "name": "NewHello",\n        "type": "event"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "uint256",\n                "name": "",\n                "type": "uint256"\n            }\n        ],\n        "name": "blacklist",\n        "outputs": [\n            {\n                "internalType": "string",\n                "name": "",\n                "type": "string"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "counter",\n        "outputs": [\n            {\n                "internalType": "uint32",\n                "name": "",\n                "type": "uint32"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "string",\n                "name": "_message",\n                "type": "string"\n            }\n        ],\n        "name": "createHello",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "maxLength",\n        "outputs": [\n            {\n                "internalType": "uint32",\n                "name": "",\n                "type": "uint32"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "address",\n                "name": "",\n                "type": "address"\n            }\n        ],\n        "name": "message",\n        "outputs": [\n            {\n                "internalType": "string",\n                "name": "",\n                "type": "string"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "minLength",\n        "outputs": [\n            {\n                "internalType": "uint32",\n                "name": "",\n                "type": "uint32"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [],\n        "name": "owner",\n        "outputs": [\n            {\n                "internalType": "address",\n                "name": "",\n                "type": "address"\n            }\n        ],\n        "stateMutability": "view",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "string[]",\n                "name": "_newBlackList",\n                "type": "string[]"\n            }\n        ],\n        "name": "setBlacklist",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    },\n    {\n        "inputs": [\n            {\n                "internalType": "uint32",\n                "name": "_newMin",\n                "type": "uint32"\n            },\n            {\n                "internalType": "uint32",\n                "name": "_newMax",\n                "type": "uint32"\n            }\n        ],\n        "name": "setMinMaxMessageLength",\n        "outputs": [],\n        "stateMutability": "nonpayable",\n        "type": "function"\n    }\n  ]\n];\n'})})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CONTRACT_ADDRESS"})," is the address of the deployed contract."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var i=t(512);const a={tabItem:"tabItem_Ymn6"};var l=t(5893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,s),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var i=t(7294),a=t(512),l=t(2466),s=t(6550),c=t(469),r=t(1980),o=t(7392),u=t(812);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,r._X)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[s,r]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:l}))),[o,h]=m({queryString:t,groupId:a}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),v=(()=>{const e=o??b;return p({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{v&&r(v)}),[v]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),x(e)}),[h,x,l]),tabValues:l}}var x=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function g(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:c}=e;const r=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=r.indexOf(n),a=c[t].value;a!==i&&(o(n),s(a))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=r.indexOf(e.currentTarget)+1;n=r[t]??r[0];break}case"ArrowLeft":{const t=r.indexOf(e.currentTarget)-1;n=r[t]??r[r.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>r.push(e),onKeyDown:h,onClick:u,...l,className:(0,a.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function k(e){const n=(0,x.Z)();return(0,f.jsx)(w,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(7294);const a={},l=i.createContext(a);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);