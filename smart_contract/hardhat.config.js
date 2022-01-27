//https://eth-ropsten.alchemyapi.io/v2/0XPNs7u0cbVS0Vnhi33bIyZJPn8FhQn-

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'enter a deploy url here',
      accounts: ['enter your wallet private key here']
    }
  }
}