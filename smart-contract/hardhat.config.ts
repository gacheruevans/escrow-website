require('@nomiclabs/hardhat-waffle');

module.exports = {
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/qknRLvKlFrAtPCYUp0uf9aWlM-3jldA_',
      accounts: [
        '08db354fe3589026e747fd621bb60b783489ff2ffc90bd6be9e8565180646858',
      ],
    },
  },
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 40000,
  },
};
