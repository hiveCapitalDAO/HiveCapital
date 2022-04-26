const { expect } = require('chai')
const { BigNumber } = require('ethers')
const { formatEther, parseUnits } = require('ethers/lib/utils')
const { ethers } = require('hardhat')
const { VOTING_DELAY, VOTING_PERIOD } = require('../config')
const { moveBlocks } = require('../utils/move-blocks')

describe('Govenor', () => {
  let governor
  let token
  let owner
  let addr1
  let addr2

  beforeEach(async () => {
    ;[owner, addr1, addr2] = await ethers.getSigners()

    const HiveToken = await ethers.getContractFactory('HiveToken')
    token = await HiveToken.deploy()
    console.log(`Hive token contract delpoyed: ${token.address}`)
    const Govenor = await ethers.getContractFactory('MyGovernor')
    governor = await Govenor.deploy(token.address)
    console.log(`Govenor smart contract deployed: ${governor.address}`)
  })

  it('Create proposal, vote, and execute', async () => {
    // Send Hive tokens to governance contract
    const transferTx = await token.transfer(governor.address, 100000)
    await transferTx.wait(1)
    // Delete tokens in order to place vote
    const delgetaeTx = await token.delegate(owner.address)
    await delgetaeTx.wait(1)
    const transferCallData = token.interface.encodeFunctionData('transfer', [
      addr2.address,
      100,
    ])

    const proposeTx = await governor.propose(
      [token.address],
      [0],
      [transferCallData],
      'Proposal #1: Send to coinbase wallet',
    )

    const proposalReceipt = await proposeTx.wait(1)
    const proposalId = proposalReceipt.events[0].args.proposalId
    await moveBlocks(VOTING_DELAY + 1)
    const proposalState = await governor.state(proposalId)
    console.log(`Current proposal state: ${proposalState}`)

    // Vote Tx
    expect(proposalState).to.equal(1)
    const voteTx = await governor.castVote(proposalId, 1)
    await voteTx.wait(1)

    const proposalVotes = await governor.proposalVotes(proposalId)
    expect(proposalVotes.againstVotes).to.equal(BigNumber.from('0'))

    // Move to end of proposal
    await moveBlocks(VOTING_PERIOD)

    // Execute proposal
    const descriptionHash = ethers.utils.id(
      'Proposal #1: Send to coinbase wallet',
    )
    const eTx = await governor.execute(
      [token.address],
      [0],
      [transferCallData],
      descriptionHash,
    )
    await eTx.wait(1)

    const bal = await token.balanceOf(addr2.address)
    expect(bal).to.equal(100)
  })
})
