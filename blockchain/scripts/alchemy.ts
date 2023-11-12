//import { Network, Alchemy } from 'alchemy-sdk';
const { Network, Alchemy } = require('alchemy-sdk');
const settings = {
    apiKey: "Huww63vrdXZXLHOpkKbNd6wChdStY4lb",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);