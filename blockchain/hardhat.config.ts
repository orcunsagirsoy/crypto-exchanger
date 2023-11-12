// 
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/P4UDTcbeyDBWK3LLsYWjq6FklXiJuPph',
      accounts: ['21b3cd2f7ce77bd4aab3a6ddc1d892a63767bb33d0f81e025be71fe781d45700'],
    },
  },
};