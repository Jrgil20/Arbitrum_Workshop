require('@nomicfoundation/hardhat-toolbox');

// NEVER record important private keys in your code - this is for demo purposes
const SEPOLIA_TESTNET_PRIVATE_KEY = '';
const ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY = '';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.18',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    arbitrumSepolia: {
      url: 'https://arb-sepolia.g.alchemy.com/v2/r-57hgL8Mz_5gUs77z3iSmf3iXhV6LqE',
      chainId: 421614,
      //accounts: [SEPOLIA_TESTNET_PRIVATE_KEY]
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      //accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY]
    },
  },
};