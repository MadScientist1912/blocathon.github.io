
const hre = require("hardhat");

async function main() {
  
  const Greeter = await hre.ethers.getContractFactory("RunToken");
  const greeter = await Greeter.deploy();

  await greeter.deployed();
  console.log("run token deployed to:", greeter.address);

  await greeter.mintTokens("0x06214f2E1e1896739D92F3526Bd496DC028Bd7F9", 55);
  console.log("run tokens minted")
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
