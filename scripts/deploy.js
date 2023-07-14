const { ethers } = require("hardhat");

let deployedContract;
async function deploy(){
    // const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  // const simpleStorage = await SimpleStorageFactory.deploy();
  // console.log("ssssss");
  // await simpleStorage.deployed();

  deployedContract = await ethers.deployContract("SimpleStorage");

  await deployedContract.waitForDeployment();

  console.log("SimpleStorage Contract Address:", await deployedContract.getAddress());
}
async function verify(){

  try {
    await run('verify:verify', {
      contract : "contracts/SimpleStorage.sol:SimpleStorage",
      address: '0x2BFC90B24F8F31fa1b821E7e961b37dB413D94fD',
      constructorArguments: []
    });
  } catch (error) {
    console.log("error...", error);
  }
}

async function main() {

  // await deploy();
  await verify();

} 
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
