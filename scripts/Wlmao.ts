import { ethers } from "hardhat";

async function main() {

  const lmaoAddress = "0x1bF13109932Fd9b0F81FE54D2175833c5cDF4378"

  const wlmao = await ethers.deployContract("Wlmao", [lmaoAddress], {
  });

  await wlmao.waitForDeployment();

  console.log(`wlmao was deployed at ${wlmao.target}`)


}

// 0x3D5dcA1cA01F007fF2DdC985533679120f8872F0


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
