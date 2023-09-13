import { ethers } from "hardhat";

async function main() {
  

  const lmao = await ethers.deployContract("Lmao", [], {
  });

  await lmao.waitForDeployment();

  console.log(`Lmao was deployed at ${lmao.target}`)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
