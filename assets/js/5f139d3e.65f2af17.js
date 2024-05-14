"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[672],{8473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var o=n(5893),a=n(1151),r=n(4866),i=n(5162);const s={title:"Deploying a standard token",slug:"/building-on-lisk/add-token-to-lisk/standard-token",description:"Learn how to add your standard ERC-20 token to Lisk using the standard bridge.",keywords:["ERC-20 contract","Standard token","Lisk Testnet","Sepolia","Ethereum","Lisk Sepolia","Optimism Superchain token list"]},l="Deploying your Standard ERC-20 token to Lisk",d={id:"building-on-lisk/add-token-to-lisk/standard-token",title:"Deploying a standard token",description:"Learn how to add your standard ERC-20 token to Lisk using the standard bridge.",source:"@site/docs/building-on-lisk/add-token-to-lisk/standard-token.md",sourceDirName:"building-on-lisk/add-token-to-lisk",slug:"/building-on-lisk/add-token-to-lisk/standard-token",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk/standard-token",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/add-token-to-lisk/standard-token.md",tags:[],version:"current",frontMatter:{title:"Deploying a standard token",slug:"/building-on-lisk/add-token-to-lisk/standard-token",description:"Learn how to add your standard ERC-20 token to Lisk using the standard bridge.",keywords:["ERC-20 contract","Standard token","Lisk Testnet","Sepolia","Ethereum","Lisk Sepolia","Optimism Superchain token list"]},sidebar:"documentationSidebar",previous:{title:"Deploying an ERC-20 Token to Lisk",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk"},next:{title:"Deploying a custom token",permalink:"/lisk-documentation/building-on-lisk/add-token-to-lisk/custom-token"}},c={},u=[{value:"Dependencies",id:"dependencies",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get ETH on Sepolia and Lisk Sepolia",id:"get-eth-on-sepolia-and-lisk-sepolia",level:3},{value:"Get an L1 ERC-20 Token Address",id:"get-an-l1-erc-20-token-address",level:3},{value:"Create an L2 ERC-20 token",id:"create-an-l2-erc-20-token",level:2},{value:"1. Add a private key to your environment",id:"1-add-a-private-key-to-your-environment",level:3},{value:"2. Add the Lisk RPC URL to your environment",id:"2-add-the-lisk-rpc-url-to-your-environment",level:3},{value:"3. Add your L1 ERC-20 token address to your environment",id:"3-add-your-l1-erc-20-token-address-to-your-environment",level:3},{value:"4. Deploy your L2 ERC-20 token",id:"4-deploy-your-l2-erc-20-token",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"deploying-your-standard-erc-20-token-to-lisk",children:"Deploying your Standard ERC-20 token to Lisk"}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, you'll learn how to bridge a standard ERC-20 token from Ethereum to Lisk using the ",(0,o.jsx)(t.a,{href:"https://docs.optimism.io/builders/dapp-developers/bridging/standard-bridge",children:"Standard Bridge system"}),".\nThis tutorial is meant for developers who already have an existing ERC-20 token on Ethereum and want to create a bridged representation of that token on Lisk."]}),"\n",(0,o.jsxs)(t.p,{children:["This tutorial explains how to use the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/186e46a47647a51a658e699e9ff047d39444c2de/packages/contracts-bedrock/contracts/universal/OptimismMintableERC20Factory.sol",children:(0,o.jsx)(t.code,{children:"OptimismMintableERC20Factory"})})," to deploy a standardized ERC-20 token on Lisk or Lisk Sepolia network.\nTokens created by this factory contract are compatible with the Standard Bridge system and include basic logic for deposits, transfers, and withdrawals.\nIf you want to include specialized logic within your L2 token, see the tutorial on ",(0,o.jsx)(t.a,{href:"./custom-token",children:"Bridging Your Custom ERC-20 Token to Lisk"})," instead."]}),"\n",(0,o.jsx)(t.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://book.getfoundry.sh/getting-started/installation",children:"cast"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.admonition,{type:"note",children:[(0,o.jsxs)(t.p,{children:["You can deploy your ",(0,o.jsx)(t.strong,{children:"Standard ERC-20"})," token on Lisk Mainnet by adopting the same process.\nFor deploying to mainnet, ensure that your wallet has enough ETH."]}),(0,o.jsxs)(t.p,{children:["The subsequent text contains commands for both Lisk and Lisk Sepolia for your ease.\nFor more information, see the ",(0,o.jsx)(t.a,{href:"/network-info",children:"available Lisk networks"})," and ",(0,o.jsx)(t.a,{href:"/connecting-to-a-wallet",children:"how to connect a wallet with them"}),"."]})]}),"\n",(0,o.jsx)(t.h3,{id:"get-eth-on-sepolia-and-lisk-sepolia",children:"Get ETH on Sepolia and Lisk Sepolia"}),"\n",(0,o.jsx)(t.p,{children:"This tutorial explains how to create a bridged ERC-20 token on Lisk Sepolia.\nYou will need to get some ETH on both of these testnets."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["You can use ",(0,o.jsx)(t.a,{href:"https://sepoliafaucet.com/",children:"ETH Sepolia Faucet"})," to get ETH on Sepolia.\nYou can use the ",(0,o.jsx)(t.a,{href:"https://app.optimism.io/faucet?utm_source=docs",children:"Superchain Faucet"})," to get ETH on Lisk Sepolia."]})}),"\n",(0,o.jsx)(t.h3,{id:"get-an-l1-erc-20-token-address",children:"Get an L1 ERC-20 Token Address"}),"\n",(0,o.jsxs)(t.p,{children:["You will need an L1 ERC-20 token for this tutorial.\nIf you already have an L1 ERC-20 token deployed on Ethereum Mainnet or Sepolia, you can skip this step.\nFor Sepolia, you can use the testing token located at ",(0,o.jsx)(t.a,{href:"https://sepolia.etherscan.io/address/0x5589BB8228C07c4e15558875fAf2B859f678d129",children:(0,o.jsx)(t.code,{children:"0x5589BB8228C07c4e15558875fAf2B859f678d129"})})," that includes a ",(0,o.jsx)(t.code,{children:"faucet()"})," function that can be used to mint tokens."]}),"\n",(0,o.jsx)(t.h2,{id:"create-an-l2-erc-20-token",children:"Create an L2 ERC-20 token"}),"\n",(0,o.jsxs)(t.p,{children:["Once you have an L1 ERC-20 token, you can use the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/186e46a47647a51a658e699e9ff047d39444c2de/packages/contracts-bedrock/contracts/universal/OptimismMintableERC20Factory.sol",children:(0,o.jsx)(t.code,{children:"OptimismMintableERC20Factory"})})," to create a corresponding L2 ERC-20 token on Lisk or Lisk Sepolia network.\nAll tokens created by the factory implement the ",(0,o.jsx)(t.code,{children:"IOptimismMintableERC20"})," interface and are compatible with the Standard Bridge system.\nTo create an L2 ERC-20 token, do the following:"]}),"\n",(0,o.jsx)(t.h3,{id:"1-add-a-private-key-to-your-environment",children:"1. Add a private key to your environment"}),"\n",(0,o.jsxs)(t.p,{children:["You'll need a private key in order to sign transactions.\nSet your private key as an environment variable with the ",(0,o.jsx)(t.code,{children:"export"})," command.\nMake sure this private key corresponds to an address that has ETH on Lisk or Lisk Sepolia network."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"export TUTORIAL_PRIVATE_KEY=0x...\n"})}),"\n",(0,o.jsx)(t.h3,{id:"2-add-the-lisk-rpc-url-to-your-environment",children:"2. Add the Lisk RPC URL to your environment"}),"\n",(0,o.jsxs)(t.p,{children:["You'll need an RPC URL in order to connect to Lisk or Lisk Sepolia network.\nSet your RPC URL as an environment variable with the ",(0,o.jsx)(t.code,{children:"export"})," command."]}),"\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(i.Z,{value:"mainnet",label:"Lisk",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"export TUTORIAL_RPC_URL=https://rpc.api.lisk.com\n"})})}),(0,o.jsx)(i.Z,{value:"testnet",label:"Lisk Sepolia",default:!0,children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"export TUTORIAL_RPC_URL=https://rpc.sepolia-api.lisk.com\n"})})})]}),"\n",(0,o.jsx)(t.h3,{id:"3-add-your-l1-erc-20-token-address-to-your-environment",children:"3. Add your L1 ERC-20 token address to your environment"}),"\n",(0,o.jsxs)(t.p,{children:["You'll need to know the address of your L1 ERC-20 token in order to create a bridged representation of it on Lisk or Lisk Sepolia network.\nSet your L1 ERC-20 token address as an environment variable with the ",(0,o.jsx)(t.code,{children:"export"})," command."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# Replace this with your L1 ERC-20 token if not using the testing token!\nexport TUTORIAL_L1_ERC20_ADDRESS=0x5589BB8228C07c4e15558875fAf2B859f678d129\n"})}),"\n",(0,o.jsx)(t.h3,{id:"4-deploy-your-l2-erc-20-token",children:"4. Deploy your L2 ERC-20 token"}),"\n",(0,o.jsxs)(t.p,{children:["You can now deploy your L2 ERC-20 token using the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum-optimism/optimism/blob/186e46a47647a51a658e699e9ff047d39444c2de/packages/contracts-bedrock/contracts/universal/OptimismMintableERC20Factory.sol",children:(0,o.jsx)(t.code,{children:"OptimismMintableERC20Factory"})}),".\nUse the ",(0,o.jsx)(t.code,{children:"cast"}),' command to trigger the deployment function on the factory contract.\nThis example command creates a token with the name "My Standard Demo Token" and the symbol "L2TKN".\nThe resulting L2 ERC-20 token address is printed to the console.']}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'cast send 0x4200000000000000000000000000000000000012 "createOptimismMintableERC20(address,string,string)" $TUTORIAL_L1_ERC20_ADDRESS "My Standard Demo Token" "L2TKN" --private-key $TUTORIAL_PRIVATE_KEY --rpc-url $TUTORIAL_RPC_URL --json | jq -r \'.logs[0].topics[2]\' | cast parse-bytes32-address\n'})}),"\n",(0,o.jsx)(t.p,{children:"If all goes well, it will respond with the address of the newly deployed contract:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"0x891C582b83F69B7c2d3107cd73A3e491CB33962F\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"note",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["Using factories is ",(0,o.jsx)(t.strong,{children:"not"})," recommended for production"]}),(0,o.jsx)(t.p,{children:"Factories make it easy to deploy contracts out of the box.\nThe downside of this is, that you do not have control over the source code of the contract that is going to be deployed, as this is performed by the factory."}),(0,o.jsx)(t.p,{children:"Furthermore, it is not so straightforward to verify those contracts on Blockscout, as the source code of the contract is required for the verification."})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var o=n(512);const a={tabItem:"tabItem_Ymn6"};var r=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var o=n(7294),a=n(512),r=n(2466),i=n(6550),s=n(469),l=n(1980),d=n(7392),c=n(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[d,u]=m({queryString:n,groupId:a}),[k,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=d??k;return p({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(5893);function g(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==o&&(d(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,a.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=k(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var o=n(7294);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);