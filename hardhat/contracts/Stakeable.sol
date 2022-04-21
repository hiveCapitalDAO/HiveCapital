// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

abstract contract Stakeable is ERC20 {
    uint totalStakedTokens;
    uint stakeIdCounter = 0;

    struct StakeMetadata {
        uint stakeId;
        address staker;
        uint principal;
        uint credits;
        bool active;
    }
    StakeMetadata[] stakes;
    mapping(address => StakeMetadata[]) stakesOfUser;

    uint lastDistributed;

    constructor() {
        lastDistributed = block.timestamp;
    }

    function stakeTokens(uint amount) public { 
        require(amount > 0);
        require(balanceOf(msg.sender) >= amount, "You do not have enough HIVE tokens");
        _burn(msg.sender, amount);
        StakeMetadata memory stake = StakeMetadata(stakeIdCounter, msg.sender, amount, 0, true);
        stakes.push(stake);
        stakesOfUser[msg.sender].push(stake);
        stakeIdCounter++;
        totalStakedTokens += amount;
    }

    function unStake(uint userStakeIndex) public {
        require(stakesOfUser[msg.sender][userStakeIndex].active, "Stake was already unstaked");
        StakeMetadata storage stake = stakesOfUser[msg.sender][userStakeIndex];

        _mint(stake.staker, stake.principal + stake.credits);
        totalStakedTokens -= stake.principal;
        stake.active = false;
    }

    /*
        Distribute Credits Daily: This function disbutes equal rewards to all stakers based on the  
            3.65 Annual inflation rate. It can only be called once a day. 
    */
    function distributeCreditsDaily() public {
        require(lastDistributed + 1 days > block.timestamp);
        uint totalRewards = (totalSupply() / 10**uint256(decimals())) / 10000;

        for (uint i = 0; i < stakes.length; i++) {
            StakeMetadata storage stake = stakes[i];
            if(stake.active) {
                uint shares = stake.principal;
                uint percentOfRewards = divider(shares, totalStakedTokens, 2);
                uint reward = totalRewards * percentOfRewards / 100;
                console.log(reward);
                stake.credits += reward;
            }
        }
        
        lastDistributed = block.timestamp;
    }

    // Helper Functions
    function divider(uint numerator, uint denominator, uint precision) public pure returns(uint) {
        return (numerator*(uint(10)**uint(precision+1))/denominator + 5)/uint(10);
    }
}