"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[455],{3478:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=i(5893),s=i(1151),r=i(4866),o=i(5162);const l={title:"Bridges",slug:"/lisk-tools/bridges",description:"Documentation for bridging assets to Lisk. This page covers how to bridge ETH and ERC-20s between Ethereum Sepolia and Lisk Sepoklia, with essential cautions and contract information.",keywords:["Lisk","Lisk network","bridging","bridge to Lisk","bridge ETH","bridge ETH to Lisk","Lisk Bridge","Ethereum Testnet","Lisk Testnet","ETH","ERC-20 tokens","asset bridging"]},a="Bridges",d={id:"lisk-tools/bridges",title:"Bridges",description:"Documentation for bridging assets to Lisk. This page covers how to bridge ETH and ERC-20s between Ethereum Sepolia and Lisk Sepoklia, with essential cautions and contract information.",source:"@site/docs/lisk-tools/bridges.mdx",sourceDirName:"lisk-tools",slug:"/lisk-tools/bridges",permalink:"/lisk-tools/bridges",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/lisk-tools/bridges.mdx",tags:[],version:"current",frontMatter:{title:"Bridges",slug:"/lisk-tools/bridges",description:"Documentation for bridging assets to Lisk. This page covers how to bridge ETH and ERC-20s between Ethereum Sepolia and Lisk Sepoklia, with essential cautions and contract information.",keywords:["Lisk","Lisk network","bridging","bridge to Lisk","bridge ETH","bridge ETH to Lisk","Lisk Bridge","Ethereum Testnet","Lisk Testnet","ETH","ERC-20 tokens","asset bridging"]},sidebar:"documentationSidebar",previous:{title:"API Providers",permalink:"/lisk-tools/api-providers"},next:{title:"Oracles",permalink:"/lisk-tools/oracles"}},c={},u=[{value:"Depositing funds",id:"depositing-funds",level:2},{value:"Withdrawing funds",id:"withdrawing-funds",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"bridges",children:"Bridges"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://bridge.lisk.com",children:"Lisk"})," and ",(0,n.jsx)(t.a,{href:"https://sepolia-bridge.lisk.com",children:"Lisk Sepolia"})," bridge allows you to bridge Real or Testnet ETH from Ethereum to Lisk and vice versa."]}),"\n",(0,n.jsx)(t.h2,{id:"depositing-funds",children:"Depositing funds"}),"\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsxs)(o.Z,{value:"mainnet",label:"Lisk",default:!0,children:[(0,n.jsx)(t.p,{children:"How to deposit funds from Ethereum to Lisk:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Visit the ",(0,n.jsx)(t.a,{href:"https://bridge.lisk.com",children:"Lisk Bridge"})," and make sure you are on the ",(0,n.jsx)(t.code,{children:"Deposit"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:["Connect your wallet by clicking ",(0,n.jsx)(t.code,{children:"Connect Wallet"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Switch your network to Ethereum in your wallet."}),"\n",(0,n.jsx)(t.li,{children:"Choose the amount of ETH you'd like to deposit."}),"\n",(0,n.jsxs)(t.li,{children:["Press ",(0,n.jsx)(t.code,{children:"Bridge funds"})," and wait for the transaction to go through."]}),"\n"]})]}),(0,n.jsxs)(o.Z,{value:"testnet",label:"Lisk Sepolia",children:[(0,n.jsx)(t.p,{children:"How to deposit funds from Sepolia to Lisk Sepolia:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Visit the ",(0,n.jsx)(t.a,{href:"https://sepolia-bridge.lisk.com",children:"Lisk Bridge"})," and make sure you are on the ",(0,n.jsx)(t.code,{children:"Deposit"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:["Connect your wallet by clicking ",(0,n.jsx)(t.code,{children:"Connect Wallet"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Switch your network to Sepolia in your wallet."}),"\n",(0,n.jsx)(t.li,{children:"Choose the amount of ETH you'd like to deposit."}),"\n",(0,n.jsxs)(t.li,{children:["Press ",(0,n.jsx)(t.code,{children:"Bridge funds"})," and wait for the transaction to go through."]}),"\n"]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"withdrawing-funds",children:"Withdrawing funds"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["After initiating your withdrawal, a 7-day ",(0,n.jsx)(t.a,{href:"https://docs.optimism.io/builders/dapp-developers/bridging/messaging#for-l2-to-l1-transactions",children:"challenge period"})," needs to be observed as a security measure. Once the challenge period has passed the withdrawal can be completed with a final transaction."]})}),"\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsxs)(o.Z,{value:"mainnet",label:"Lisk",default:!0,children:[(0,n.jsx)(t.p,{children:"How to withdraw funds from Lisk to Ethereum:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Visit the ",(0,n.jsx)(t.a,{href:"https://bridge.lisk.com",children:"Lisk Bridge"})," and switch to the ",(0,n.jsx)(t.code,{children:"Withdraw"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:["Connect your wallet by clicking ",(0,n.jsx)(t.code,{children:"Connect Wallet"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Switch your network to Lisk in your wallet."}),"\n",(0,n.jsx)(t.li,{children:"Choose the amount of ETH you'd like to withdraw."}),"\n",(0,n.jsxs)(t.li,{children:["Press ",(0,n.jsx)(t.code,{children:"Bridge funds"})," and wait for the transaction to go through."]}),"\n",(0,n.jsx)(t.li,{children:"Wait until the challenge period passes to claim the funds and complete the withdrawal."}),"\n"]}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Check the status of your mainnet withdrawals in your ",(0,n.jsx)(t.a,{href:"https://bridge.lisk.com/history?slug=lisk",children:"Withdrawals history"}),"."]})})]}),(0,n.jsxs)(o.Z,{value:"testnet",label:"Lisk Sepolia",children:[(0,n.jsx)(t.p,{children:"How to withdraw funds from Lisk Sepolia to Sepolia:"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Visit the ",(0,n.jsx)(t.a,{href:"https://sepolia-bridge.lisk.com",children:"Lisk Bridge"})," and switch to the ",(0,n.jsx)(t.code,{children:"Withdraw"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:["Connect your wallet by clicking ",(0,n.jsx)(t.code,{children:"Connect Wallet"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Switch your network to Lisk Sepolia in your wallet."}),"\n",(0,n.jsx)(t.li,{children:"Choose the amount of ETH you'd like to withdraw."}),"\n",(0,n.jsxs)(t.li,{children:["Press ",(0,n.jsx)(t.code,{children:"Bridge funds"})," and wait for the transaction to go through."]}),"\n",(0,n.jsx)(t.li,{children:"Wait until the challenge period passes to claim the funds and complete the withdrawal."}),"\n"]}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Check the status of your testnet withdrawals in your ",(0,n.jsx)(t.a,{href:"https://sepolia-bridge.lisk.com/history?slug=lisk-sepolia-testnet",children:"Withdrawals history"}),"."]})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,i)=>{i.d(t,{Z:()=>o});i(7294);var n=i(512);const s={tabItem:"tabItem_Ymn6"};var r=i(5893);function o(e){let{children:t,hidden:i,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:i,children:t})}},4866:(e,t,i)=>{i.d(t,{Z:()=>y});var n=i(7294),s=i(512),r=i(2466),o=i(6550),l=i(469),a=i(1980),d=i(7392),c=i(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:s}}=e;return{value:t,label:i,attributes:n,default:s}}))}(i);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function p(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:i}=e;const s=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,a._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function g(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,r=h(e),[o,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[d,u]=f({queryString:i,groupId:s}),[g,b]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,c.Nk)(i);return[s,(0,n.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:s}),m=(()=>{const e=d??g;return p({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=i(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=i(5893);function w(e){let{className:t,block:i,selectedValue:n,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const t=e.currentTarget,i=a.indexOf(t),s=l[i].value;s!==n&&(d(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=a.indexOf(e.currentTarget)+1;t=a[i]??a[0];break}case"ArrowLeft":{const i=a.indexOf(e.currentTarget)-1;t=a[i]??a[a.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},t),children:l.map((e=>{let{value:t,label:i,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:u,onClick:c,...r,className:(0,s.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function x(e){let{lazy:t,children:i,selectedValue:s}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=g(e);return(0,k.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,k.jsx)(w,{...e,...t}),(0,k.jsx)(x,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,k.jsx)(j,{...e,children:u(e.children)},String(t))}},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>o});var n=i(7294);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);