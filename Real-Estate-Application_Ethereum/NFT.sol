// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    constructor() ERC721("Real Estate", "RET") {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function batchMintNFT(address recipient, string[] memory tokenURIs) public onlyOwner returns(uint256){
        for(uint i=0; i<tokenURIs.length; i++){
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();
            _mint(recipient, newItemId);
            _setTokenURI(newItemId, tokenURIs[i]);
        }
        return _tokenIds.current();
    }

    function viewBatchURI(uint[] memory tokenIDs) public view returns(string[] memory){
        string[] memory temp = new string[](tokenIDs.length);
        for(uint i=0; i<tokenIDs.length; i++){
            temp[i] = tokenURI(tokenIDs[i]);
        }
        return temp;
    }
}