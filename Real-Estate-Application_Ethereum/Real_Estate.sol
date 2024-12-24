// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Real_Estate is ERC721Holder{
 
    address owner;
    address NFTaddress;

    struct Details{
        address currentOwner;
        uint state;
        uint acquire;
    }

    mapping(uint => Details) VentureDetails;
    uint[] allVentureDetails;

    struct Auction{
        uint state;
        uint startingValue;
        uint step;
        address highestBidder;
        uint highestBidderValue;
        mapping(address => uint) allBids;
        address[] allBidsAddresses;
    }

    struct Listing{
        uint state;
        uint listingValue;
        address buyer;
    }

    struct user{
        mapping(uint => Auction) allAuctions;
        uint[] allTokens;
        mapping(uint => Listing) allListings;
        uint[] allTokensListing;
        uint state;
    }

    mapping(address => user) allUsers;
    address[] allUsersAdresses;

    constructor(address nftAddress, uint[] memory tokens){
        owner = msg.sender;
        NFTaddress = nftAddress;
        for(uint i=0 ; i<tokens.length; i++){
            Details storage temp = VentureDetails[tokens[i]];
            temp.currentOwner = msg.sender;
            temp.state = 4;
            temp.acquire = 0;
            allVentureDetails.push(tokens[i]);
        }
    }

    function addProperties(uint[] memory tokens) public{
        require(msg.sender == owner, "Not Venture Owner");
        for(uint i=0 ; i<tokens.length; i++){
            Details storage temp = VentureDetails[tokens[i]];
            require(temp.state == 0, "Property Already Exists");
            temp.currentOwner = msg.sender;
            temp.state = 4;
            temp.acquire = 0;
            allVentureDetails.push(tokens[i]);
        }
    }

    function createAuction(uint tokenId, uint startValue, uint stepValue)public {
        require(VentureDetails[tokenId].state == 4, "The TokenID is invalid");
        require(stepValue > startValue*5/100, "StepValue Must be greater than 5 %");
        ERC721 token = ERC721(NFTaddress);
        require(token.ownerOf(tokenId) == msg.sender, "You must own the NFT");
        require(token.isApprovedForAll(msg.sender, address(this)), "Approval Not Valid");
        token.safeTransferFrom(msg.sender, address(this), tokenId);
        user storage temp = allUsers[msg.sender];
        Auction storage temp1 = temp.allAuctions[tokenId];
        require(temp1.state == 0 || temp1.state == 2 || temp1.state == 3, "Auction is Live");
        if(temp.state == 0){
            temp.state = 1;
            allUsersAdresses.push(msg.sender);
        }
        if(temp1.state == 0){
            temp.allTokens.push(tokenId);
        }
        temp1.state = 1;
        temp1.startingValue = startValue;
        temp1.step = stepValue;
    }

    function updateAuction(uint tokenId, uint startValue, uint stepValue) public{
        user storage temp = allUsers[msg.sender];
        Auction storage temp1 = temp.allAuctions[tokenId];
        require(temp1.state == 1, "Auction Invalid");
        require(stepValue > startValue*5/100, "StepValue Must be greater than 5 %");
        temp1.startingValue = startValue;
        temp1.step = stepValue;
    }

    function cancelAuction(uint tokenId) public{
        user storage temp = allUsers[msg.sender];
        Auction storage temp1 = temp.allAuctions[tokenId];
        require(temp1.state == 1, "Auction Invalid");
        temp1.state = 3;
        ERC721(NFTaddress).safeTransferFrom(address(this), msg.sender, tokenId);
        for(uint j=0; j<temp1.allBidsAddresses.length; j++){
            uint temp2 = temp1.allBids[temp1.allBidsAddresses[j]];
            temp1.allBids[temp1.allBidsAddresses[j]] = 0;
            payable(temp1.allBidsAddresses[j]).transfer(temp2);
        }
    }

    function assertAuction(uint tokenId, address buyer) public{
        require(allUsers[msg.sender].allAuctions[tokenId].state == 1, "Auction Invalid");
        user storage temp = allUsers[msg.sender];
        Auction storage temp1 = temp.allAuctions[tokenId];
        uint tempval = temp1.allBids[buyer];
        temp1.allBids[buyer] = 0;
        ERC721(NFTaddress).safeTransferFrom(address(this), buyer, tokenId);
        payable(msg.sender).transfer(tempval);
        endAuction(tokenId);
        Details storage temp2 = VentureDetails[tokenId];
        temp2.currentOwner = buyer;
        temp2.acquire = 1;
    }

    function endAuction(uint tokenId) internal{
        user storage temp = allUsers[msg.sender];
        Auction storage temp1 = temp.allAuctions[tokenId];
        temp1.state = 2;
        for(uint i=0; i<temp1.allBidsAddresses.length; i++){
            if(temp1.allBids[temp1.allBidsAddresses[i]] == 0) continue;
            uint tempval = temp1.allBids[temp1.allBidsAddresses[i]];
            temp1.allBids[temp1.allBidsAddresses[i]] = 0;
            payable(temp1.allBidsAddresses[i]).transfer(tempval);
        }
    }

    function placeBid(address auc, uint tokenId) public payable{
        require(allUsers[auc].allAuctions[tokenId].state == 1 ,"Auction Invalid"); 
        require((allUsers[auc].allAuctions[tokenId].highestBidderValue)+(allUsers[auc].allAuctions[tokenId].step)  <= allUsers[auc].allAuctions[tokenId].allBids[msg.sender]+msg.value, "The Amount is less than the Highest Bid");
        user storage temp = allUsers[auc];
        Auction storage temp1 = temp.allAuctions[tokenId];
        bool chk = false;
        for(uint i=0; i<temp1.allBidsAddresses.length; i++){
            if(msg.sender == temp1.allBidsAddresses[i]){
                chk = true;
                break;
            }
        }
        if(chk == false){
            temp1.allBidsAddresses.push(msg.sender);
        }
        if(temp1.allBids[msg.sender] != 0) payable(msg.sender).transfer(temp1.allBids[msg.sender]);
        temp1.allBids[msg.sender] = msg.value;
        temp1.highestBidder = msg.sender;
        temp1.highestBidderValue = temp1.allBids[msg.sender];
    }

    function cancelBid(address auc, uint tokenId) public{
        require(allUsers[auc].allAuctions[tokenId].state == 1, "Auction Invalid");
        user storage temp = allUsers[auc];
        Auction storage temp1 = temp.allAuctions[tokenId];
        uint tempval = temp1.allBids[msg.sender];
        temp1.allBids[msg.sender] = 0;
        payable(msg.sender).transfer(tempval);
        if(msg.sender == temp1.highestBidder){
            temp1.highestBidder = 0x0000000000000000000000000000000000000000;
            temp1.highestBidderValue = 0; 
            address x = temp1.allBidsAddresses[0];
            uint y = temp1.allBids[temp1.allBidsAddresses[0]];
            for(uint i=0; i<temp1.allBidsAddresses.length; i++){
                if(temp1.allBids[temp1.allBidsAddresses[i]] > y){
                    y = temp1.allBids[temp1.allBidsAddresses[i]];
                    x = temp1.allBidsAddresses[i];
                }
            }
            if(x != temp1.highestBidder){
                temp1.highestBidder = x;
                temp1.highestBidderValue = y;
            }
        }
    }

    function donateProperty(address reciever, uint tokenId) public{
        require(VentureDetails[tokenId].state == 4, "Invalid Token ID");
        ERC721 token = ERC721(NFTaddress);
        require(token.ownerOf(tokenId) == msg.sender, "You must own the NFT");
        require(token.isApprovedForAll(msg.sender, address(this)), "Approval Not Valid");
        token.safeTransferFrom(msg.sender, reciever, tokenId);
        Details storage temp = VentureDetails[tokenId];
        temp.currentOwner = reciever;
        temp.acquire = 3;
    }

    function placeListing(uint tokenId, uint listVal) public{
        require(VentureDetails[tokenId].state == 4, "Invalid Token ID");
        user storage temp = allUsers[msg.sender];
        Listing storage temp1 = temp.allListings[tokenId];
        require(temp1.state == 0 || temp1.state == 2 || temp1.state == 3, "Listing is Active");
        ERC721 token = ERC721(NFTaddress);
        require(token.ownerOf(tokenId) == msg.sender, "You must own the NFT");
        require(token.isApprovedForAll(owner, address(this)), "Approval Not Valid");
        token.safeTransferFrom(msg.sender, address(this), tokenId);
        if(temp.state == 0){
            allUsersAdresses.push(msg.sender);
            temp.state = 1;
        }
        if(temp1.state == 0){
            temp.allTokensListing.push(tokenId);
        }
        temp1.state = 1;
        temp1.listingValue = listVal;
    }

    function buyListing(address auc, uint tokenId) public payable{
        require(allUsers[auc].allListings[tokenId].state == 1, "Listing Invalid");
        require(allUsers[auc].allListings[tokenId].listingValue == msg.value, "Place Match the Listing Price");
        user storage temp = allUsers[auc];
        Listing storage temp1 = temp.allListings[tokenId];
        temp1.state = 2;
        temp1.buyer = msg.sender;
        ERC721(NFTaddress).safeTransferFrom(address(this), msg.sender, tokenId);
        payable(auc).transfer(msg.value);
        Details storage temp2 = VentureDetails[tokenId];
        temp2.currentOwner = msg.sender;
        temp2.acquire = 2;
    }

    function updateListing(uint tokenId, uint listVal) public{
        require(allUsers[msg.sender].allListings[tokenId].state == 1, "Lisiting Invalid");
        user storage temp = allUsers[msg.sender];
        Listing storage temp1 = temp.allListings[tokenId];
        temp1.listingValue = listVal;
    }

    function cancelListing(uint tokenId) public{
        require(allUsers[msg.sender].allListings[tokenId].state == 1, "Lisiting Invalid");
        user storage temp = allUsers[msg.sender];
        Listing storage temp1 = temp.allListings[tokenId];
        temp1.state = 3;
        ERC721(NFTaddress).safeTransferFrom(address(this), msg.sender, tokenId);
    }

    function allAuctions() public view returns(string memory res){
        user storage temp = allUsers[msg.sender];
        if(temp.allTokens.length == 0) return "";
        res = string.concat("{", '"',"User",'"', ":", '"',Strings.toHexString(uint160(msg.sender), 20),'"', ",", '"',"Auctions",'"', ":{");
        for(uint i=0; i<temp.allTokens.length; i++){
            Auction storage temp1 = temp.allAuctions[temp.allTokens[i]];
            res = string.concat(res, '"',Strings.toString(temp.allTokens[i]),'"', ":{",'"',"State",'"',":",'"', Strings.toString(temp1.state),'"', ",",'"',"StartingValue",'"',":",'"',Strings.toString(temp1.startingValue),'"',",",'"',"HighestBidder",'"',":",'"',Strings.toHexString(uint160(temp1.highestBidder), 20),'"', ",", '"',"HighestBidderValue",'"', ":", '"',Strings.toString(temp1.highestBidderValue),'"', "}");
            if(i+1 != temp.allTokens.length){
                res = string.concat(res, ",");
            }
        }
        res = string.concat(res, " } }");
        return res;
    }

    function allListings() public view returns(string memory res){
        user storage temp = allUsers[msg.sender];
        if(temp.allTokensListing.length == 0) return "";
        res = string.concat("{", '"',"User",'"', ":", '"',Strings.toHexString(uint160(msg.sender), 20),'"', ",", '"',"Listings",'"', ":{");
        for(uint i=0; i<temp.allTokensListing.length; i++){
            Listing storage temp1 = temp.allListings[temp.allTokensListing[i]];
            res = string.concat(res, '"',Strings.toString(temp.allTokensListing[i]),'"', ":{", '"',"State",'"',":",'"',Strings.toString(temp1.state),'"',",",'"',"ListingValue",'"',":",'"',Strings.toString(temp1.listingValue),'"', "}");
            if(i+1 != temp.allTokensListing.length){
                res = string.concat(res, ",");
            }
        }
        res = string.concat(res, " } }");
        return res;
    }

    function viewProperties() public view returns(string memory res){
        res = string.concat(res, "{");//string.concat("{ "));
        if(allVentureDetails.length == 0) return "";
        for(uint i=0; i<allVentureDetails.length; i++){
            Details memory temp = VentureDetails[allVentureDetails[i]];
            res = string.concat(res, '"',Strings.toString(allVentureDetails[i]), '"', ":{", '"', "CurrentOwner", '"', ":", '"', Strings.toHexString(uint160(temp.currentOwner), 20),'", "', "AcquiredState", '"',":", '"',Strings.toString(temp.acquire),'"', "}");
            if(i+1 != allVentureDetails.length){
                res = string.concat(res, ",");
            }
        }
        res = string.concat(res, "}");
        return res;
    }

    function viewWhole() public view returns(string memory res){
        if(allUsersAdresses.length == 0) return "";
        res = string.concat("{",'"',"Auctions",'"', ":{");
        for(uint i=0; i<allUsersAdresses.length; i++){
            user storage temp = allUsers[allUsersAdresses[i]];
            if(temp.allTokens.length == 0) return "";
            res = string.concat(res, '"', Strings.toHexString(uint160(allUsersAdresses[i]), 20),'"', ": {");
            for(uint j=0; j<temp.allTokens.length; j++){
                Auction storage tempA = temp.allAuctions[temp.allTokens[j]];
                res = string.concat(res, '"',Strings.toString(temp.allTokens[j]),'"', ":{",'"',"State",'"', ":", '"',Strings.toString(tempA.state),'"', ",",'"',"StartingValue",'"', ":", '"',Strings.toString(tempA.startingValue),'"', ",",'"',"Step",'"', ":", '"',Strings.toString(tempA.step),'"', ",",'"',"HighestBidderAddress",'"', ":", '"',Strings.toHexString(uint160(tempA.highestBidder), 20),'"', ",",'"',"HighestBidderValue",'"', ":", '"',Strings.toString(tempA.highestBidderValue),'"', "}");
                if(j+1 != temp.allTokens.length){
                    res = string.concat(res, ",");
                }
            }
            res = string.concat(res, "}");
            if(i+1 != allUsersAdresses.length){
                res = string.concat(res, ",");
            }
        }
        res = string.concat(res, "},",'"',"Listings",'"', ":{");
        for(uint i=0; i<allUsersAdresses.length; i++){
            user storage temp = allUsers[allUsersAdresses[i]];
            res = string.concat(res, '"',Strings.toHexString(uint160(allUsersAdresses[i]), 20),'"', ": {");
            for(uint j=0; j<temp.allTokensListing.length; j++){
                Listing storage tempA = temp.allListings[temp.allTokensListing[j]];
                res = string.concat(res, '"',Strings.toString(temp.allTokensListing[j]),'"', ":{",'"',"State",'"', ":", '"',Strings.toString(tempA.state),'"', ",",'"',"ListingValue",'"', ":", '"',Strings.toString(tempA.listingValue),'"', "}");
                if(j+1 != temp.allTokensListing.length){
                    res = string.concat(res, ",");
                }
            }
            res = string.concat(res, "}");
            if(i+1 != allUsersAdresses.length){
                res = string.concat(res, ",");
            }
        }
        res = string.concat(res, "} }");
        return res;
    }
}