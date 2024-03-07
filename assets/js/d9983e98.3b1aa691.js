"use strict";(self.webpackChunklisk_docs=self.webpackChunklisk_docs||[]).push([[375],{7956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(5893),i=t(1151);const o={title:"... with Foundry",slug:"/building-on-lisk/deploying-smart-contract/with-Foundry",description:"A guide on deploying a smart contract on the Lisk test network using Foundry. Includes instructions for setting up the environment, compiling, and deploying the smart contract.",keywords:["Foundry","smart contract","ERC-20","Lisk","Lisk test network","Lisk testnet","Lisk Sepolia","testing smart contract","Solidity","smart contract deployment","deploy a smart contract","deploying smart contracts","build on lisk","write smart contract","smart contract development"],toc_max_heading_level:4},r="Deploying a smart contract with Foundry",c={id:"building-on-lisk/deploying-smart-contract/with-Foundry",title:"... with Foundry",description:"A guide on deploying a smart contract on the Lisk test network using Foundry. Includes instructions for setting up the environment, compiling, and deploying the smart contract.",source:"@site/docs/building-on-lisk/deploying-smart-contract/with-Foundry.md",sourceDirName:"building-on-lisk/deploying-smart-contract",slug:"/building-on-lisk/deploying-smart-contract/with-Foundry",permalink:"/lisk-documentation/building-on-lisk/deploying-smart-contract/with-Foundry",draft:!1,unlisted:!1,editUrl:"https://github.com/LiskHQ/lisk-documentation/tree/main/docs/building-on-lisk/deploying-smart-contract/with-Foundry.md",tags:[],version:"current",frontMatter:{title:"... with Foundry",slug:"/building-on-lisk/deploying-smart-contract/with-Foundry",description:"A guide on deploying a smart contract on the Lisk test network using Foundry. Includes instructions for setting up the environment, compiling, and deploying the smart contract.",keywords:["Foundry","smart contract","ERC-20","Lisk","Lisk test network","Lisk testnet","Lisk Sepolia","testing smart contract","Solidity","smart contract deployment","deploy a smart contract","deploying smart contracts","build on lisk","write smart contract","smart contract development"],toc_max_heading_level:4},sidebar:"documentationSidebar",previous:{title:"Adding an ERC-20 Token to Lisk",permalink:"/lisk-documentation/add-token-to-lisk"},next:{title:"... with Hardhat",permalink:"/lisk-documentation/building-on-lisk/deploying-smart-contract/with-Hardhat"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Wallet funds",id:"wallet-funds",level:3},{value:"Creating a project",id:"creating-a-project",level:2},{value:"<strong>Creating</strong> the smart contract",id:"creating-the-smart-contract",level:3},{value:"<strong>Compiling</strong> the smart contract",id:"compiling-the-smart-contract",level:3},{value:"<strong>Testing</strong> the smart contract",id:"testing-the-smart-contract",level:3},{value:"<strong>Deploying</strong> the smart contract",id:"deploying-the-smart-contract",level:3},{value:"<strong>Verifying</strong> the smart contract",id:"verifying-the-smart-contract",level:3},{value:"Interacting with the Smart Contract",id:"interacting-with-the-smart-contract",level:2},{value:"Using <strong>cast</strong> for interaction",id:"using-cast-for-interaction",level:3},{value:"Performing a call",id:"performing-a-call",level:4},{value:"Signing and sending a transaction",id:"signing-and-sending-a-transaction",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploying-a-smart-contract-with-foundry",children:"Deploying a smart contract with Foundry"}),"\n",(0,s.jsxs)(n.p,{children:["In this guide, we discuss, the basics of the ",(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/",children:"Foundry"})," development toolchain and will describe how to create and deploy a smart contract with Foundry to the ",(0,s.jsx)(n.strong,{children:"Lisk Sepolia"})," testnet."]}),"\n",(0,s.jsx)(n.p,{children:"Foundry is a powerful suite of tools to develop, test, and debug your smart contracts.\nIt comprises several individual tools such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/forge/",children:(0,s.jsx)(n.code,{children:"forge"})}),": is a command-line tool that is shipped with Foundry.\nForge tests, builds, and deploys your smart contracts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/cast/",children:(0,s.jsx)(n.code,{children:"cast"})}),": is a command-line tool for performing RPC calls e.g., interacting with contracts, sending transactions, and getting onchain data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/anvil/",children:(0,s.jsx)(n.code,{children:"anvil"})}),": is a local testnet node, designed for testing contract behavior from a frontend or over RPC in a local development environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/chisel/",children:(0,s.jsx)(n.code,{children:"chisel"})}),": is a Solidity ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",children:"REPL"}),", for trying out Solidity snippets on a local or forked network."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"To build with Foundry, you need:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A basic understanding of ",(0,s.jsx)(n.a,{href:"https://soliditylang.org/",children:"Solidity"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Have Foundry installed on your system.\nTo do that, perform the following steps:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["From the command line, run:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -L https://foundry.paradigm.xyz | bash\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["After that, to install the latest (nightly) build of Foundry, run:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"foundryup\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["For more information, see the Foundry Book's ",(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/getting-started/installation",children:"Installation guide"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"wallet-funds",children:"Wallet funds"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Deploying contracts"})," to the blockchain requires a ",(0,s.jsx)(n.strong,{children:"gas fee"}),".\nTherefore, you will need to fund your wallet with ETH to cover such gas fees."]}),"\n",(0,s.jsx)(n.p,{children:"For this guide, you will be deploying a contract to the Lisk Sepolia Testnet."}),"\n",(0,s.jsxs)(n.p,{children:["You can deposit the required tokens by using the ",(0,s.jsx)(n.a,{href:"https://sepolia-bridge.lisk.com/bridge/lisk-sepolia-testnet",children:"Lisk Bridge"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In case your wallet doesn't hold enough ",(0,s.jsx)(n.code,{children:"SepoliaETH"}),", use one of the available faucets for the ",(0,s.jsx)(n.strong,{children:"Ethereum Sepolia"})," Testnet like ",(0,s.jsx)(n.a,{href:"https://sepoliafaucet.com/",children:"https://sepoliafaucet.com"})," to receive free Testnet ETH.\nThen, use the aforementioned Lisk Bridge to send tokens from the ",(0,s.jsx)(n.strong,{children:"Ethereum Sepolia Testnet"})," to the ",(0,s.jsx)(n.strong,{children:"Lisk Sepolia Testnet"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-project",children:"Creating a project"}),"\n",(0,s.jsx)(n.p,{children:"The first step of deploying smart contracts to Lisk is to set up your development environment by creating a Foundry project."}),"\n",(0,s.jsx)(n.p,{children:"You can separately create a new directory and then initialize a Foundry project, or you can let Foundry create a directory and initiate a Foundry project by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"forge init foundry_app && cd foundry_app\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command will create a ",(0,s.jsx)(n.code,{children:"foundry_app"})," and will change the terminal's working directory to the aforementioned folder as well."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)("summary",{children:["Execution logs of the ",(0,s.jsx)(n.code,{children:"forge init"})," command"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Initializing /XYZ/L2/25/foundry_app/foundry_app...\nInstalling forge-std in /XYZ/L2/25/foundry_app/foundry_app/lib/forge-std (url: Some(\"https://github.com/foundry-rs/forge-std\"), tag: None)\nCloning into '/XYZ/L2/25/foundry_app/foundry_app/lib/forge-std'...\nremote: Enumerating objects: 2181, done.\nremote: Counting objects: 100% (2177/2177), done.\nremote: Compressing objects: 100% (737/737), done.\nremote: Total 2181 (delta 1446), reused 2066 (delta 1373), pack-reused 4\nReceiving objects: 100% (2181/2181), 614.11 KiB | 766.00 KiB/s, done.\nResolving deltas: 100% (1446/1446), done.\nSubmodule 'lib/ds-test' (https://github.com/dapphub/ds-test) registered for path 'lib/ds-test'\nCloning into '/XYZ/L2/25/foundry_app/foundry_app/lib/forge-std/lib/ds-test'...\nremote: Enumerating objects: 313, done.        \nremote: Counting objects: 100% (171/171), done.        \nremote: Compressing objects: 100% (79/79), done.        \nremote: Total 313 (delta 91), reused 132 (delta 83), pack-reused 142        \nReceiving objects: 100% (313/313), 71.35 KiB | 521.00 KiB/s, done.\nResolving deltas: 100% (130/130), done.\n    Installed forge-std v1.7.6\n    Initialized forge project\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"By default, any application built with Foundry will have a similar directory structure to the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 .github\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 script\n\u2502\xa0\xa0 \u2514\u2500\u2500 Counter.s.sol\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2514\u2500\u2500 Counter.sol\n\u251c\u2500\u2500 test\n\u2502   \u2514\u2500\u2500 Counter.t.sol\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .gitmodules\n\u251c\u2500\u2500 foundry.toml\n\u2514\u2500\u2500 README.md\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For now, delete the files present in the ",(0,s.jsx)(n.code,{children:"script/Counter.s.sol"}),", ",(0,s.jsx)(n.code,{children:"src/Counter.sol"}),", and ",(0,s.jsx)(n.code,{children:"test/Counter.t.sol"})," as we will be creating a contract, and relevant test code ourselves in the following guide."]}),"\n",(0,s.jsxs)(n.h3,{id:"creating-the-smart-contract",children:[(0,s.jsx)(n.strong,{children:"Creating"})," the smart contract"]}),"\n",(0,s.jsxs)(n.p,{children:["For ease and security, we\u2019ll use the ",(0,s.jsx)(n.code,{children:"ERC721"})," contract provided by the ",(0,s.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/5.x/erc721",children:"OpenZeppelin Contracts library"})," to create a simple ERC-721 smart contract.\nWith OpenZeppelin, we don\u2019t need to write the entire ERC-721 contract.\nInstead, we can import the library contract and use its functions from the get-go."]}),"\n",(0,s.jsx)(n.p,{children:"To install the OpenZeppelin Contracts library to your project, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"forge install openzeppelin/openzeppelin-contracts\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Inside the ",(0,s.jsx)(n.code,{children:"src"})," folder, create a smart contract called ",(0,s.jsx)(n.code,{children:"NFT.sol"})," and add the code below to the newly created file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sol",metastring:'title="src/NFT.sol"',children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.23;\n\nimport "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";\n\ncontract NFT is ERC721 {\n    uint256 public currentTokenId;\n    \n    // The following will create an ERC721 Token called Lisk.\n    constructor() ERC721("Lisk", "LSK") {}\n\n    // For simplicity, we will only implement the mint function of the Lisk token.\n    function mint(address recipient) public payable returns (uint256) {\n        uint256 newItemId = ++currentTokenId;\n        _safeMint(recipient, newItemId);\n        return newItemId;\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"compiling-the-smart-contract",children:[(0,s.jsx)(n.strong,{children:"Compiling"})," the smart contract"]}),"\n",(0,s.jsx)(n.p,{children:"Once the smart contract's code is ready, it must be compiled using Foundry, to do that, simply run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"forge build\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the smart contract doesn't have any errors, you will see the following output on the terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"[\u2822] Compiling...\n[\u2830] Compiling 1 files with 0.8.24\n[\u2814] Solc 0.8.24 finished in 40.36ms\nCompiler run successful!\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"testing-the-smart-contract",children:[(0,s.jsx)(n.strong,{children:"Testing"})," the smart contract"]}),"\n",(0,s.jsx)(n.p,{children:"By testing the smart contract, you can verify that the smart contract behaves as expected and that it is free of bugs, before deploying it to Lisk."}),"\n",(0,s.jsxs)(n.p,{children:["Foundry provides a rich testing framework to support you in writing tests for smart contracts.\nSee ",(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/forge/tests",children:"Tests - Foundry Book"})," for examples and references regarding the testing framework."]}),"\n",(0,s.jsxs)(n.p,{children:["To test the ",(0,s.jsx)(n.code,{children:"NFT"})," smart contract, create a new file ",(0,s.jsx)(n.code,{children:"NFT.t.sol"})," under the ",(0,s.jsx)(n.code,{children:"test/"})," directory, and add the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",metastring:'title="foundry_app/test/NFT.t.sol"',children:'// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.20;\n\nimport {Test, console} from "forge-std/Test.sol";\nimport {NFT} from "../src/NFT.sol";\n\ncontract NFTTest is Test {\n\n    NFT public lsk;\n\n    // Create dummy addresses for alice and bob\n    address alice = makeAddr("alice");\n    address bob = makeAddr("bob");\n\n    // Initialize the NFT contract\'s object\n    function setUp() public{\n        lsk = new NFT();\n    }\n\n    // Pass the address of alice and bob to see whether the mint function successfully passes\n    function testMintPass() public {\n        lsk.mint(alice);\n        lsk.mint(bob);\n    }\n\n    // To intentionally create a failing test, let\'s compare the addresses of alice and bob\n    function testMintFail() public {\n        assertEq(alice, bob);\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To run the tests, execute the following command. The ",(0,s.jsx)(n.code,{children:"-vv"})," flag will output detailed information about the tests run using the following command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"forge test -vv\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output should look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"[\u2822] Compiling...\nNo files changed, compilation skipped\n\nRan 2 tests for test/NFT.t.sol:NFTTest\n[FAIL. Reason: assertion failed] testMintFail() (gas: 147160)\nLogs:\n// highlight-start\n  Error: a == b not satisfied [address]\n        Left: 0x328809Bc894f92807417D2dAD6b7C998c1aFdac6\n       Right: 0x1D96F2f6BeF1202E4Ce1Ff6Dad0c2CB002861d3e\n// highlight-end\n\n[PASS] testMintPass() (gas: 132327)\nTest result: FAILED. 1 passed; 1 failed; 0 skipped; finished in 1.13ms\n\nRan 1 test suite in 1.13ms: 1 tests passed, 1 failed, 0 skipped (2 total tests)\n\nFailing tests:\nEncountered 1 failing test in test/NFT.t.sol:NFTTest\n[FAIL. Reason: assertion failed] testMintFail() (gas: 147160)\n\nEncountered a total of 1 failing tests, 1 tests succeeded\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The first test: ",(0,s.jsx)(n.code,{children:"testMintPass"})," passed successfully as the criteria for the ",(0,s.jsx)(n.code,{children:"mint()"})," function were met.\nWe passed the recipient address to the ",(0,s.jsx)(n.code,{children:"mint()"})," function as required, hence the success."]}),"\n",(0,s.jsxs)(n.p,{children:["The second test: ",(0,s.jsx)(n.code,{children:"testMintFail"})," failed since we asserted that the addresses of ",(0,s.jsx)(n.code,{children:"alice"})," and ",(0,s.jsx)(n.code,{children:"bob"})," were the same.\nThe highlighted log output elaborates on how the assertion was false."]}),"\n",(0,s.jsxs)(n.h3,{id:"deploying-the-smart-contract",children:[(0,s.jsx)(n.strong,{children:"Deploying"})," the smart contract"]}),"\n",(0,s.jsxs)(n.p,{children:["After successfully building the smart contract, you can now deploy it to the Lisk network.\nFor this example, we will use the Lisk Sepolia network to deploy the ",(0,s.jsx)(n.code,{children:"NFT"})," contract."]}),"\n",(0,s.jsxs)(n.p,{children:["Add the ",(0,s.jsx)(n.code,{children:"--verify"}),", ",(0,s.jsx)(n.code,{children:"--verifier"}),", ",(0,s.jsx)(n.code,{children:"--verifier-url"}),", and the sender account's ",(0,s.jsx)(n.code,{children:"--private-key"})," flag to the ",(0,s.jsx)(n.code,{children:"forge create"})," command to directly verify the smart contract on BlockScout."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"forge create --rpc-url https://rpc.sepolia-api.lisk.com \\\n--etherscan-api-key 123 \\\n--verify \\\n--verifier blockscout \\\n--verifier-url https://sepolia-blockscout.lisk.com/api \\\n--private-key <PRIVATE_KEY> \\\nsrc/NFT.sol:NFT\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the deployment is successful, the output should look like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"# The aforementioned command will first deploy the contract and display the following output:\n\n// highlight-start\n[\u2812] Compiling...\nNo files changed, compilation skipped\nDeployer: 0x5e1A92F84cA1CE280B3Cb29d79C3368f45b41EBB\nDeployed to: 0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5\nTransaction hash: 0xf465528f43e5cbc9b5206e46048feba0b920179813c3eb8c3bdbccbfd13d731e\n// highlight-end\n\n# Once the contract is deployed successfully, the above-mentioned command will then verify the contract as well!\n\n// highlight-start\nStarting contract verification...\nWaiting for blockscout to detect contract deployment...\nStart verifying contract `0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5` deployed on 4202\n\nSubmitting verification for [src/NFT.sol:NFT] 0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5.\nSubmitted contract for verification:\n        Response: `OK`\n        GUID: `108872f713a27bc22ca1db8ceefcac8cbeddf9e565e71790`\n        URL: https://sepolia-blockscout.lisk.com/address/0x108872f713a27bc22ca1db8ceefcac8cbeddf9e5\nContract verification status:\nResponse: `OK`\nDetails: `Pending in queue`\nContract verification status:\nResponse: `OK`\nDetails: `Pass - Verified`\nContract successfully verified\n// highlight-end\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the smart contract is deployed and verified, you can interact with it by calling its public functions."}),"\n",(0,s.jsxs)(n.h3,{id:"verifying-the-smart-contract",children:[(0,s.jsx)(n.strong,{children:"Verifying"})," the smart contract"]}),"\n",(0,s.jsx)(n.p,{children:"Each deployed contract should be verified so that users and other developers can inspect the source code, and be sure that it matches the deployed bytecode on the blockchain."}),"\n",(0,s.jsxs)(n.p,{children:["Further, if you want to allow others to interact with your contract using the block explorer such as Blockscout's ",(0,s.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/address/0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5?tab=read_contract",children:"Read contract"})," and ",(0,s.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/address/0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5?tab=write_contract",children:"Write Contract"})," interfaces, it first needs to be verified."]}),"\n",(0,s.jsxs)(n.p,{children:["The above contract has ",(0,s.jsx)(n.strong,{children:"already been verified"}),", so you should be able to view your version on a block explorer already, but we'll still walk through how to verify a contract on the Lisk Sepolia testnet."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"You can't re-verify a contract identical to one that has already been verified. If you attempt to do so, such as verifying the above contract, you'll get an error similar to:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'Start verifying contract `0xcCaA1C3eb8FEb5b09a5Eac1359BC4c70E18e29d9` deployed on 4202\n\nContract [src/NFT.sol:NFT] "0xcCaA1C3eb8FEb5b09a5Eac1359BC4c70E18e29d9" is already verified. Skipping verification.\n'})})]}),"\n",(0,s.jsx)(n.p,{children:"In case your smart contract isn't verified, grab the deployed address and run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"forge verify-contract <CONTRACT_ADDRESS> \\\n./src/<CONTRACT_FILE>.sol:<CONTRACT_NAME> \\\n--chain 4202 \\\n--watch \\\n--verifier blockscout \\\n--verifier-url https://sepolia-blockscout.lisk.com/api\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see an output similar to the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Starting contract verification...\nWaiting for blockscout to detect contract deployment...\nStart verifying contract `0xcCaA1C3eb8FEb5b09a5Eac1359BC4c70E18e29d9` deployed on 4202\n\nSubmitting verification for [src/NFT.sol:NFT] 0xcCaA1C3eb8FEb5b09a5Eac1359BC4c70E18e29d9.\nSubmitted contract for verification:\n       Response: `OK`\n       GUID: `ccaa1c3eb8feb5b09a5eac1359bc4c70e18e29d965e5c95a`\n       URL: https://sepolia-blockscout.lisk.com/address/0xccaa1c3eb8feb5b09a5eac1359bc4c70e18e29d9\nContract verification status:\nResponse: `OK`\nDetails: `Pending in queue`\nContract verification status:\nResponse: `OK`\nDetails: `Pass - Verified`\nContract successfully verified\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Use the contract's address e.g., ",(0,s.jsx)(n.code,{children:"0xcCaA1C3eb8FEb5b09a5Eac1359BC4c70E18e29d9"})," to search for your contract on ",(0,s.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/",children:"Blockscout"})," to confirm that it is verified."]}),"\n",(0,s.jsx)(n.h2,{id:"interacting-with-the-smart-contract",children:"Interacting with the Smart Contract"}),"\n",(0,s.jsxs)(n.p,{children:["As mentioned earlier, if you verified the smart contract on Blocksout, you can use the ",(0,s.jsx)(n.code,{children:"Read contract"})," and ",(0,s.jsx)(n.code,{children:"Write contract"})," sections under the ",(0,s.jsx)(n.code,{children:"Contract"})," tab to interact with the deployed contract."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Read contract"})," tab can be used without connecting a wallet, however, to use the ",(0,s.jsx)(n.code,{children:"Write contract"})," tab, you'll need to connect your wallet first.\nYou can do that by clicking the ",(0,s.jsx)(n.code,{children:"Connect wallet"})," button."]}),"\n",(0,s.jsxs)(n.h3,{id:"using-cast-for-interaction",children:["Using ",(0,s.jsx)(n.strong,{children:"cast"})," for interaction"]}),"\n",(0,s.jsxs)(n.p,{children:["With Foundry's rich command-line tool: ",(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/cast/",children:(0,s.jsx)(n.code,{children:"cast"})})," it is possible to interact with any deployed contract whether it is reading or writing data on the blockchain.\nLet's perform a call without publishing a transaction (a read), then sign and publish a transaction (a write) to the deployed contract."]}),"\n",(0,s.jsx)(n.h4,{id:"performing-a-call",children:"Performing a call"}),"\n",(0,s.jsxs)(n.p,{children:["A key component of the Foundry toolkit, ",(0,s.jsx)(n.code,{children:"cast"})," enables us to interact with contracts, send transactions, and get onchain data using Ethereum RPC calls.\nFirst, we will perform a call from an account, without publishing a transaction."]}),"\n",(0,s.jsxs)(n.p,{children:["Fill out the following ",(0,s.jsx)(n.code,{children:"<PLACEHOLDERS>"})," and then, run the command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cast call <DEPLOYED_CONTRACT_ADDRESS> --rpc-url https://rpc.sepolia-api.lisk.com "balanceOf(address)" <YOUR_ACCOUNT_ADDRESS_HERE>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You should receive ",(0,s.jsx)(n.code,{children:"0x0000000000000000000000000000000000000000000000000000000000000000"})," in response, which equals ",(0,s.jsx)(n.code,{children:"0"})," in hexadecimal.\nThis makes sense as you've only deployed the NFT contract for now, however, no NFTs have been minted yet, and therefore your account's balance is zero."]}),"\n",(0,s.jsx)(n.h4,{id:"signing-and-sending-a-transaction",children:"Signing and sending a transaction"}),"\n",(0,s.jsxs)(n.p,{children:["Now let's sign and send a transaction, calling the ",(0,s.jsx)(n.code,{children:"mint(address)"})," function on the ",(0,s.jsx)(n.code,{children:"NFT"})," contract we just deployed."]}),"\n",(0,s.jsxs)(n.p,{children:["Again, fill out the following ",(0,s.jsx)(n.code,{children:"<PLACEHOLDERS>"})," and then, run the command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cast send <DEPLOYED_CONTRACT_ADDRESS> --rpc-url https://rpc.sepolia-api.lisk.com "mint(address)" <RECIPIENT_ADDRESS_HERE> --private-key <SENDER_PRIVATE_KEY>\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["As the ",(0,s.jsx)(n.code,{children:"cast send"})," command writes data on the blockchain, it needs a sender account's private key to be passed to the ",(0,s.jsx)(n.code,{children:"--private-key"})," flag.\nThe transaction will be sent successfully if the sender account has sufficient funds."]}),(0,s.jsxs)(n.p,{children:["The aforesaid is not required for ",(0,s.jsx)(n.code,{children:"cast call"})," command, because that only retrieves already published data from the smart contract."]})]}),"\n",(0,s.jsxs)(n.p,{children:["If the transaction execution is successful, Foundry will respond with information about the transaction, including the ",(0,s.jsx)(n.code,{children:"blockNumber"}),", ",(0,s.jsx)(n.code,{children:"gasUsed"}),", ",(0,s.jsx)(n.code,{children:"transactionHash"}),", and much more."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'blockHash               0xfa9d32794b0fc9c1a10d39c5289613dfe80b55f8ead06475ca877a389e088e67\n// highlight-next-line\nblockNumber             2165375\ncontractAddress         \ncumulativeGasUsed       137472\neffectiveGasPrice       3000000253\nfrom                    0x5e1A92F84cA1CE280B3Cb29d79C3368f45b41EBB\n// highlight-next-line\ngasUsed                 93597\nlogs                    [{"address":"0x108872f713a27bc22ca1db8ceefcac8cbeddf9e5","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000000000000000000000000000000000000000000000","0x000000000000000000000000488ba3c013020bd1712ed6a1997c4212d9711954","0x0000000000000000000000000000000000000000000000000000000000000001"],"data":"0x","blockHash":"0xfa9d32794b0fc9c1a10d39c5289613dfe80b55f8ead06475ca877a389e088e67","blockNumber":"0x210a7f","transactionHash":"0x76750ee1aaeed89c8f165d6f547002eb3bb833a142f73d63c1c3c9980fce8796","transactionIndex":"0x1","logIndex":"0x0","removed":false}]\nlogsBloom               0x00000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000200000000008000000000000000000040000000000000000000000000000020000000000000000080800000000000000000000000010000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000001000000000000400000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000\nroot                    \nstatus                  1\n// highlight-next-line\ntransactionHash         0x76750ee1aaeed89c8f165d6f547002eb3bb833a142f73d63c1c3c9980fce8796\ntransactionIndex        1\ntype                    2\nto                      0x1088\u2026f9e5\nl1Fee             "0x30fb62bfb0c"\nl1GasPrice             "0x6d49929"\nl1GasUsed             "0x8a4"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Finally, you can confirm the minting by ",(0,s.jsx)(n.a,{href:"#performing-a-call",children:"performing the call"})," again.\nWe should see that our balance increased from ",(0,s.jsx)(n.code,{children:"0"})," to ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cast call <DEPLOYED_CONTRACT_ADDRESS> --rpc-url https://rpc.sepolia-api.lisk.com "balanceOf(address)" <YOUR_ACCOUNT_ADDRESS_HERE>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["And the response: ",(0,s.jsx)(n.code,{children:"0x0000000000000000000000000000000000000000000000000000000000000001"})," (",(0,s.jsx)(n.code,{children:"1"})," in hex) \u2014\xa0congratulations, you deployed a contract and minted an NFT with Foundry!"]}),"\n",(0,s.jsxs)(n.p,{children:["See the minted token for this guide on the ",(0,s.jsx)(n.a,{href:"https://sepolia-blockscout.lisk.com/token/0x108872F713A27bc22ca1db8CEefCAC8CbeDdF9E5",children:"Blockscout explorer"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["That's it! Although this is just the tip of the iceberg, there is a lot more to learn about Foundry.\nFor all things Foundry, check out the ",(0,s.jsx)(n.a,{href:"https://book.getfoundry.sh/",children:"Foundry book"}),", or head to the official Telegram ",(0,s.jsx)(n.a,{href:"https://t.me/foundry_rs",children:"dev chat"})," or ",(0,s.jsx)(n.a,{href:"https://t.me/foundry_support",children:"support chat"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);