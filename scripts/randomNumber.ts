import { ethers } from "hardhat";

async function main() {
    const RandomNUmberGenerator = await ethers.getContractFactory("VRFv2Consumer")
    const _RandomNUmberGenerator = await RandomNUmberGenerator.deploy(10102);
    await _RandomNUmberGenerator.deployed();
    const RandomNUmberGeneratorAddr = _RandomNUmberGenerator.address;
    console.log(`RandomNUmberGeneratorAddr is deployed to ${RandomNUmberGeneratorAddr}`);

    /////// Interact with contract ////////

    const ranNUmberContract = await ethers.getContractAt("iRandomNumber", "0x4f37d24602067e4d928A82e618f04A103BeB10fF");
    const requestId = await ranNUmberContract.requestRandomWords("0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15", 10102, 3, 2500000, 2);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});