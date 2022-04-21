const { expect } = require('chai')
const { BigNumber } = require('ethers')
const { formatEther, parseUnits } = require('ethers/lib/utils')
const { ethers } = require('hardhat')

describe('Hive Token', () => {
  let hiveToken
  let owner
  let addr1
  let addr2

  beforeEach(async () => {
    ;[owner, addr1, addr2] = await ethers.getSigners()

    const HiveToken = await ethers.getContractFactory('HiveToken')
    hiveToken = await HiveToken.deploy()
  })

  it('Stake tokens', async () => {
    const hiveToStake = parseUnits('10000', 18)
    await hiveToken.stakeTokens(hiveToStake)
    const userBalance = await hiveToken.balanceOf(owner.address)
    const value = formatEther(userBalance)

    console.log(value)
  })
})
