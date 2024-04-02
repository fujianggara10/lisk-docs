---
title: Accessing real-world data with Oracles
slug: /guides/using-oracle-data
description: A guide on using Redstone Data Feeds to access real-world data such as asset prices, directly from your smart contracts on the Lisk testnet.
keywords: [
    Oracle
    Oracles,
    Redstone,
    price feeds,
    data feeds,
    smart contract,
    Lisk blockchain,
    Lisk network,
    Lisk testnet,
    Lisk test network,
    app development,
    dapp development,
    build a dapp on Lisk,
    build on Lisk,
  ]
---

# Accessing real-world data using the Redstone Oracle

This page will explain how you can access real world / off-chain data using Oracles such as Redstone.

RedStone is a data ecosystem that delivers frequently updated, reliable and diverse data for your dApp and smart contracts.

In case you intend to use the price data inside of your own contract, please jump to the section [How to receive price feeds inside a smart contract](#how-to-receive-price-feeds-inside-a-smart-contract)

If you intend to query the price feeds directly in you webapplication, check out the section [## How to receive price feeds in Javascript](#how-to-receive-price-feeds-in-javascript).


## How to receive price feeds in Javascript

```js
import { wagmiAbi } from './abi.js'
import { createPublicClient, http } from 'viem'
import { liskSepolia } from 'viem/chains'
import { publicActionsL2 } from 'viem/op-stack'
 
export const publicClient = createPublicClient({
  chain: liskSepolia,
  transport: http(),
}).extend(publicActionsL2());

const ethPrice = await publicClient.readContract({
    address: '0x6F9A3AC224025B0A9E7b7F47dcb1DF7872e2fA75',
    abi: wagmiAbi,
    functionName: 'latestAnswer',
});

const usdcPrice = await publicClient.readContract({
    address: '0xC603180D79a5Afa341A59134d126fC72Bcd19283',
    abi: wagmiAbi,
    functionName: 'latestAnswer',
});
 
console.log(" |- ++++++++++ ETH Price ++++++++++ -|");
console.log(ethPrice);
console.log(" |- ++++++++++ USDC Price ++++++++++ -|");
console.log(usdcPrice);
```

## How to receive price feeds inside a smart contract

```solidity
pragma solidity ^0.8.23;

import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";

contract Deployed {
    
    function setA(uint) public returns (uint) {}
    
    function a() public pure returns (uint) {}
    
}
contract Existing  {
    
    Deployed dc;
    
    function Existing(address _t) public {
        dc = Deployed(_t);
    }
 
    function getA() public view returns (uint result) {
        return dc.a();
    }
    
    function setA(uint _val) public returns (uint result) {
        dc.setA(_val);
        return _val;
    }
    
}
```
