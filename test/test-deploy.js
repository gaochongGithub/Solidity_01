const { ethers } = require("hardhat");
const { expect, assert} = require("chai");

describe("SimpleStorage", ()=>{
  let deployedContract;
  beforeEach(async function(){
      deployedContract = await ethers.deployContract("SimpleStorage");

      await deployedContract.waitForDeployment();

      console.log("SimpleStorage Contract Address:", await deployedContract.getAddress());
  })
  it("Should start with a favorite number of", async function () {
    const currentValue = await deployedContract.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  })
  //加only仅走这个
  it("Should update when call store", async function () {
    const expectedValue = "7";
    const transactionResponse = await deployedContract.store(expectedValue);

    await transactionResponse.wait(1);
    const currentValue = await deployedContract.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  })
  it("Add Perosion", async ()=>{
    const expectedValue = "7", expectedName = "AAA";
    const transactionResponse = await deployedContract.store(expectedValue);
    await transactionResponse.wait(1);

    const addTransactionResponse = await deployedContract.addPerson(expectedName,expectedValue);
    await addTransactionResponse.wait(1);

    const currentPeopel = await deployedContract.nameToFavaoiteNumber(expectedName);
    console.log(currentPeopel, "currentPeopel------");
    assert.equal(currentPeopel.toString(), expectedValue);
    
  })

  it("get favaoiteNumber", async ()=>{
    const expectedValue = "0";
    const favaoiteNumber = await deployedContract.retrieve();
    console.log(favaoiteNumber);

    assert.equal(favaoiteNumber.toString(), expectedValue);
  })
})