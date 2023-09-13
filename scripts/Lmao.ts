import { ethers } from "hardhat";

async function main() {
  

//   const lmao = await ethers.deployContract("Lmao", [], {
//   });

//   await lmao.waitForDeployment();

//   console.log(`Lmao was deployed at ${lmao.target}`)

  

 

  const from = "0x9cDF5ce3c9Ea71ECC8fb7C3A17ed7B6c74F9C5F0"
  const to = "0x2F02e414Bb85DDDe72ba5a12A248074239B502FA"
  const amount = ethers.parseEther("50")


}

// 0x1bF13109932Fd9b0F81FE54D2175833c5cDF4378

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
