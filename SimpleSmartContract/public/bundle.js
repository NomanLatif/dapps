var contractABI = [];
var contractAddress = '0xae97F26f8a7dd889235d75baEa2ADF380BF503C7';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract)
web3.eth.getAccounts()
.then(console.log);