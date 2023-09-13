import { ethers } from "hardhat";

async function main() {
    const lmaoAddress = "0x1bF13109932Fd9b0F81FE54D2175833c5cDF4378"
    const wlmaoAdr = "0x3D5dcA1cA01F007fF2DdC985533679120f8872F0"

    const lmao = await ethers.getContractAt("IERC2", lmaoAddress)
    const wlmao = await ethers.getContractAt("IWlmao", wlmaoAdr)
    const wlmoERC20 = await ethers.getContractAt("IERC2", wlmao)

    const signer = await ethers.getImpersonatedSigner("0x9cDF5ce3c9Ea71ECC8fb7C3A17ed7B6c74F9C5F0")
    
    const amountApproved = ethers.parseEther("1000000")
    const depositAmount = ethers.parseEther("2")

    // Approve wlmao to spend lmao tokens
    await lmao.connect(signer).approve(wlmao,amountApproved)
    console.log(`allowancee is: ${await lmao.allowance(signer, wlmao)}`)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});