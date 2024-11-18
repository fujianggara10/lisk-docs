"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[3080],{2879:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(5893),o=n(1151);const i={title:"Oracles",slug:"/lisk-tools/oracles",description:"Documentation for various blockchain oracles for Lisk.",keywords:["Oracles","Oracle","Lisk","Lisk Mainnet","Lisk Testnet","Lisk network","Redstone","Tellor","price feeds","data feeds"]},r="Oracles",l={id:"lisk-tools/oracles",title:"Oracles",description:"Documentation for various blockchain oracles for Lisk.",source:"@site/docs/lisk-tools/oracles.md",sourceDirName:"lisk-tools",slug:"/lisk-tools/oracles",permalink:"/lisk-documentation/lisk-tools/oracles",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Oracles",slug:"/lisk-tools/oracles",description:"Documentation for various blockchain oracles for Lisk.",keywords:["Oracles","Oracle","Lisk","Lisk Mainnet","Lisk Testnet","Lisk network","Redstone","Tellor","price feeds","data feeds"]},sidebar:"documentationSidebar",previous:{title:"Faucets",permalink:"/lisk-documentation/lisk-tools/faucets"},next:{title:"Utilities",permalink:"/lisk-documentation/lisk-tools/utilities"}},a={},d=[{value:"RedStone",id:"redstone",level:2},{value:"Supported Networks",id:"supported-networks",level:4},{value:"Guides",id:"guides",level:3},{value:"Tellor",id:"tellor",level:2},{value:"Supported Networks",id:"supported-networks-1",level:4},{value:"Guides",id:"guides-1",level:3}];function c(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"oracles",children:"Oracles"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://ethereum.org/en/developers/docs/oracles/",children:"Oracles"})," provide offchain data onchain.\nThis allows code running on a blockchain to access a wide variety of information."]}),"\n",(0,t.jsx)(s.p,{children:"The following Oracles support the Lisk network already:"}),"\n",(0,t.jsx)(s.h2,{id:"redstone",children:"RedStone"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://redstone.finance/",children:"RedStone"})," offers flexible Data Feeds for Lending Markets, Perpetuals, Options, Stablecoins, Yield Aggregators, and other types of novel DeFi protocols."]}),"\n",(0,t.jsx)(s.p,{children:"Builders can choose how they want to consume the data from the following three dedicated models:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.redstone.finance/docs/get-started/models/redstone-pull",children:"RedStone Pull"})," (pull oracle) - less than 10s update time, broad spectrum of feeds, best for most use cases. All ",(0,t.jsx)(s.a,{href:"https://app.redstone.finance/#/app/tokens",children:"Price Feeds"})," are available for Lisk."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.redstone.finance/docs/get-started/models/redstone-push",children:"RedStone Push"})," (push oracle) - for protocols designed for the traditional oracle interface, customizable heartbeat, and deviation threshold."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.redstone.finance/docs/get-started/models/redstone-x",children:"RedStone X"})," - specifically for Perps and Options, highest update frequency, and front-running protection."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.redstone.finance/docs/get-started/models/redstone-erc7412",children:"ERC7412"})," - Classic and Core models combined"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Interested in integration? ",(0,t.jsx)(s.a,{href:"https://discord.com/invite/PVxBZKFr46",children:"Get in contact"})," with the RedStone team!"]}),"\n",(0,t.jsx)(s.h4,{id:"supported-networks",children:"Supported Networks"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Lisk"}),"\n",(0,t.jsx)(s.li,{children:"Lisk Sepolia"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"guides",children:"Guides"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/lisk-documentation/building-on-lisk/use-oracle-data/redstone-pull",children:"Accessing oracle data with Redstone (Pull)"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"tellor",children:"Tellor"}),"\n",(0,t.jsx)(s.p,{children:"Tellor is an immutable decentralized oracle protocol where parties can request the value of an off-chain data point (e.g. ETH/USD) and reporters compete to add this value to an on-chain data-bank.\nThe inputs to this data-bank are secured by a network of staked reporters."}),"\n",(0,t.jsx)(s.p,{children:"Tellor utilizes crypto-economic incentive mechanisms, rewarding honest data submissions by reporters and punishing bad actors through the issuance of Tellor\u2019s token, Tributes (TRB) and a dispute mechanism."}),"\n",(0,t.jsx)(s.p,{children:"This incentivizes an open, permissionless network of data reporting and data validation, ensuring that data can be provided by anyone and checked by everyone."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://docs.tellor.io/tellor/the-basics/contracts-reference#lisk",children:"List of current token & oracle contracts available in the Tellor Documentation"})}),"\n",(0,t.jsx)(s.h4,{id:"supported-networks-1",children:"Supported Networks"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Lisk"}),"\n",(0,t.jsx)(s.li,{children:"Lisk Sepolia"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"guides-1",children:"Guides"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/lisk-documentation/building-on-lisk/use-oracle-data/tellor",children:"Accessing oracle data with Tellor"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var t=n(7294);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);