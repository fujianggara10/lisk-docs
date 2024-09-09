"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[1817],{2386:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=i(5893),o=i(1151);const t={title:"Running a Lisk Node",slug:"/building-on-lisk/run-a-lisk-node",description:"A tutorial that teaches how to set up and run a Lisk Node.",keywords:["Lisk Node setup","running a node","Lisk node","run a Lisk node","hardware requirements","node synchronization","node snapshots","Lisk chain","Lisk blockchain","Lisk network","node deployment","Ethereum node"],tags:["nodes"],difficulty:"beginner"},r=void 0,d={id:"building-on-lisk/run-a-lisk-node",title:"Running a Lisk Node",description:"A tutorial that teaches how to set up and run a Lisk Node.",source:"@site/docs/building-on-lisk/run-a-lisk-node.md",sourceDirName:"building-on-lisk",slug:"/building-on-lisk/run-a-lisk-node",permalink:"/lisk-documentation/building-on-lisk/run-a-lisk-node",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/run-a-lisk-node.md",tags:[{inline:!0,label:"nodes",permalink:"/lisk-documentation/tags/nodes"}],version:"current",frontMatter:{title:"Running a Lisk Node",slug:"/building-on-lisk/run-a-lisk-node",description:"A tutorial that teaches how to set up and run a Lisk Node.",keywords:["Lisk Node setup","running a node","Lisk node","run a Lisk node","hardware requirements","node synchronization","node snapshots","Lisk chain","Lisk blockchain","Lisk network","node deployment","Ethereum node"],tags:["nodes"],difficulty:"beginner"},sidebar:"documentationSidebar",previous:{title:"Bridged Token Addresses",permalink:"/lisk-documentation/bridged-tokens"},next:{title:"... with Foundry",permalink:"/lisk-documentation/building-on-lisk/deploying-smart-contract/with-Foundry"}},l={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"Memory",id:"memory",level:3},{value:"Storage",id:"storage",level:3},{value:"Usage",id:"usage",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Docker",id:"docker",level:3},{value:"Syncing",id:"syncing",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This tutorial will walk you through setting up your own ",(0,s.jsx)(n.a,{href:"https://github.com/LiskHQ/lisk-node",children:"Lisk Node"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,s.jsx)(n.p,{children:"By the end of this tutorial you should be able to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deploy and sync a Lisk node"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"Running a node is time consuming, resource expensive, and potentially costly. If you don't already know why you want to run your own node, you probably don't need to."}),(0,s.jsx)(n.p,{children:"If you're just getting started and need an RPC URL, you can use our free endpoints:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mainnet"}),": ",(0,s.jsx)(n.code,{children:"https://rpc.api.lisk.com"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Testnet (Sepolia)"}),": ",(0,s.jsx)(n.code,{children:"https://rpc.sepolia-api.lisk.com"})]}),"\n"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Our RPCs are rate-limited, they are not suitable for production apps."]}),(0,s.jsxs)(n.p,{children:["If you're looking to harden your app and avoid rate-limiting for your users, please check out one of our ",(0,s.jsx)(n.a,{href:"/lisk-tools/api-providers",children:"partners"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"system-requirements",children:"System requirements"}),"\n",(0,s.jsx)(n.p,{children:"The following system requirements are recommended to run a Lisk L2 node."}),"\n",(0,s.jsx)(n.h3,{id:"memory",children:"Memory"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Modern multi-core CPU with good single-core performance."}),"\n",(0,s.jsx)(n.li,{children:"Machines with a minimum of 16 GB RAM (32 GB recommended)."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Machines with a high performance SSD drive with at least 750GB (full node) or 4.5TB (archive node) free."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["It is currently not possible to run the nodes with the ",(0,s.jsx)(n.code,{children:"--op-network"})," flag until the configs for Lisk have been merged into the ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum-optimism/superchain-registry",children:"superchain-registry"}),"."]}),(0,s.jsxs)(n.p,{children:["There is currently an ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum-optimism/superchain-registry/pull/234",children:"open PR"})," to add the Lisk Mainnet config.\nThe Lisk Sepolia Testnet will be supported soon as well."]})]}),"\n",(0,s.jsx)(n.h3,{id:"clone-the-repository",children:"Clone the Repository"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/LiskHQ/lisk-node.git\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cd lisk-node\n"})}),"\n",(0,s.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ensure you have an Ethereum L1 full node RPC available (not Lisk), and set the ",(0,s.jsx)(n.code,{children:"OP_NODE_L1_ETH_RPC"})," and the ",(0,s.jsx)(n.code,{children:"OP_NODE_L1_BEACON"})," variables (within the ",(0,s.jsx)(n.code,{children:".env.*"})," files, if using docker-compose).\nIf running your own L1 node, it needs to be synced before the Lisk node will be able to fully sync."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Please ensure that the environment file relevant to your network (",(0,s.jsx)(n.code,{children:".env.sepolia"}),", or ",(0,s.jsx)(n.code,{children:".env.mainnet"}),") is set for the ",(0,s.jsx)(n.code,{children:"env_file"})," properties within ",(0,s.jsx)(n.code,{children:"docker-compose.yml"}),".\nBy default, it is set to ",(0,s.jsx)(n.code,{children:".env.mainnet"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["We currently support running either the ",(0,s.jsx)(n.code,{children:"op-geth"})," or the ",(0,s.jsx)(n.code,{children:"op-reth"})," nodes alongside the ",(0,s.jsx)(n.code,{children:"op-node"}),". By default, we run the ",(0,s.jsx)(n.code,{children:"op-geth"})," node. If you would like to run the ",(0,s.jsx)(n.code,{children:"op-reth"})," node instead, please set the ",(0,s.jsx)(n.code,{children:"CLIENT"})," environment variable to ",(0,s.jsx)(n.code,{children:"reth"})," before starting the node."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker compose up --build --detach\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You should now be able to ",(0,s.jsx)(n.code,{children:"curl"})," your Lisk node:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -s -d \'{"id":0,"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest",false]}\' \\\n  -H "Content-Type: application/json" http://localhost:8545\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"syncing",children:"Syncing"}),"\n",(0,s.jsxs)(n.p,{children:["Sync speed depends on your L1 node, as the majority of the chain is derived from data submitted to the L1.\nYou can check your syncing status using the ",(0,s.jsx)(n.code,{children:"optimism_syncStatus"})," RPC on the ",(0,s.jsx)(n.code,{children:"op-node"})," container.\nExample:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'command -v jq  &> /dev/null || { echo "jq is not installed" 1>&2 ; }\necho Latest synced block behind by: \\\n$((($( date +%s )-\\\n$( curl -s -d \'{"id":0,"jsonrpc":"2.0","method":"optimism_syncStatus"}\' -H "Content-Type: application/json" http://localhost:7545 |\n   jq -r .result.unsafe_l2.timestamp))/60)) minutes\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>r});var s=i(7294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);