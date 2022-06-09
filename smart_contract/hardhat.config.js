const url = "https://eth-goerli.alchemyapi.io/v2/EvgwyBHCiIIfhCrZzMDjebMkhR5U5np2";


require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: url,
      accounts: ['4a07b575834cf38fb585923c877b7a253dfe0b13fc23b08091e3ca6912b9687f']
    }
  }
}