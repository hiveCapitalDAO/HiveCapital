// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/draft-ERC721Votes.sol";

contract HiveCapitalBlackCard is ERC721, ERC721Enumerable, Ownable, EIP712, ERC721Votes {

    // maximum number of tokens ever gonna be minted on this contract
    uint16 public MAX_TOTAL_SUPPLY = 1000;

    // price of a single NFT
    // base price is milkAda
    uint256 internal MINT_PRICE = 500 ether;

    // default is true - using for sale pausable if something go wrong
    bool public publicMintActive = true;

    // for enumeration minted tokens count
    uint16 internal totalMinted = 0;

    constructor()
        ERC721("Hive Capital Black Card", "HBC")
        EIP712("Hive Capital Black Card", "1")
    {}

    // ONLY OWNER FUNCTIONS

    // flip public sale state
    function flipPublicSaleState() external onlyOwner {
        publicMintActive = !publicMintActive;
    }

    // INTERNAL FUNCTIONS

    // mint token
    function _mintToken(address to, uint16 count, string memory uri) private {
        require(count > 0, "Min mint amount is 1");
        require(
            totalMinted + count <= MAX_TOTAL_SUPPLY,
            "Limit: 1k nft minted"
        );

        for (uint16 i = 0; i < count; i++) {
            _safeMint(to, totalMinted + 1);
            _setTokenURI(totalMinted + 1, uri);
            totalMinted += 1;
        }
    }

    // PUBLIC FUNCTIONS 

    // public minting
    function publicMint(address to, uint16 count) external payable {
        require(publicMintActive == true, "Public sale is not active");
        // require(publicMintTime <= block.timestamp, "Public sale is not active");
        require(
            msg.value == MINT_PRICE * count,
            "Value is not equal to price * count"
        );

        _mintToken(to, count);
    }

    // VIEW FUNCTIONS

    // total minted tokens count
    function getTotalMintedCount() external view returns (uint16) {
        return totalMinted;
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _afterTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Votes)
    {
        super._afterTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}