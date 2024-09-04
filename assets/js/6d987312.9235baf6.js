"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[9711],{3947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(5893),a=n(1151);const r={title:"Accessing real-world data with Oracles",slug:"/building-on-lisk/use-oracle-data",description:"A guide on using Redstone Data Feeds to access real-world data such as asset prices, directly from your smart contracts on the Lisk testnet.",keywords:["Oracle Oracles","Redstone","price feeds","data feeds","smart contract","Lisk blockchain","Lisk network","Lisk testnet","Lisk test network","app development","dapp development","build a dapp on Lisk","build on Lisk"]},o="Accessing real-world data using the Redstone Oracle",i={id:"building-on-lisk/use-oracle-data",title:"Accessing real-world data with Oracles",description:"A guide on using Redstone Data Feeds to access real-world data such as asset prices, directly from your smart contracts on the Lisk testnet.",source:"@site/docs/building-on-lisk/use-oracle-data.md",sourceDirName:"building-on-lisk",slug:"/building-on-lisk/use-oracle-data",permalink:"/lisk-documentation/building-on-lisk/use-oracle-data",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/use-oracle-data.md",tags:[],version:"current",frontMatter:{title:"Accessing real-world data with Oracles",slug:"/building-on-lisk/use-oracle-data",description:"A guide on using Redstone Data Feeds to access real-world data such as asset prices, directly from your smart contracts on the Lisk testnet.",keywords:["Oracle Oracles","Redstone","price feeds","data feeds","smart contract","Lisk blockchain","Lisk network","Lisk testnet","Lisk test network","app development","dapp development","build a dapp on Lisk","build on Lisk"]},sidebar:"documentationSidebar",previous:{title:"...with web3.js",permalink:"/lisk-documentation/building-on-lisk/interacting-with-the-blockchain/web3"},next:{title:"Legacy Chain Service",permalink:"/lisk-documentation/lisk-l1/legacy-chain-service"}},c={},d=[{value:"How to pull oracle data from Redstone",id:"how-to-pull-oracle-data-from-redstone",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Install the evm connector",id:"install-the-evm-connector",level:3},{value:"Import the evm connector",id:"import-the-evm-connector",level:3},{value:"Get oracle data",id:"get-oracle-data",level:3},{value:"Get a single value",id:"get-a-single-value",level:4},{value:"Get multiple values",id:"get-multiple-values",level:4},{value:"Testing",id:"testing",level:3},{value:"Deploying on Lisk",id:"deploying-on-lisk",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"accessing-real-world-data-using-the-redstone-oracle",children:"Accessing real-world data using the Redstone Oracle"})}),"\n",(0,s.jsx)(t.p,{children:"This page will explain how you can access real world / off-chain data using Oracles such as Redstone."}),"\n",(0,s.jsx)(t.p,{children:"RedStone is a data ecosystem that delivers frequently updated, reliable and diverse data for your dApp and smart contracts deployed on Lisk."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-pull-oracle-data-from-redstone",children:"How to pull oracle data from Redstone"}),"\n",(0,s.jsx)(t.p,{children:"To create a smart contract that directly fetches the latest data from the Redstone oracle, follow this guide."}),"\n",(0,s.jsxs)(t.p,{children:["This guides uses the ",(0,s.jsx)(t.a,{href:"https://docs.redstone.finance/docs/get-started/models/redstone-core",children:"Redstone Core model"})," to fetch the data."]}),"\n",(0,s.jsxs)(t.p,{children:["For an overview about the different modules Redstone offers to receive oracle data, go ",(0,s.jsx)(t.a,{href:"../lisk-tools/oracles#redstone",children:"Oracles > Redstone"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://hardhat.org/",children:"Hardhat"})," is used in this guide to create the smart contract.\nIn case you want to use Foundry, check out the ",(0,s.jsx)(t.a,{href:"https://docs.redstone.finance/docs/get-started/models/redstone-core#foundry",children:"Redstone docs"})," for instructions."]}),"\n",(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"ethers ^5.7.2"}),"\n",(0,s.jsx)(t.li,{children:"hardhat ^2.14.0"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"install-the-evm-connector",children:"Install the evm connector"}),"\n",(0,s.jsxs)(t.p,{children:["Install the ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/@redstone-finance/evm-connector",children:"@redstone-finance/evm-connector"})," package."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install @redstone-finance/evm-connector\n"})}),"\n",(0,s.jsx)(t.h3,{id:"import-the-evm-connector",children:"Import the evm connector"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:'// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.9;\n\n/**\n* Imports the EVM connector\n*/\nimport "@redstone-finance/evm-connector/contracts/data-services/RapidDemoConsumerBase.sol";\n\ncontract YourContract is RapidDemoConsumerBase {\n\n    // ...\n\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"get-oracle-data",children:"Get oracle data"}),"\n",(0,s.jsx)(t.p,{children:"Get the oracle data by using the provided functions of the EVM connector."}),"\n",(0,s.jsx)(t.h4,{id:"get-a-single-value",children:"Get a single value"}),"\n",(0,s.jsxs)(t.p,{children:["To get a single price feed, use the function ",(0,s.jsx)(t.code,{children:"getOracleNumericValueFromTxMsg()"})," and provide the data feed ID as parameter."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:'// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.9;\n\n/**\n* Imports the EVM connector\n*/\nimport "@redstone-finance/evm-connector/contracts/data-services/RapidDemoConsumerBase.sol";\n\ncontract YourContract is RapidDemoConsumerBase {\n\n    // ...\n\n    /**\n    * Returns the latest price of ETH\n    */\n    function getLatestEthPrice() public view returns (uint256) {\n        bytes32 dataFeedId = bytes32("ETH");\n        return getOracleNumericValueFromTxMsg(dataFeedId);\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"get-multiple-values",children:"Get multiple values"}),"\n",(0,s.jsxs)(t.p,{children:["To get data from multiple price feeds, use the function ",(0,s.jsx)(t.code,{children:"getOracleNumericValuesFromTxMsg()"})," and provide the data feed ID array as parameter."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:'/**\n* Returns the latest prices of ETH and BTC\n*/\nfunction getLatestEthBtcPrices() public view returns (uint256) {\n    bytes32[] memory dataFeedIds = new bytes32[](2);\n    dataFeedIds[0] = bytes32("ETH");\n    dataFeedIds[1] = bytes32("BTC");\n    uint256[] memory values = getOracleNumericValuesFromTxMsg(dataFeedIds);\n    uint256 ethPrice = values[0];\n    uint256 btcPrice = values[1];\n    return values;\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"testing",children:"Testing"}),"\n",(0,s.jsxs)(t.p,{children:["In order to test the EVM connector related functions in your contract, it is necessary to wrap the contract using the ",(0,s.jsx)(t.code,{children:"WrapperBuilder"})," provided by the ",(0,s.jsx)(t.code,{children:"@redstone-finance/evm-connector"})," package."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="test/YourContract.ts"',children:'import { expect } from "chai";\nimport { ethers } from "hardhat";\nimport { WrapperBuilder } from "@redstone-finance/evm-connector";\n\ndescribe("YourContract", function () {\n    describe("Redstone", function () {\n        it("Get ETH price securely", async function () {\n        const YourContract = await ethers.getContractFactory("YourContract");\n        const contract = await YourContract.deploy(1896456000);\n        const wrappedContract = WrapperBuilder.wrap(contract).usingDataService({\n            dataFeeds: ["ETH"],\n        });\n\n        // Interact with the contract (getting oracle value securely)\n        const ethPriceFromContract = await wrappedContract.getLatestEthPrice();\n        console.log("Latest ETH price:");\n        console.log({ ethPriceFromContract });\n        });\n    });\n});\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now run the test:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx hardhat test\n"})}),"\n",(0,s.jsx)(t.p,{children:"This should output the latest ETH price in the console:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:'language-title="Output"',children:'Latest ETH price:\n{ ethPriceFromContract: BigNumber { value: "250255087192" } }\n'})}),"\n",(0,s.jsx)(t.h2,{id:"deploying-on-lisk",children:"Deploying on Lisk"}),"\n",(0,s.jsxs)(t.p,{children:["To deploy the smart contract on Lisk Sepolia or Lisk Mainnet, follow the guide ",(0,s.jsx)(t.a,{href:"/lisk-documentation/building-on-lisk/deploying-smart-contract/with-Hardhat",children:"Deploying a smart contract with Hardhat"})]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(7294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);