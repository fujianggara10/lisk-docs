"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[799],{8497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(5893),r=n(1151);const i={title:"... with Hardhat",slug:"/building-on-lisk/deploying-smart-contract/with-Hardhat",description:"A guide on deploying a smart contract on the Lisk test network using Hardhat. Includes instructions for setting up the environment, compiling, and deploying the smart contract.",keywords:["Hardhat","smart contract","ERC-721","Lisk","Lisk test network","Lisk testnet","Node.js","Solidity","smart contract deployment","deploy a smart contract","deploying smart contracts","build on lisk","write smart contract","smart contract development"]},a="Deploying a smart contract with Hardhat",s={id:"building-on-lisk/deploying-smart-contract/with-Hardhat",title:"... with Hardhat",description:"A guide on deploying a smart contract on the Lisk test network using Hardhat. Includes instructions for setting up the environment, compiling, and deploying the smart contract.",source:"@site/docs/building-on-lisk/deploying-smart-contract/with-Hardhat.md",sourceDirName:"building-on-lisk/deploying-smart-contract",slug:"/building-on-lisk/deploying-smart-contract/with-Hardhat",permalink:"/lisk-documentation/building-on-lisk/deploying-smart-contract/with-Hardhat",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/deploying-smart-contract/with-Hardhat.md",tags:[],version:"current",frontMatter:{title:"... with Hardhat",slug:"/building-on-lisk/deploying-smart-contract/with-Hardhat",description:"A guide on deploying a smart contract on the Lisk test network using Hardhat. Includes instructions for setting up the environment, compiling, and deploying the smart contract.",keywords:["Hardhat","smart contract","ERC-721","Lisk","Lisk test network","Lisk testnet","Node.js","Solidity","smart contract deployment","deploy a smart contract","deploying smart contracts","build on lisk","write smart contract","smart contract development"]},sidebar:"documentationSidebar",previous:{title:"... with Foundry",permalink:"/lisk-documentation/building-on-lisk/deploying-smart-contract/with-Foundry"},next:{title:"Interacting with the blockchain",permalink:"/lisk-documentation/building-on-lisk/interacting-with-the-blockchain"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Node v18+",id:"node-v18",level:3},{value:"Wallet funds",id:"wallet-funds",level:3},{value:"Creating a project",id:"creating-a-project",level:2},{value:"Configuring Hardhat with Lisk",id:"configuring-hardhat-with-lisk",level:2},{value:"Creating the contract",id:"creating-the-contract",level:2},{value:"Compiling the smart contract",id:"compiling-the-smart-contract",level:2},{value:"Deploying the smart contract",id:"deploying-the-smart-contract",level:2},{value:"Verifying the Smart Contract",id:"verifying-the-smart-contract",level:2},{value:"Interacting with the Smart Contract",id:"interacting-with-the-smart-contract",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"deploying-a-smart-contract-with-hardhat",children:"Deploying a smart contract with Hardhat"}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(t.h3,{id:"node-v18",children:"Node v18+"}),"\n",(0,o.jsx)(t.p,{children:"This guide requires you to have Node version 18+ installed."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Download ",(0,o.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Node v18+"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If you are using ",(0,o.jsx)(t.code,{children:"nvm"})," to manage your node versions, you can just run ",(0,o.jsx)(t.code,{children:"nvm install 18"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"wallet-funds",children:"Wallet funds"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Deploying contracts"})," to the blockchain requires a ",(0,o.jsx)(t.strong,{children:"gas fee"}),".\nTherefore, you will need to fund your wallet with ETH to cover those gas fees."]}),"\n",(0,o.jsx)(t.p,{children:"For this guide, you will be deploying a contract to the Lisk Sepolia Testnet."}),"\n",(0,o.jsxs)(t.p,{children:["You can deposit the required tokens by using the ",(0,o.jsx)(t.a,{href:"https://sepolia-bridge.lisk.com/bridge/lisk-sepolia-testnet",children:"Lisk Bridge"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In case your wallet doesn't hold enough ",(0,o.jsx)(t.code,{children:"SepoliaETH"}),", use one of the available faucets for the ",(0,o.jsx)(t.strong,{children:"Ethereum Sepolia"})," Testnet like ",(0,o.jsx)(t.a,{href:"https://sepoliafaucet.com/",children:"https://sepoliafaucet.com"})," to receive free Testnet ETH.\nThen, use the aforementioned Lisk Bridge to send tokens from the ",(0,o.jsx)(t.strong,{children:"Ethereum Sepolia Testnet"})," to the ",(0,o.jsx)(t.strong,{children:"Lisk Sepolia Testnet"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"creating-a-project",children:"Creating a project"}),"\n",(0,o.jsx)(t.p,{children:"Before you can begin deploying smart contracts to Lisk, you need to set up your development environment by creating a Node.js project."}),"\n",(0,o.jsx)(t.p,{children:"To create a new Node.js project, run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm init --y\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Next, you will need to install ",(0,o.jsx)(t.a,{href:"https://hardhat.org/tutorial",children:"Hardhat"})," and create a new Hardhat project."]}),"\n",(0,o.jsx)(t.p,{children:"To install Hardhat, run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev hardhat\n"})}),"\n",(0,o.jsx)(t.p,{children:"To create a new Hardhat project, run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx hardhat\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Select ",(0,o.jsx)(t.code,{children:"Create a TypeScript project"})," then press ",(0,o.jsx)(t.em,{children:"Enter"})," to confirm the project root."]}),"\n",(0,o.jsxs)(t.p,{children:["Select ",(0,o.jsx)(t.code,{children:"y"})," for both adding a ",(0,o.jsx)(t.code,{children:".gitignore"})," and loading the sample project.\nOptionally, you can decide to share crash reports and usage data with HardHat."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"\u2714 What do you want to do? \xb7 Create a TypeScript project\n\u2714 Hardhat project root: \xb7 /Users/lisk/git/hardhat-test\n\u2714 Do you want to add a .gitignore? (Y/n) \xb7 y\n\u2714 Help us improve Hardhat with anonymous crash reports & basic usage data? (Y/n) \xb7 y\n\u2714 Do you want to install this sample project's dependencies with npm (@nomicfoundation/hardhat-toolbox)? (Y/n) \xb7 y\n"})}),"\n",(0,o.jsx)(t.p,{children:"It will take a moment for the project setup process to complete."}),"\n",(0,o.jsx)(t.h2,{id:"configuring-hardhat-with-lisk",children:"Configuring Hardhat with Lisk"}),"\n",(0,o.jsx)(t.p,{children:"In order to deploy smart contracts to the Lisk network, you will need to configure your Hardhat project and add the Lisk network."}),"\n",(0,o.jsxs)(t.p,{children:["This example uses ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/dotenv",children:"dotenv"})," to load the ",(0,o.jsx)(t.code,{children:"WALLET_KEY"})," environment variable from a ",(0,o.jsx)(t.code,{children:".env"})," file to ",(0,o.jsx)(t.code,{children:"process.env.WALLET_KEY"}),".\nYou should use a similar method to avoid hardcoding your private keys within your source code."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev dotenv\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Once you have ",(0,o.jsx)(t.code,{children:"dotenv"})," installed, create a ",(0,o.jsx)(t.code,{children:".env"})," file with the following content:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"WALLET_KEY=<YOUR_PRIVATE_KEY>\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Substitute ",(0,o.jsx)(t.code,{children:"<YOUR_PRIVATE_KEY>"})," with the private key for your wallet."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"WALLET_KEY"})," is the private key of the wallet to use when deploying a contract.\nFollow the instructions of your wallet on how to get your private key.\nE.g. for ",(0,o.jsx)(t.strong,{children:"MetaMask"}),", please follow ",(0,o.jsx)(t.a,{href:"https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key",children:"these instructions"}),".\n",(0,o.jsx)(t.strong,{children:"It is critical that you do NOT commit this to a public repo"})]})}),"\n",(0,o.jsxs)(t.p,{children:["To configure Hardhat to use Lisk, add Lisk as a network to your project's ",(0,o.jsx)(t.code,{children:"hardhat.config.ts"})," file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="hardhat.config.ts"',children:"import { HardhatUserConfig } from \"hardhat/config\";\nimport \"@nomicfoundation/hardhat-toolbox\";\n\nrequire('dotenv').config();\n\nconst config: HardhatUserConfig = {\n  solidity: \"0.8.23\",\n  networks: {\n    // for testnet\n    'lisk-sepolia': {\n      url: 'https://rpc.sepolia-api.lisk.com',\n      accounts: [process.env.WALLET_KEY as string],\n      gasPrice: 1000000000,\n    },\n  },\n};\n\nexport default config;\n"})}),"\n",(0,o.jsx)(t.h2,{id:"creating-the-contract",children:"Creating the contract"}),"\n",(0,o.jsxs)(t.p,{children:["For ease and security, we\u2019ll use the ",(0,o.jsx)(t.code,{children:"ERC721"})," interface provided by the ",(0,o.jsx)(t.a,{href:"https://docs.openzeppelin.com/contracts/5.x/",children:"OpenZeppelin Contracts library"})," to create an NFT smart contract.\nWith OpenZeppelin, we don\u2019t need to write the whole ERC-721 interface. Instead, we can import the library contract and use its functions."]}),"\n",(0,o.jsx)(t.p,{children:"To add the OpenZeppelin Contracts library to your project, run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm install --save @openzeppelin/contracts\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In your project, delete the ",(0,o.jsx)(t.code,{children:"contracts/Lock.sol"})," contract that was generated with the project.\n(You can also delete the ",(0,o.jsx)(t.code,{children:"test/Lock.ts"})," test file, but you should add your own tests ASAP!)."]}),"\n",(0,o.jsxs)(t.p,{children:["Add the code below to a new file called ",(0,o.jsx)(t.code,{children:"contracts/NFT.sol"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sol",metastring:'title="contracts/NFT.sol"',children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.23;\n\nimport "@openzeppelin/contracts/token/ERC721/ERC721.sol";\n\ncontract NFT is ERC721 {\n    uint256 public currentTokenId;\n\n    constructor() ERC721("NFT Name", "NFT") {}\n\n    function mint(address recipient) public returns (uint256) {\n        uint256 newItemId = ++currentTokenId;\n        _safeMint(recipient, newItemId);\n        return newItemId;\n    }\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"compiling-the-smart-contract",children:"Compiling the smart contract"}),"\n",(0,o.jsx)(t.p,{children:"To compile the contract using Hardhat, simply run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx hardhat compile\n"})}),"\n",(0,o.jsxs)(t.p,{children:["After successful compilation, you should see a new folder ",(0,o.jsx)(t.code,{children:"artifacts/"}),", which contains the ",(0,o.jsx)(t.a,{href:"https://hardhat.org/hardhat-runner/docs/advanced/artifacts",children:"compilation artifacts"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"deploying-the-smart-contract",children:"Deploying the smart contract"}),"\n",(0,o.jsx)(t.p,{children:"Once your contract has been successfully compiled, you can deploy the contract to the Lisk Sepolia test network."}),"\n",(0,o.jsxs)(t.p,{children:["To deploy the contract to the Lisk Sepolia test network, you'll need to modify the ",(0,o.jsx)(t.code,{children:"scripts/deploy.ts"})," in your project:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="scripts/deploy.ts"',children:"import { ethers } from 'hardhat';\n\nasync function main() {\n  const nft = await ethers.deployContract('NFT');\n\n  await nft.waitForDeployment();\n\n  console.log('NFT Contract Deployed at ' + nft.target);\n}\n\n// We recommend this pattern to be able to use async/await everywhere\n// and properly handle errors.\nmain().catch((error) => {\n  console.error(error);\n  process.exitCode = 1;\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["You'll also need Testnet ETH in your wallet.\nSee the ",(0,o.jsx)(t.a,{href:"#prerequisites",children:"Prerequisites"})," if you haven't done that yet.\nOtherwise, the deployment attempt will fail."]}),"\n",(0,o.jsx)(t.p,{children:"Finally, run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx hardhat run scripts/deploy.ts --network lisk-sepolia\n"})}),"\n",(0,o.jsx)(t.p,{children:"The contract will be deployed on the Lisk Sepolia Testnet.\nYou can view the deployment status and contract by using a block explorer and searching for the address returned by your deploy script."}),"\n",(0,o.jsx)(t.p,{children:"If you're deploying a new or modified contract, you'll need to verify it first."}),"\n",(0,o.jsx)(t.h2,{id:"verifying-the-smart-contract",children:"Verifying the Smart Contract"}),"\n",(0,o.jsx)(t.p,{children:"If you want to interact with your contract on the block explorer, you, or someone else needs to verify it first.\nThe above contract has already been verified, so you should be able to view your version on a block explorer already.\nFor the remainder of this guide, we'll walk through how to verify your contract on the Lisk Sepolia Testnet."}),"\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.code,{children:"hardhat.config.ts"}),", configure Lisk Sepolia as a custom network.\nAdd the following to your ",(0,o.jsx)(t.code,{children:"HardhatUserConfig"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="hardhat.config.ts"',children:'// Add the following information after the "networks" configuration of the HardhatUserConfig\nconst config: HardhatUserConfig = {\n  // Hardhat expects etherscan here, even if you\'re using Blockscout.\n  etherscan: {\n    // Use "123" as a placeholder, because Blockscout doesn\'t need a real API key, and Hardhat will complain if this property isn\'t set.\n     apiKey: {\n      "lisk-sepolia": "123"\n     },\n     customChains: [\n      {\n          network: "lisk-sepolia",\n          chainId: 4202,\n          urls: {\n              apiURL: "https://sepolia-blockscout.lisk.com/api",\n              browserURL: "https://sepolia-blockscout.lisk.com"\n          }\n       }\n     ]\n   },\n   sourcify: {\n    enabled: false\n  },\n};\n'})}),"\n",(0,o.jsx)(t.p,{children:"Now, you can verify your contract.\nGrab the deployed address and run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx hardhat verify --network lisk-sepolia <deployed address>\n"})}),"\n",(0,o.jsx)(t.p,{children:"You should see an output similar to:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Successfully submitted source code for contract\ncontracts/NFT.sol:NFT at 0xC10710ac55C98f9AACdc9cD0A506411FBe0af71D\nfor verification on the block explorer. Waiting for verification result...\n\nSuccessfully verified contract NFT on the block explorer.\nhttps://sepolia-blockscout.lisk.com/address/0xC10710ac55C98f9AACdc9cD0A506411FBe0af71D#code\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"You can't re-verify a contract identical to one that has already been verified.\nIf you attempt to do so, such as verifying the above contract, you'll get a message similar to:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"The contract 0xC10710ac55C98f9AACdc9cD0A506411FBe0af71D has already been verified on Etherscan.\nhttps://sepolia-blockscout.lisk.com/address/0xC10710ac55C98f9AACdc9cD0A506411FBe0af71D#code\n"})})]}),"\n",(0,o.jsxs)(t.p,{children:["View your contract on BlockScout, by following the ",(0,o.jsx)(t.a,{href:"https://sepolia-blockscout.lisk.com/address/0xC10710ac55C98f9AACdc9cD0A506411FBe0af71D?tab=contract",children:"link to the deployed contract"})," displayed in the previous steps output message.\nThe block explorer will confirm that the contract is verified and allow you to ",(0,o.jsx)(t.a,{href:"#interacting-with-the-smart-contract",children:"interact"})," with it."]}),"\n",(0,o.jsx)(t.h2,{id:"interacting-with-the-smart-contract",children:"Interacting with the Smart Contract"}),"\n",(0,o.jsxs)(t.p,{children:["After ",(0,o.jsx)(t.a,{href:"#verifying-the-smart-contract",children:"the contract is verified"}),", you can use the ",(0,o.jsx)(t.code,{children:"Read Contract"})," and ",(0,o.jsx)(t.code,{children:"Write Contract"})," tabs to interact with the deployed contract via ",(0,o.jsx)(t.a,{href:"https://sepolia-blockscout.lisk.com/address/0xC10710ac55C98f9AACdc9cD0A506411FBe0af71D?tab=contract",children:"BlockScout"}),".\nDon't forget to update the contract address in the Blockscout URL.\nYou'll also need to connect your wallet first, by clicking the ",(0,o.jsx)(t.code,{children:"Connect Wallet"})," button."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var o=n(7294);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);