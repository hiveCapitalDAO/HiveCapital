const { expect } = require('chai')
const { BigNumber } = require('ethers')
const { formatEther, parseUnits } = require('ethers/lib/utils')
const { ethers, network } = require('hardhat')

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

  it('Create proposal and place vote', async () => {
    const delgetaeTx = await token.delegate(owner.address)
    await delgetaeTx.wait(1)
    const transferCallData = token.interface.encodeFunctionData('transfer', [
      addr2.address,
      10,
    ])

    const proposeTx = await governor.propose(
      [token.address],
      [0],
      [transferCallData],
      'Proposal #1: Give grant to team',
    )

    const proposalReceipt = await proposeTx.wait(1)
    const proposalId = proposalReceipt.events[0].args.proposalId
    await network.provider.request({
      method: 'evm_mine',
    })
    await network.provider.request({
      method: 'evm_mine',
    })
    const proposalState = await governor.state(proposalId)
    console.log(`Current proposal state: ${proposalState}`)

    // Proposal is active
    expect(proposalState).to.equal(1)

    const voteTx = await governor.castVote(proposalId, 0)
    await voteTx.wait(1)

    const proposalVotes = await governor.proposalVotes(proposalId)
    expect(proposalVotes.againstVotes).to.equal(
      BigNumber.from('100000000000000000000000000'),
    )
  })
})
