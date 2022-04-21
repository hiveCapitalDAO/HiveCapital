const hre = require('hardhat')

async function main() {
  const Stake = await hre.ethers.getContractFactory('Stake')
  const stake = await Stake.deploy()

  await stake.deployed()

  console.log('Stake contract deployed to: ', stake.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
