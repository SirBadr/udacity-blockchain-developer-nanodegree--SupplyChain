const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "88c8b23728d749a3bccb188917e9ec27";
//
const fs = require('fs');
const mnemonic = "vessel input fabric draw fashion best trap glad ivory faint unveil flash";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    //TODO: Implement Task 3 Deploy your Contract to Rinkeby
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        timeoutBlocks: 20000,
        skipDryRun: true,
        gas: 4500000,
        gasPrice: 10000000000,
    },
  },  
  compilers: {
    solc: {
      version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }

};