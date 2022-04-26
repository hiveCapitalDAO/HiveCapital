// Governor Values
const QUORUM_PERCENTAGE = 4 // Need 4% of voters to pass
const MIN_DELAY = 3600 // 1 hour - after a vote passes, you have 1 hour before you can enact
// export const VOTING_PERIOD = 45818 // 1 week - how long the vote lasts. This is pretty long even for local tests
const VOTING_PERIOD = 6545 // 1 day
const VOTING_DELAY = 1 // 1 Block - How many blocks till a proposal vote becomes active
// export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

module.exports = {
  QUORUM_PERCENTAGE,
  MIN_DELAY,
  VOTING_DELAY,
  VOTING_PERIOD,
}
