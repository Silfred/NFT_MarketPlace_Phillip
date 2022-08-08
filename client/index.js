// initialise web3 library
//givenProvider means that the library uses the provider that's being given. In this case Ganache, in other cases it could be Ropsten or even mainNet
var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x9f123EfE1C21fDfF53fBeE6737cDa3DbEe522c58";

$(document).ready(function() {
  window.ethereum.enable().then(function (accounts) {
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];
        
        console.log(instance);
    })
})

function createKitty() {
    var dnaStr = getDna();
    instance.methods.createKittyGen0(dnaStr).send({}, function(error, txHash){
        if(error){
            console.log(err);
        }
        else{
            console.log(txHash);
        }
    })
}