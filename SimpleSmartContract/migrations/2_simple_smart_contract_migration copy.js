const simpleSmartContract = artifacts.require("SimpleSmartContract");
const helloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  deployer.deploy(simpleSmartContract);
  deployer.deploy(helloWorld);
};
