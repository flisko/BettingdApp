# BettingdApp
Betting dApp with 2 different Oracle implementations made for the Ethereum network.

Prerequisites
Due to the simplicity of the project we will write and deploy our smart contract onto a test net with MetaMask and Remix.
(https://metamask.io/)
(https://remix.ethereum.org).

The first thing we’ll need is nodeJS and NPM, get them here and follow the installation steps for your OS: https://nodejs.org/en/.

Next, install MetaMask(see link above).

## Build Setup

``` bash
# Open Command prompt with elevated privleges. Run commands bellow to check if NodeJS and NPM are installed correctly.
"node -v"

"npm -v"

# Next install git. After installation RE-OPEN command prompt with elevated privleges!!!
https://git-scm.com/downloads

# After that change directory to a working folder and clone the git in command prompt with 
git clone https://github.com/flisko/BettingdApp

# then "cd BettingdApp" and "cd betting-dapp" when inside we will install web3 and vuex font awesome 
npm i web3@^0.20.0 vuex font-awesome -s

# to test if it works run
npm start
```
This installs the default project. See Readme inside betting-dapp folder for more specific information regarding the actual smart contarct code and the dApp itself.
