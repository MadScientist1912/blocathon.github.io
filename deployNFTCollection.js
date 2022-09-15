
const hre = require("hardhat");

async function main() {
  

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("RunnerCollection");
  const greeter = await Greeter.deploy(
      "Runner",
      "RUN",
      "https://ipfs.io/ipfs/QmTCsMc4vjxTSx4vfBz8ZDaugvF3XGcdWuxcN8HN8CobJ6/"
  );

  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);

  await greeter.mint(10);
  console.log("10 nfts minted")
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
