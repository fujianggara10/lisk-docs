"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[2184],{9030:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=s(5893),r=s(1151);const n={title:"API Providers",slug:"/lisk-tools/api-providers",description:"Documentation for Node Providers for the Lisk network. Including details on their services, supported networks, and pricing plans.",keywords:["Node Providers","Lisk","Lisk network","Lisk node","hosted nodes","archival nodes","RPC","RPC node","RPC URL","RPC endpoints","blockchain services","blockchain infrastructure","developer tools","API","Web3 infrastructure","dRPC","Sepolia"]},o="API Providers",l={id:"lisk-tools/api-providers",title:"API Providers",description:"Documentation for Node Providers for the Lisk network. Including details on their services, supported networks, and pricing plans.",source:"@site/docs/lisk-tools/api-providers.md",sourceDirName:"lisk-tools",slug:"/lisk-tools/api-providers",permalink:"/lisk-tools/api-providers",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/lisk-tools/api-providers.md",tags:[],version:"current",frontMatter:{title:"API Providers",slug:"/lisk-tools/api-providers",description:"Documentation for Node Providers for the Lisk network. Including details on their services, supported networks, and pricing plans.",keywords:["Node Providers","Lisk","Lisk network","Lisk node","hosted nodes","archival nodes","RPC","RPC node","RPC URL","RPC endpoints","blockchain services","blockchain infrastructure","developer tools","API","Web3 infrastructure","dRPC","Sepolia"]},sidebar:"documentationSidebar",previous:{title:"Lisk L1->L2 migration guide",permalink:"/building-on-lisk/migration-guide"},next:{title:"Bridges",permalink:"/lisk-tools/bridges"}},d={},c=[{value:"API reference",id:"api-reference",level:2},{value:"Lisk RPC",id:"lisk-rpc",level:2},{value:"dRPC",id:"drpc",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"api-providers",children:"API Providers"}),"\n",(0,i.jsx)(t.p,{children:"Lisk nodes expose an RPC API that allows other parties to interact with the blockchain by invoking requests."}),"\n",(0,i.jsxs)(t.p,{children:["If you're just getting started and need an RPC URL, you can use our ",(0,i.jsx)(t.a,{href:"#lisk-rpc",children:"free endpoints"}),".\nIf you're looking to strengthen your app and avoid rate-limiting for your users, please check out our available RPC node providers like ",(0,i.jsx)(t.a,{href:"#drpc",children:"dRPC"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"api-reference",children:"API reference"}),"\n",(0,i.jsxs)(t.p,{children:["The available endpoints for Lisk nodes include all ",(0,i.jsx)(t.a,{href:"https://geth.ethereum.org/docs/interacting-with-geth/rpc",children:"Geth RPC endpoints"}),", which also include all standard ",(0,i.jsx)(t.a,{href:"https://ethereum.github.io/execution-apis/api-documentation/",children:"JSON-RPC API endpoints"})," of Ethereum."]}),"\n",(0,i.jsx)(t.h2,{id:"lisk-rpc",children:"Lisk RPC"}),"\n",(0,i.jsx)(t.p,{children:"Free, rate limited RPC endpoints for the Lisk networks."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"}}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Lisk Sepolia Testnet"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Lisk"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"HTTP RPC"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://rpc.sepolia-api.lisk.com",children:"https://rpc.sepolia-api.lisk.com"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://rpc.api.lisk.com",children:"https://rpc.api.lisk.com"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"WS RPC"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"wss://ws.sepolia-api.lisk.com"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"wss://ws.api.lisk.com"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"drpc",children:"dRPC"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://drpc.org/",children:"dRPC"})," is a decentralized Web3 infrastructure provider with a focus on resilience and latency.\ndRPC offers access to a distributed network of public nodes for Lisk.\nThey provide a free tier that allows for an unlimited amount of requests over public nodes, or a paid tier that provides access to all providers, as well as other additional features."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"}}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Lisk Sepolia Testnet"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Lisk"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"HTTP RPC"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://lisk-sepolia.drpc.org",children:"https://lisk-sepolia.drpc.org"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://lisk.drpc.org",children:"https://lisk.drpc.org"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"WS RPC"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"wss://lisk-sepolia.drpc.org"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"wss://lisk.drpc.org"})})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["You can also check the available endpoints for Lisk directly under ",(0,i.jsx)(t.a,{href:"https://drpc.org/public-endpoints/lisk",children:"https://drpc.org/public-endpoints/lisk"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"How to create API keys for dRPC",type:"note",children:(0,i.jsxs)(t.p,{children:["In order to use the provided endpoints, you need to ",(0,i.jsx)(t.a,{href:"https://docs.drpc.org/gettingstarted/createaccount",children:"get the corresponding API keys"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var i=s(7294);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);