"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[55],{8719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(5893),o=t(1151),r=t(4866),s=t(5162);const a={title:"Governance",sidebar_position:1,slug:"/governance",description:"Documentation about the governance of the Lisk project.",keywords:["Lisk governance","Lisk DAO","Lisk Grants","Funding","Delegation","Voting","Proposals"]},l="Governance",c={id:"about-lisk/governance",title:"Governance",description:"Documentation about the governance of the Lisk project.",source:"@site/docs/about-lisk/governance.mdx",sourceDirName:"about-lisk",slug:"/governance",permalink:"/lisk-documentation/governance",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/about-lisk/governance.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Governance",sidebar_position:1,slug:"/governance",description:"Documentation about the governance of the Lisk project.",keywords:["Lisk governance","Lisk DAO","Lisk Grants","Funding","Delegation","Voting","Proposals"]},sidebar:"documentationSidebar",previous:{title:"Network information, official explorers & faucets",permalink:"/lisk-documentation/network-info"},next:{title:"Fees",permalink:"/lisk-documentation/fees"}},d={},h=[{value:"Lisk DAO",id:"lisk-dao",level:2},{value:"Tools",id:"tools",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Voting power",id:"voting-power",level:3},{value:"Voting power calculation",id:"voting-power-calculation",level:4},{value:"Boosting the voting power",id:"boosting-the-voting-power",level:5},{value:"Delegation",id:"delegation",level:3},{value:"Benefits of being a delegate",id:"benefits-of-being-a-delegate",level:4},{value:"Proposals",id:"proposals",level:3},{value:"Proposal types",id:"proposal-types",level:4},{value:"Proposal evaluation",id:"proposal-evaluation",level:4},{value:"Implementation of funding proposals",id:"implementation-of-funding-proposals",level:4},{value:"Implementation of general proposals",id:"implementation-of-general-proposals",level:4},{value:"Administrative role of the Onchain Foundation",id:"administrative-role-of-the-onchain-foundation",level:3},{value:"Staking rewards",id:"staking-rewards",level:3},{value:"Staking rewards distribution",id:"staking-rewards-distribution",level:4},{value:"Governance Goals",id:"governance-goals",level:2},{value:"Capture resistance",id:"capture-resistance",level:3},{value:"Resource allocation",id:"resource-allocation",level:3},{value:"Design Principles",id:"design-principles",level:2},{value:"Governance minimization",id:"governance-minimization",level:3},{value:"Iteration",id:"iteration",level:3},{value:"Forking",id:"forking",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"governance",children:"Governance"}),"\n",(0,i.jsxs)(n.p,{children:["At the moment, the security of the Lisk Mainnet is dependent on a ",(0,i.jsx)(n.a,{href:"https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/",children:"multisig wallet"})," managed by several individuals of the Onchain Foundation.\nThis multisig wallet can be used to upgrade core Lisk Mainnet smart contracts without upgrade delays."]}),"\n",(0,i.jsx)(n.p,{children:"To decentralize the governance of the Lisk project further, Lisk introduces a decentralized autonomous organization, the Lisk DAO, which allows Lisk token holders to participate together in the governance of the Lisk project."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Every LSK token holder who participates in the DAO is rewared with ",(0,i.jsx)(n.a,{href:"#staking-rewards",children:"staking rewards"}),", to incentivize participation in the Lisk governance."]})}),"\n",(0,i.jsx)(n.h2,{id:"lisk-dao",children:"Lisk DAO"}),"\n",(0,i.jsxs)(n.p,{children:["The Lisk DAO provides the opportunity for LSK token holders to participate in the overall governance of the Lisk project, including allocation of funds, protocol updates, or strategic directions. Decisions are made via ",(0,i.jsx)(n.a,{href:"#proposals",children:"proposals"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,i.jsx)(n.p,{children:"The following tools are available to participate in the Lisk DAO:"}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(s.Z,{value:"tally",label:"Tally",children:[(0,i.jsx)(n.p,{children:"Tally is the platform used to create and vote for proposals of the Lisk DAO."}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://www.tally.xyz/gov/3rd-testing",children:"Lisk DAO Tally instance"})," is the place where users can vote on proposals or delegate their voting power."]})]}),(0,i.jsx)(s.Z,{value:"forum",label:"Forum",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://forum.lisk.com/",children:"Lisk Governance Forum"})," is the place for the community to discuss the Lisk governance and draft proposals, before they are submitted on Tally."]})}),(0,i.jsx)(s.Z,{value:"discord",label:"Discord",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"#lisk-dao"})," channel in the ",(0,i.jsx)(n.a,{href:"https://lisk.chat",children:"Lisk Chat"})," Discord server is a community chat dedicated to discuss topics all around the Lisk DAO, share news and updates, or share ideas for new proposals."]})})]}),"\n",(0,i.jsx)(n.h3,{id:"treasury",children:"Treasury"}),"\n","\n",(0,i.jsxs)(n.p,{children:["The Lisk DAO has an associated treasury, which resides in the ",(0,i.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/address/0x4b727D3f74DD4c124Ced030335DebD5e7EBB8366",children:"TimelockController contract"}),".\nThe current balance of the treasury can be checked on the ",(0,i.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/address/0x4b727D3f74DD4c124Ced030335DebD5e7EBB8366",children:"Lisk BlockScout Explorer"}),".\nThe treasury is NOT managed by the Onchain Foundation.\nInstead, the funds from the treasury can only be transferred via successful ",(0,i.jsx)(n.a,{href:"#proposal-types",children:"funding proposals"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Tokens for the Lisk DAO fund are minted newly and added to the Lisk DAO according to the following vesting plan:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Year"}),(0,i.jsx)(n.th,{children:"Amount (LSK)"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2024"}),(0,i.jsx)(n.td,{children:"15,000,000"}),(0,i.jsx)(n.td,{children:"6,250,000 LSK liquid at migration, 8,750,000 LSK are linearly released in 2024, starting from the migration."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2025"}),(0,i.jsx)(n.td,{children:"15,000,000"}),(0,i.jsx)(n.td,{children:"LSK are linearly released over the year."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2026"}),(0,i.jsx)(n.td,{children:"15,000,000"}),(0,i.jsx)(n.td,{children:"LSK are linearly released over the year."})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The DAO fund may be increased further in the future by additional 100,000,000 LSK over the following 7 years, if the DAO members approve the corresponding proposals."})}),"\n",(0,i.jsx)(n.h3,{id:"voting-power",children:"Voting power"}),"\n",(0,i.jsxs)(n.p,{children:["To get some voting power, users must ",(0,i.jsx)(n.strong,{children:"stake/lock"})," some LSK tokens."]}),"\n",(0,i.jsx)(n.p,{children:"This works as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users can stake tokens for a specific locking duration (between 2 weeks and 2 years)."}),"\n",(0,i.jsxs)(n.li,{children:["Users receive voting power and ",(0,i.jsx)(n.a,{href:"#staking-rewards",children:"staking rewards"})," proportional to the amount of locked tokens."]}),"\n",(0,i.jsx)(n.li,{children:"After the locking duration ends, the users can redeem their tokens."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Staking happens on the ",(0,i.jsx)(n.a,{href:"https://portal.lisk.com/",children:"Lisk portal"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Initially, the voting power of a locked token will be constant during its locking duration.\nBut it is possible to ",(0,i.jsx)(n.a,{href:"#boosting-the-voting-power",children:"boost the voting power"})," by up to 200% where the boost is proportional to remaining locking duration."]}),"\n",(0,i.jsx)(n.h4,{id:"voting-power-calculation",children:"Voting power calculation"}),"\n",(0,i.jsx)(n.p,{children:"Locked tokens provide a voting power proportional to the amount of locked tokens. Concretely, 1 locked LSK provides one unit of voting power."}),"\n",(0,i.jsx)(n.h5,{id:"boosting-the-voting-power",children:"Boosting the voting power"}),"\n",(0,i.jsxs)(n.p,{children:["To enable voting power proportional to the promised locking duration, users have the option to pause the countdown of the locking period.\nThat means, the counting towards the end of the locking period is paused until the user decides to resume it.\nIn the case of pausing, the user receives a boost of the voting power. It is set to ",(0,i.jsx)(n.code,{children:"lockedAmount * (1 + remainingLockingDurationInDays/365)"}),".\nHence, the voting power can be increased by up to 200%."]}),"\n",(0,i.jsx)(n.h3,{id:"delegation",children:"Delegation"}),"\n",(0,i.jsxs)(n.p,{children:["The Governor framework requires to ",(0,i.jsx)(n.strong,{children:"delegate the voting power"})," in order to use it.\nThe voting power can be delegated to other users or to themselves, but self-delegation is a requirement if users want to vote themselves."]}),"\n",(0,i.jsxs)(n.p,{children:["Delegation happens on ",(0,i.jsx)(n.a,{href:"#tally",children:"Tally"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"benefits-of-being-a-delegate",children:"Benefits of being a delegate"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Impact"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Have influence on the direction of the Lisk project."}),"\n",(0,i.jsx)(n.li,{children:"Decide directly about fund allocation of the Lisk DAO treasury."}),"\n"]}),"\n","\n"]}),"\n"]}),"\n","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reputation"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gain reputation by being a delegate."}),"\n"]}),"\n"]}),"\n"]}),"\n","\n","\n",(0,i.jsx)(n.h3,{id:"proposals",children:"Proposals"}),"\n",(0,i.jsxs)(n.p,{children:["Proposals are created on ",(0,i.jsx)(n.a,{href:"#tally",children:"Tally"}),".\nFor spam protection, the following requirement must be fulfilled in order to create a proposal:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Proposal threshold"}),": For creating a proposal, the voting power of the proposer must be at least 300,000 vpLSK, i.e., the value corresponding to 100,000 LSK locked for 2 years where the countdown is paused."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"proposal-types",children:"Proposal types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Binding?"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Funding"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"A proposal for receiving a certain amount of funds to an address. If approved, the recipient receives the amount given in the proposal."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"General"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"General proposals about protocol parameters or the project direction in general that may be followed by the Onchain Foundation or not, depending also on feasibility and cost."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"No"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"proposal-evaluation",children:"Proposal evaluation"}),"\n",(0,i.jsx)(n.p,{children:"The following requirements must be fulfilled for a proposal to pass:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Quorum"}),": For a proposal to pass, the \u201cyes\u201d and \u201cabstain\u201d votes must sum up at least to 24,000,000 vpLSK, i.e., the value that corresponds to 8,000,000 LSK locked for 2 years where the countdown is paused."]}),"\n",(0,i.jsx)(n.li,{children:"There must be strictly more \u201cyes\u201d than \u201cno\u201d votes."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-funding-proposals",children:"Implementation of funding proposals"}),"\n",(0,i.jsxs)(n.p,{children:["The transfer from the ",(0,i.jsx)(n.a,{href:"#treasury",children:"Lisk DAO treasury"})," can be executed by anyone, once a funding proposal is approved.\nFunding proposals are ",(0,i.jsx)(n.strong,{children:"binding"}),", which means that no-one, not even the Onchain Foundation, can prevent the transfer, if the proposal passed."]}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-general-proposals",children:"Implementation of general proposals"}),"\n",(0,i.jsx)(n.p,{children:"For approved general proposals, the Onchain Foundation will determine whether the proposal is safe, secure, consistent with the scope of Lisk governance, and capable of being implemented in a legally compliant manner.\nIf it is, the Foundation will act diligently and in a commercially reasonable manner to cause the proposal to be implemented."}),"\n",(0,i.jsx)(n.h3,{id:"administrative-role-of-the-onchain-foundation",children:"Administrative role of the Onchain Foundation"}),"\n",(0,i.jsx)(n.p,{children:"The foundation will have an administrative role and will take care of the following"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Removal of draft proposals that reasonably appear to be fraudulent, spam-oriented, defamatory, hateful, or otherwise inappropriate."}),"\n",(0,i.jsx)(n.li,{children:"Management of mutually contradictory proposals that are submitted simultaneously or in close proximity to one another."}),"\n",(0,i.jsx)(n.li,{children:"Administration of network maintenance, such as emergency bug fixes or release rollbacks (with or without a governance vote)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"staking-rewards",children:"Staking rewards"}),"\n",(0,i.jsxs)(n.p,{children:["Staking rewards incentivize users to participate in governance, making the decision making more decentralized and community-driven.",(0,i.jsx)(n.br,{}),"\n","In short, users get rewards for locking/staking tokens for governance participation."]}),"\n",(0,i.jsxs)(n.p,{children:["We apply a ",(0,i.jsx)(n.strong,{children:"time-weight boosting"})," on rewards:\nThe further the end of the locking duration is in the future, the more rewards you get.\nThis also implies that the rewards decrease every day.\nThis way, we reward token holders for committing long-term to the Lisk project so we attract them as long-term advocates for Lisk while reducing short-term speculation and volatility."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users can modify their locking positions (increase amount, extend/pause locking duration) at any time they want."}),"\n",(0,i.jsx)(n.li,{children:"Users can claim their rewards at any time."}),"\n",(0,i.jsxs)(n.li,{children:["Users have the option to ",(0,i.jsx)(n.strong,{children:"pause"})," their locking period countdown.\nThat means, the remaining locking duration remains fixed until the user decides to resume it.\nNote that this results in ",(0,i.jsx)(n.strong,{children:"higher staking rewards"}),", since the weight remains fixed, as opposed to a weight daily decreasing when the countdown is active."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"staking-rewards-distribution",children:"Staking rewards distribution"}),"\n","\n",(0,i.jsxs)(n.p,{children:["Rewards are taken from the balance of the ",(0,i.jsx)(n.code,{children:"Staking"})," constract and calculated on a daily basis, based on the amount locked and the remaining locking duration.\nConcretely, the weight for a locked amount is given by ",(0,i.jsx)(n.code,{children:"lockedAmount * (remainingLockingDurationInDays + 150)"}),".\nThe total daily amount of staking rewards, 8,000,000 / 365  LSK, is then shared by all users proportional to their weight."]}),"\n",(0,i.jsx)(n.p,{children:"We plan to use a total of 24 million LSK tokens over the course of 3 years for the LSK staking rewards program (8 million LSK per year).\nAfter the end of this 3 year span, we expect that developments in the Optimism Superchain Ecosystem (shared, decentralized sequencers)  would lead us to a new staking mechanism."}),"\n",(0,i.jsx)(n.p,{children:"However, even in case the current staking mechanism has to be continued, extra funding could be provided; potential sources are:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"the unclaimed LSK tokens (recall they would be moved to Lisk DAO treasury after the 2-years claim window)"}),"\n",(0,i.jsx)(n.li,{children:"the staking rewards of the Onchain Foundation, which would be provided to the ecosystem and"}),"\n",(0,i.jsx)(n.li,{children:"the profit of the Onchain Foundation from sequencing rewards."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"governance-goals",children:"Governance Goals"}),"\n",(0,i.jsx)(n.p,{children:"There are two primary goals of Lisks governance system:"}),"\n",(0,i.jsx)(n.h3,{id:"capture-resistance",children:"Capture resistance"}),"\n",(0,i.jsx)(n.p,{children:"Governance plays a key role in securing the anti-capture and censorship resistance of the Lisk protocol.\nGovernance should:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"make it possible for the chain or network operations to continue without reliance on any individual entity, and"}),"\n",(0,i.jsx)(n.li,{children:"prevent any one entity or small group of entities from being able to control or censor the protocol or its functions."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"resource-allocation",children:"Resource allocation"}),"\n",(0,i.jsx)(n.p,{children:"Governance\u2019s second primary responsibility is to allocate resources effectively to support the Lisks vision and accrue sustainable value to the Lisk DAO.\nVision & value may often be in conflict, and allocating resources effectively involves a blend of short- and long-term thinking."}),"\n",(0,i.jsx)(n.h2,{id:"design-principles",children:"Design Principles"}),"\n",(0,i.jsx)(n.p,{children:"Design decisions for Lisks governance system should be made in line with three key principles:"}),"\n",(0,i.jsx)(n.h3,{id:"governance-minimization",children:"Governance minimization"}),"\n",(0,i.jsx)(n.p,{children:"The set of governance responsibilities that are encoded onchain or formalized in voting processes should remain as minimal as possible.\nThe Lisk DAO aims to reduce governance to its essence and to avoid introducing regulation where freedom can achieve the same result.\nThis principle is key to encouraging permissionless innovation.\nIn practice, this looks like a minimal set of:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["onchain governance processes(",(0,i.jsx)(n.a,{href:"#implementation-of-funding-proposals",children:"binding"})," and non-binding) to upgrade Lisk contracts or allocate funds, and"]}),"\n",(0,i.jsx)(n.li,{children:"offchain social processes to maintain a healthy community."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"iteration",children:"Iteration"}),"\n",(0,i.jsx)(n.p,{children:"Lisk is decentralizing iteratively to increase the chances of building a healthy system that lasts for the long-term.\nThis means the Foundation will play a role in establishing processes, help the DAO through its first few rapid feedback loops in improving those processes, then reduce its role over time.\n(This also means the design principles and goals outlined in this document may be invalidated or updated along the way.)\nThis iteration gives the DAO a chance to learn how to make thoughtful decisions using an un-intuitive but essential loop: introduce a governance process that involves active participation, then gradually work to automate or minimize it over time.\nGovernance\u2019s responsibility then becomes to adjust the autopilot when necessary, not to keep two hands on the wheel."}),"\n",(0,i.jsx)(n.h3,{id:"forking",children:"Forking"}),"\n",(0,i.jsx)(n.p,{children:"The ability to fork and the ability to exit are critical to protect individual freedoms.\nAll of the core software and tooling required to run the Lisk network should be made open source, freely available, and easy to use such that a fork is always a viable alternative.\nThis isn\u2019t just about vibes: in crypto, where credible commitments not to extract are what makes decentralized platforms valuable, this is a competitive advantage.\nParticipants will be more likely to join Lisk if they have the ability to make an alternative."})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var i=t(512);const o={tabItem:"tabItem_Ymn6"};var r=t(5893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,s),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(7294),o=t(512),r=t(2466),s=t(6550),a=t(469),l=t(1980),c=t(7392),d=t(12);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=u(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,h]=g({queryString:t,groupId:o}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Nk)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),v=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function k(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==i&&(c(n),s(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,o.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(k,{...e,...n}),(0,x.jsx)(b,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,x.jsx)(j,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);