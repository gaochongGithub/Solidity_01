require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("dotenv").config();

const private_key = process.env.PRIVATE_KEY;
const rpc = process.env.bsctest;
const apiKey = process.env.BSC_API_KEY;

const polygonRpc = process.env.polygontest;
const polygonApiKey = process.env.POLYGON_API_KEY;
const coinmarketcapApi = process.env.COINMARKETCAP_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.8",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks:{
    hardhat: {
    },
    
    bsctest: { 
      url: rpc,
      // gasPrice: 10000000000,
      chainId: 97,
      accounts: [private_key],
      // timeout:50000
    },
    polygontest: { 
      url: polygonRpc,
      chainId: 80001,
      accounts: [private_key],
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai:polygonApiKey,
      bscTestnet: apiKey,
    },
  },
  gasReporter:{
    enabled:true,
    outputFile:"gas-report.txt",
    noColors:true,
    currency:"USD",
    coinmarketcap:coinmarketcapApi,
    token:"MATIC"
  }
};
