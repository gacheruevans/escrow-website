require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.19",
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/o9ZH5TgB0iAjJP6sfHNlVdAwdBtHxwsv',
      accounts: ['d7bc10ea9524161e6c247e0c55e81e3143354934775f1fed0a6da3551332f79f']
    }
  }
};
