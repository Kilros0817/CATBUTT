async function main() {

    const CATBUTT = await ethers.getContractFactory("CATBUTT");
    const CATBUTTContract = await CATBUTT.deploy();
    console.log("Clover_Seeds_Token deployed to:", CATBUTTContract.address);
  }
  
  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });