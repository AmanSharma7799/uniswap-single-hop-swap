require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          evmVersion: "istanbul",
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: "", //your alchemy api key
      },
    },
  },
  // mocha: {
  //   timeout: 100000000,
  // },
}
