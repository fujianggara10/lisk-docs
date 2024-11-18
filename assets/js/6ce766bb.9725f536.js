"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[2184],{42:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=t(5893),r=t(1151);const n={title:"API Providers",slug:"/lisk-tools/api-providers",description:"Documentation for Node Providers for the Lisk network. Including details on their services, supported networks, and pricing plans.",keywords:["Node Providers","Lisk","Lisk network","Lisk node","hosted nodes","archival nodes","RPC","RPC node","RPC URL","RPC endpoints","blockchain services","blockchain infrastructure","developer tools","API","Web3 infrastructure","dRPC","Sepolia"]},o="API Providers",l={id:"lisk-tools/api-providers",title:"API Providers",description:"Documentation for Node Providers for the Lisk network. Including details on their services, supported networks, and pricing plans.",source:"@site/docs/lisk-tools/api-providers.md",sourceDirName:"lisk-tools",slug:"/lisk-tools/api-providers",permalink:"/lisk-documentation/lisk-tools/api-providers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"API Providers",slug:"/lisk-tools/api-providers",description:"Documentation for Node Providers for the Lisk network. Including details on their services, supported networks, and pricing plans.",keywords:["Node Providers","Lisk","Lisk network","Lisk node","hosted nodes","archival nodes","RPC","RPC node","RPC URL","RPC endpoints","blockchain services","blockchain infrastructure","developer tools","API","Web3 infrastructure","dRPC","Sepolia"]},sidebar:"documentationSidebar",previous:{title:"...with Tellor",permalink:"/lisk-documentation/building-on-lisk/use-oracle-data/tellor"},next:{title:"Faucets",permalink:"/lisk-documentation/lisk-tools/faucets"}},d={},c=[{value:"API reference",id:"api-reference",level:2},{value:"Lisk RPC",id:"lisk-rpc",level:2},{value:"dRPC",id:"drpc",level:2},{value:"Moralis",id:"moralis",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"api-providers",children:"API Providers"})}),"\n",(0,i.jsx)(s.p,{children:"Lisk nodes expose an RPC API that allows other parties to interact with the blockchain by invoking requests."}),"\n",(0,i.jsxs)(s.p,{children:["If you're just getting started and need an RPC URL, you can use our ",(0,i.jsx)(s.a,{href:"#lisk-rpc",children:"free endpoints"}),".\nIf you're looking to strengthen your app and avoid rate-limiting for your users, please check out our available RPC node providers like ",(0,i.jsx)(s.a,{href:"#drpc",children:"dRPC"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"api-reference",children:"API reference"}),"\n",(0,i.jsxs)(s.p,{children:["The available endpoints for Lisk nodes include all ",(0,i.jsx)(s.a,{href:"https://geth.ethereum.org/docs/interacting-with-geth/rpc",children:"Geth RPC endpoints"}),", which also include all standard ",(0,i.jsx)(s.a,{href:"https://ethereum.github.io/execution-apis/api-documentation/",children:"JSON-RPC API endpoints"})," of Ethereum."]}),"\n",(0,i.jsx)(s.h2,{id:"lisk-rpc",children:"Lisk RPC"}),"\n",(0,i.jsx)(s.p,{children:"Free, rate limited RPC endpoints for the Lisk networks."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"}}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Lisk Sepolia Testnet"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Lisk"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.strong,{children:"HTTP RPC"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://rpc.sepolia-api.lisk.com",children:"https://rpc.sepolia-api.lisk.com"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://rpc.api.lisk.com",children:"https://rpc.api.lisk.com"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.strong,{children:"WS RPC"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"wss://ws.sepolia-api.lisk.com"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"wss://ws.api.lisk.com"})})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"drpc",children:"dRPC"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://drpc.org/",children:"dRPC"})," is a decentralized Web3 infrastructure provider with a focus on resilience and latency.\ndRPC offers access to a distributed network of public nodes for Lisk.\nThey provide a free tier that allows for an unlimited amount of requests over public nodes, or a paid tier that provides access to all providers, as well as other additional features."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"}}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Lisk Sepolia Testnet"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Lisk"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.strong,{children:"HTTP RPC"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://lisk-sepolia.drpc.org",children:"https://lisk-sepolia.drpc.org"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"https://lisk.drpc.org",children:"https://lisk.drpc.org"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.strong,{children:"WS RPC"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"wss://lisk-sepolia.drpc.org"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"wss://lisk.drpc.org"})})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:["You can also check the available endpoints for Lisk directly under ",(0,i.jsx)(s.a,{href:"https://drpc.org/public-endpoints/lisk",children:"https://drpc.org/public-endpoints/lisk"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["dRPC also provides a ",(0,i.jsx)(s.a,{href:"/lisk-documentation/lisk-tools/faucets#drpc-faucet",children:"faucet for Lisk Sepolia"}),"."]}),"\n",(0,i.jsx)(s.admonition,{title:"How to create API keys for dRPC",type:"note",children:(0,i.jsxs)(s.p,{children:["In order to use the provided endpoints, you need to ",(0,i.jsx)(s.a,{href:"https://docs.drpc.org/gettingstarted/createaccount",children:"get the corresponding API keys"}),"."]})}),"\n",(0,i.jsx)(s.h2,{id:"moralis",children:"Moralis"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://developers.moralis.com/chains/lisk/",children:"Moralis"})," APIs elevate your dapps with unmatched speed, security, and scalability across EVM-compatible chains."]}),"\n",(0,i.jsx)(s.p,{children:"Moralis enforces rate limits at the account level to ensure fair usage across all users.\nEach account has a set number of allowed requests per minute, based on your plan."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://developers.moralis.com/chains/lisk/",children:"Get Free Lisk RPC Nodes using Moralis"})}),"\n",(0,i.jsx)(s.p,{children:"The free plan for Moralis includes:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"40K Compute Units per day"}),"\n",(0,i.jsx)(s.li,{children:"Access to RPC nodes"}),"\n",(0,i.jsx)(s.li,{children:"Access to all Moralis APIs"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"To use the Moralis RPC Nodes, follow these steps:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Create a Moralis account:"})," ",(0,i.jsx)(s.a,{href:"https://admin.moralis.com/",children:"Sign up"})," for free and access your RPC nodes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Set up your node:"})," Visit the ",(0,i.jsx)(s.a,{href:"https://docs.moralis.com/get-your-node-api-key",children:"Setting Up RPC Nodes"})," guide to create and configure your RPC node."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Make your first RPC call:"})," Once you have your node set up, follow the ",(0,i.jsx)(s.a,{href:"https://docs.moralis.com/make-your-first-rpc-call",children:"tutorial"})," to make your first JSON-RPC call using ethers.js."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>o});var i=t(7294);const r={},n=i.createContext(r);function o(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);