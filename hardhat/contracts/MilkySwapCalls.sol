// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "https://github.com/milkyswap/milkyswap/blob/master/contracts/uniswapv2/interfaces/IUniswapV2Router02.sol";
import "https://github.com/milkyswap/milkyswap/blob/master/contracts/uniswapv2/interfaces/IUniswapV2ERC20.sol";
import "hardhat/console.sol";


contract MilkySwapCall {
    IUniswapV2Router02 router;
    IUniswapV2ERC20 token;
    address milkyRouter = 0x347e2a75e99174d46D94B5D7b4BE8f294bc2F5Fc;
    address milkyFactory = 0x8B06cF15c46eb0A2d42D0767B6ceD723CD8e68A2;

    address private usd = 0xd034bc3C84837Cfa08c8ECdD3F8d9EBB0D67e3B0;
    address private milkyToken = 0x7642aD41d0fAFd7a42bBC681CFcAA4448DFD3CBc;

    constructor() {
         router = IUniswapV2Router02(milkyRouter);
         token = IUniswapV2ERC20(milkyToken);
    }

    function wMilkAada() external view returns (address) {
        return router.WETH();
    }

    function swapExactMilkAdaForTokens() public payable {
        uint[] memory amounts = getAmountsOut(msg.value);
        router.swapExactETHForTokens{ value: msg.value }(amounts[1] - 1, getPathForAdaToMilky(), msg.sender, 1653671166);
    }

    function swapAdaForExactTokens(uint amountOfTokensToRecieve) public payable {
        // uint deadline = block.timestamp + 20;

        router.swapETHForExactTokens{ value: msg.value }(amountOfTokensToRecieve, getPathForAdaToMilky(), msg.sender, 1653671166);
    }

    function swapExactTokensForAda(uint amountOfTokens) public payable {
        require(token.approve(milkyRouter, amountOfTokens), "Approve Failed.");
        uint[] memory amounts = getAmountsOut(amountOfTokens);

        uint deadline = block.timestamp + 1 days;

        router.swapExactTokensForETH(amountOfTokens, amounts[1] - 1, getPathMilkyToAda(), msg.sender, deadline);

    }

    function getAmountsOut(uint amountIn) public view returns (uint[] memory) {
        return router.getAmountsOut(amountIn, getPathMilkyToAda());
    }

    function getAmountsIn(uint amountOut, address[] memory path) public view returns (uint[] memory) {
        return router.getAmountsIn(amountOut, path);
    }

     function getPathMilkyToAda() public view returns (address[] memory) {
        address[] memory path = new address[](2);
        path[0] = milkyToken;
        path[1] = router.WETH();
        
        return path;
    } 

    function getPathForAdaToMilky() private view returns (address[] memory) {
        address[] memory path = new address[](2);
        path[0] = router.WETH();
        path[1] = milkyToken;
        
        return path;
    }
}