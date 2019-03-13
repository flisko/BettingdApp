import Web3 from 'web3'
import {address, ABI} from './constants/bettingContract'

let getContract = new Promise(function (resolve, reject) {
 let web3 = new Web3(window.web3.currentProvider)
 let bettingContract = web3.eth.contract(ABI)
 let bettingContractInstance = bettingContract.at(address)
 // bettingContractInstance = () => bettingContractInstance
 resolve(bettingContractInstance)
})
export default getContract