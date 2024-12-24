const NFTaddress = '0x1861b73B1a05B5700F3472b3Fc1811F058Df149C'
const NFTabi = [
{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "approved",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Approval",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"indexed": false,
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "ApprovalForAll",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "previousOwner",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}
	],
	"name": "OwnershipTransferred",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"indexed": true,
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "Transfer",
	"type": "event"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "approve",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}
	],
	"name": "balanceOf",
	"outputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	},
	{
		"internalType": "string[]",
		"name": "tokenURIs",
		"type": "string[]"
	}
	],
	"name": "batchMintNFT",
	"outputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "getApproved",
	"outputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	}
	],
	"name": "isApprovedForAll",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	},
	{
		"internalType": "string",
		"name": "tokenURI",
		"type": "string"
	}
	],
	"name": "mintNFT",
	"outputs": [
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "name",
	"outputs": [
	{
		"internalType": "string",
		"name": "",
		"type": "string"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "owner",
	"outputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "ownerOf",
	"outputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "bytes",
		"name": "data",
		"type": "bytes"
	}
	],
	"name": "safeTransferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "operator",
		"type": "address"
	},
	{
		"internalType": "bool",
		"name": "approved",
		"type": "bool"
	}
	],
	"name": "setApprovalForAll",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "bytes4",
		"name": "interfaceId",
		"type": "bytes4"
	}
	],
	"name": "supportsInterface",
	"outputs": [
	{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "symbol",
	"outputs": [
	{
		"internalType": "string",
		"name": "",
		"type": "string"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "tokenURI",
	"outputs": [
	{
		"internalType": "string",
		"name": "",
		"type": "string"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "from",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "to",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "transferFrom",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "newOwner",
		"type": "address"
	}
	],
	"name": "transferOwnership",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256[]",
		"name": "tokenIDs",
		"type": "uint256[]"
	}
	],
	"name": "viewBatchURI",
	"outputs": [
	{
		"internalType": "string[]",
		"name": "",
		"type": "string[]"
	}
	],
	"stateMutability": "view",
	"type": "function"
}
]
const CONTRACTaddress = '0xca13AE31cd4f0cE082a0b52Be84b3e696C8d5b99';
const CONTRACTabi = [
{
	"inputs": [
	{
		"internalType": "uint256[]",
		"name": "tokens",
		"type": "uint256[]"
	}
	],
	"name": "addProperties",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "address",
		"name": "buyer",
		"type": "address"
	}
	],
	"name": "assertAuction",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "auc",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "buyListing",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "cancelAuction",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "auc",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "cancelBid",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "cancelListing",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "startValue",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "stepValue",
		"type": "uint256"
	}
	],
	"name": "createAuction",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "reciever",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "donateProperty",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	},
	{
		"internalType": "address",
		"name": "",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	},
	{
		"internalType": "bytes",
		"name": "",
		"type": "bytes"
	}
	],
	"name": "onERC721Received",
	"outputs": [
	{
		"internalType": "bytes4",
		"name": "",
		"type": "bytes4"
	}
	],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "auc",
		"type": "address"
	},
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	}
	],
	"name": "placeBid",
	"outputs": [],
	"stateMutability": "payable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "listVal",
		"type": "uint256"
	}
	],
	"name": "placeListing",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "address",
		"name": "nftAddress",
		"type": "address"
	},
	{
		"internalType": "uint256[]",
		"name": "tokens",
		"type": "uint256[]"
	}
	],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "startValue",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "stepValue",
		"type": "uint256"
	}
	],
	"name": "updateAuction",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [
	{
		"internalType": "uint256",
		"name": "tokenId",
		"type": "uint256"
	},
	{
		"internalType": "uint256",
		"name": "listVal",
		"type": "uint256"
	}
	],
	"name": "updateListing",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"inputs": [],
	"name": "allAuctions",
	"outputs": [
	{
		"internalType": "string",
		"name": "res",
		"type": "string"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "allListings",
	"outputs": [
	{
		"internalType": "string",
		"name": "res",
		"type": "string"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "viewProperties",
	"outputs": [
	{
		"internalType": "string",
		"name": "res",
		"type": "string"
	}
	],
	"stateMutability": "view",
	"type": "function"
},
{
	"inputs": [],
	"name": "viewWhole",
	"outputs": [
	{
		"internalType": "string",
		"name": "res",
		"type": "string"
	}
	],
	"stateMutability": "view",
	"type": "function"
}]

var Main = {
	data() {
		return {
			fullscreenLoading: true
		}
	},
	mounted: function(){
		window.text = this;
	},
	methods: {
		endLoading(){
			console.log("hi")
			this.fullscreenLoading = false;
		},
		async createAuction(){
			if(document.getElementById('web3').innerHTML != "Web3"){
				this.$message({
					message: 'Connect to Web3!',
					type: 'warning'
				});
				return
			}
			if(document.getElementById('approveContract').innerHTML == "Approve Contract"){
				this.$message({
					message: 'Approve Contract!',
					type: 'warning'
				});
				return
			}
			this.$prompt('Enter Token ID, Starting Value, Step Value', 'Values', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel'
			}).then((valuex) => {
				valuex = valuex.value.split(",")
				this.$confirm("Token ID : "+valuex[0]+"<br>"+"Starting Value : "+valuex[1]+"<br>"+"Step Value : "+valuex[2]+"<br> Confirm to Create Auction!", 'Warning', {
					confirmButtonText: 'Confirm',
					dangerouslyUseHTMLString: true,
					cancelButtonText: 'Cancel',
					type: 'warning'
				}).then(async () => {
					let CONTRACTContract = await new ethers.Contract(CONTRACTaddress, CONTRACTabi, signers)
					let placeBid = await CONTRACTContract.createAuction(String(valuex[0]), String(valuex[1]), String(valuex[2]))
					this.$message({
						type: 'success',
						message: 'Auction Created!'
					});
				}).catch((hel) => {
					console.log(hel)
					this.$message({
						type: 'info',
						message: 'Auction Creation Canceled!'
					});          
				});
			}).catch(() => {
				this.$message({
					type: 'info',
					message: 'Input canceled'
				});       
			});
		},
		async createListing(){
			if(document.getElementById('web3').innerHTML != "Web3"){
				this.$message({
					message: 'Connect to Web3!',
					type: 'warning'
				});
				return
			}
			if(document.getElementById('approveContract').innerHTML == "Approve Contract"){
				this.$message({
					message: 'Approve Contract!',
					type: 'warning'
				});
				return
			}
			this.$prompt('Enter Token ID, Listing Value', 'Values', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel'
			}).then((valuex) => {
				valuex = valuex.value.split(",")
				this.$confirm("Token ID : "+valuex[0]+"<br>"+"Listing Value : "+valuex[1]+"<br>"+" Confirm to Create Listing!", 'Warning', {
					confirmButtonText: 'Confirm',
					dangerouslyUseHTMLString: true,
					cancelButtonText: 'Cancel',
					type: 'warning'
				}).then(async () => {
					let CONTRACTContract = await new ethers.Contract(CONTRACTaddress, CONTRACTabi, signers)
					let placeBid = await CONTRACTContract.placeListing(String(valuex[0]), String(valuex[1]))
					this.$message({
						type: 'success',
						message: 'Listing Created!'
					});
				}).catch((hel) => {
					console.log(hel)
					this.$message({
						type: 'info',
						message: 'Listing Creation Canceled!'
					});          
				});
			}).catch(() => {
				this.$message({
					type: 'info',
					message: 'Input canceled'
				});       
			});
		},

		async donate(){
			if(document.getElementById('web3').innerHTML != "Web3"){
				this.$message({
					message: 'Connect to Web3!',
					type: 'warning'
				});
				return
			}
			if(document.getElementById('approveContract').innerHTML == "Approve Contract"){
				this.$message({
					message: 'Approve Contract!',
					type: 'warning'
				});
				return
			}
			this.$prompt('Enter Token ID, Reciever Address', 'Values', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel'
			}).then((valuex) => {
				valuex = valuex.value.split(",")
				this.$confirm("Donating Token ID : "+valuex[0]+"<br>"+"Reciever Address : "+valuex[1]+"<br>"+" Confirm to Donate Property!", 'Warning', {
					confirmButtonText: 'Confirm',
					dangerouslyUseHTMLString: true,
					cancelButtonText: 'Cancel',
					type: 'warning'
				}).then(async () => {
					let CONTRACTContract = await new ethers.Contract(CONTRACTaddress, CONTRACTabi, signers)
					console.log(typeof valuex[1], typeof parseInt(valuex[0]))
					let donate = await CONTRACTContract.donateProperty(String(valuex[1]), String(valuex[0]))
					this.$message({
						type: 'success',
						message: 'Donation Successful!'
					});
				}).catch((hel) => {
					console.log(hel)
					this.$message({
						type: 'info',
						message: 'Donation Canceled!'
					});          
				});
			}).catch(() => {
				this.$message({
					type: 'info',
					message: 'Input canceled'
				});       
			});		
		}
	}
}
var chkng = Vue.extend(Main)
new chkng().$mount('#mainDiv')
window.userWalletAddress = null
window.signers = null

let PROPERTIESData = null
let URIData = null
let IPFSData = []
let whole = {"Auction" : {"Live":{}, "Ended":{}, "Cancled":{}}, "Listing" : {"Live":{}, "Ended":{}, "Cancled":{}}}

async function login(){
	var temp = document.getElementById('web3')
	let temp1 = document.getElementById('approveContract')
	if(temp.innerHTML == "Connect to Web3"){
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
		.catch((e) => {
			console.error(e.message)
			return
		})
		if (!accounts) { return }

		window.userWalletAddress = accounts[0]
		document.getElementById('userAddress').innerHTML = window.userWalletAddress
		temp.style.backgroundColor = "var(--buttonGreen)"
		temp.innerHTML = "Web3"
		const provider = new ethers.providers.Web3Provider(window.ethereum)
		await provider.send("eth_requestAccounts", [])
		window.signers = provider.getSigner()
		let tempx = await signers.getAddress()
		let NFTContract = await new ethers.Contract(NFTaddress, NFTabi, signers)
		tempy = await NFTContract.isApprovedForAll(tempx, CONTRACTaddress)
		if(tempy != true){
			temp1.innerHTML = "Approve Contract"
			temp1.style.backgroundColor = "var(--buttonRed)"
		}else{
			temp1.innerHTML = "Approved"
			temp1.style.backgroundColor = "var(--buttonGreen)"
		}
	}else{
		let change = document.getElementById('userAddress')
		change.innerHTML = "Not Connected"

		window.userWalletAddress = null
		window.signers = null
		temp.innerHTML = "Connect to Web3"
		temp.style.backgroundColor = "var(--buttonRed)"
		temp1.innerHTML = "Approve Contract"
		temp1.style.backgroundColor = "var(--buttonRed)"
	}
}
var nftDiv = 0;
async function onLoad(){
	await login()
	document.body.style.zoom = "80%";
	$(document).ready(function(){
		var keyCodes = [61, 107, 173, 109, 187, 189];

		$(document).keydown(function(event) {   
			if (event.ctrlKey==true && (keyCodes.indexOf(event.which) != -1)) {
				event.preventDefault();
			}
		});
	});
	const provider = new ethers.providers.Web3Provider(window.ethereum)
	await provider.send("eth_requestAccounts", [])
	window.signers = provider.getSigner()
	let NFTContract = await new ethers.Contract(NFTaddress, NFTabi, signers)
	let CONTRACTContract = await new ethers.Contract(CONTRACTaddress, CONTRACTabi, signers)
	let temp = await CONTRACTContract.viewProperties()
	PROPERTIESData = JSON.parse(temp)
	let allURI = Object.keys(PROPERTIESData)
	URIData = await NFTContract.viewBatchURI(allURI)
	document.getElementById('nfts').innerHTML += "<div class='dummy'></div><div class='nftDivs' id='firstNFT' style='margin-left: 0em;'></div>"
	var tempChk = 0;
	var func = 0;
	for(let i=0; i<URIData.length; i++){
		tempChk++;
		const nft = URIData[i].replace("ipfs://", "https://ipfs.io/ipfs/")
		//const nft = URIData[i].replace("ipfs://", "https://infura-ipfs.io/ipfs/")
		const data = await fetch(nft)
		const json = await data.json()
		IPFSData.push(json)
		document.getElementsByClassName('nftDivs')[nftDiv].innerHTML +=

		"<div class='nft' onclick='viewNftHome("+(i)+", \""+(json.image.replace("ipfs://", "https://ipfs.io/ipfs/").replace("/", "\/"))+"\", \""+(json.description)+"\", \""+(json.name)+"\", "+func+")'><div class='main'><img class='tokenImage' src='"+(json.image.replace("ipfs://", "https://ipfs.io/ipfs/"))+"' alt='NFT'/><p class='description'>"+(json.description)+"</p><hr style='margin-top: 1em'><h3>"+(json.name)+"</h3></div></div></div>"
		
		if (tempChk%5 == 0 && i+1<URIData.length){
			console.log(i)
			document.getElementById('nfts').innerHTML += "<div class='dummy'></div><div class='nftDivs'></div>"
			nftDiv++;
		}
		func++;
		if(func == 5) func = 0;
		if(PROPERTIESData[i+1].CurrentOwner == window.userWalletAddress) document.getElementById("myNFTs").innerHTML += "<div class='nft' onclick='viewMyNft("+(i)+", \""+(json.image.replace("ipfs://", "https://ipfs.io/ipfs/").replace("/", "\/"))+"\", \""+(json.description)+"\", \""+(json.name)+"\")'><div class='main'><img class='tokenImage' src='"+(json.image.replace("ipfs://", "https://ipfs.io/ipfs/"))+"' alt='NFT'/><p class='description'>"+(json.description)+"</p><hr style='margin-top: 1em'><h3>"+(json.name)+"</h3></div></div></div>"
	}
	temp = await CONTRACTContract.viewWhole()
	if(temp != ""){
		temp = JSON.parse(temp)
		console.log(temp)
		let users = Object.keys(temp.Auctions)
		for(let i=0; i<users.length; i++){
			let tokens = Object.keys(temp.Auctions[users[i]])
			for(let j=0; j<tokens.length; j++){
				if(temp.Auctions[users[i]][tokens[j]]["State"] == 1){
					whole.Auction.Live[tokens[j]] = temp.Auctions[users[i]][tokens[j]];
					whole.Auction.Live[tokens[j]]["Users"] = users[i];
				}else if(temp.Auctions[users[i]][tokens[j]]["State"] == 2){
					whole.Auction.Ended[tokens[j]] = temp.Auctions[users[i]][tokens[j]];
					whole.Auction.Ended[tokens[j]]["Users"] = users[i];
				}else{
					whole.Auction.Cancled[tokens[j]] = temp.Auctions[users[i]][tokens[j]];
					whole.Auction.Cancled[tokens[j]]["Users"] = users[i];
				}
				nft = IPFSData[tokens[j]-1]
				let value = parseInt(temp.Auctions[users[i]][tokens[j]]["HighestBidderValue"])
				if(value == 0) value = parseInt(temp.Auctions[users[i]][tokens[j]]["StartingValue"])
					value += parseInt(temp.Auctions[users[i]][tokens[j]]["Step"])
				if(temp.Auctions[users[i]][tokens[j]]["State"] == 1){
					document.getElementById('allAuctions').innerHTML += "<div class='nft' style='margin-bottom: 1em; min-height: 29.3em; max-height: 29.3em'><div class='main'><h3 style='min-height: 2.2em'>"+(nft.name)+"</h3><hr style='margin-top: 0.5em; margin-bottom: 0.5em; border-color: white '><img class='tokenImage' src='"+(nft.image.replace("ipfs://", "https://ipfs.io/ipfs/"))+"' alt='NFT'/><p class='description'>"+(nft.description)+"<div class='tokenInfo'><div class='price'><ins style='margin-top: -0.2em'>◘</ins>Bid Amount - &nbsp<p>"+(value)+"</p></div></div><div><button id='nftBtn1' onclick='viewNft(\"Auction\", "+(tokens[j])+")'>View More</button><button id='nftBtn2' type='text' @click='placeBid("+(tokens[j])+",\""+(users[i])+"\", "+value+")'>Place Bid</button><button id='nftBtn3' type='text' @click='cancelBid("+(tokens[j])+",\""+(users[i])+"\")'>Cancel Bid</button></div></div></div></div>"
				}
			}

			tokens = Object.keys(temp.Listings[users[i]])
			for(let j=0; j<tokens.length; j++){
				if(temp.Listings[users[i]][tokens[j]]["State"] == 1){
					whole.Listing.Live[tokens[j]] = temp.Listings[users[i]][tokens[j]];
					whole.Listing.Live[tokens[j]]["Users"] = users[i];
				}else if(temp.Listings[users[i]][tokens[j]]["State"] == 2){
					whole.Listing.Ended[tokens[j]] = temp.Listings[users[i]][tokens[j]];
					whole.Listing.Ended[tokens[j]]["Users"] = users[i];
				}else{
					whole.Listing.Cancled[tokens[j]] = temp.Listings[users[i]][tokens[j]];
					whole.Listing.Cancled[tokens[j]]["Users"] = users[i];
				}
				nft = IPFSData[tokens[j]-1]
				let value = parseInt(temp.Listings[users[i]][tokens[j]]["ListingValue"])
				if(temp.Listings[users[i]][tokens[j]]["State"] == 1){
					document.getElementById('allListings').innerHTML += "<div class='nft' style='margin-bottom: 1.25em; min-height: 27em; max-height: 27em'><div class='main'><h3 style='min-height: 2.2em'>"+(nft.name)+"</h3><hr style='margin-top: 0.5em; margin-bottom: 0.5em; border-color: white'><img class='tokenImage' src='"+(nft.image.replace("ipfs://", "https://ipfs.io/ipfs/"))+"' alt='NFT'/><p class='description'>"+(nft.description)+"<div class='tokenInfo'><div class='price'><ins style='margin-top: -0.2em'>◘</ins>Bid Amount - &nbsp<p>"+(value)+"</p></div></div><div><button id='nftBtn1' onclick='viewNft(\"Listing\", "+(tokens[j])+")'>View More</button><button id='nftBtn2' type='text' @click='buyListing("+(tokens[j])+",\""+(users[i])+"\","+value+")'>Buy Listing</button></div></div></div></div>"
				}
			}	
			var Main1 = {
				methods: {
					async buyListing(tokenId, userId, value) {
						if(document.getElementById('web3').innerHTML != "Web3"){
							this.$message({
								message: 'Connect to Web3!',
								type: 'warning'
							});
							return
						}
						if(document.getElementById('approveContract').innerHTML == "Approve Contract"){
							this.$message({
								message: 'Approve Contract!',
								type: 'warning'
							});
							return
						}
						this.$confirm("Listing Value : "+value+"<br>"+"Token ID : "+tokenId+"<br>"+"Confirm Purchase!", 'Warning', {
							dangerouslyUseHTMLString: true,
							confirmButtonText: 'Purchase',
							cancelButtonText: 'Cancel',
							type: 'warning'
						}).then(async () => {
							let CONTRACTContract = await new ethers.Contract(CONTRACTaddress, CONTRACTabi, signers)
							let placeBid = await CONTRACTContract.buyListing(userId, tokenId, { value: ethers.utils.parseUnits(String(value), "wei")})
							this.$message({
								type: 'success',
								message: 'Purchase Successful!'
							});
						}).catch(() => {
							this.$message({
								type: 'info',
								message: 'Purchase Canceled!'
							});          
						});
					}
				}
			}
			var chkng1 = Vue.extend(Main1)
			new chkng1().$mount('#allListings')

			var Main2 = {
				methods: {
					async placeBid(tokenId, userId, value){
						if(document.getElementById('web3').innerHTML != "Web3"){
							this.$message({
								message: 'Connect to Web3!',
								type: 'warning'
							});
							return
						}
						if(document.getElementById('approveContract').innerHTML == "Approve Contract"){
							this.$message({
								message: 'Approve Contract!',
								type: 'warning'
							});
							return
						}

						this.$notify({title: 'Prompt', message: 'Any Previously Placed Bid will be Re-funded!', duration: 0});
						this.$prompt('Enter Bid Value', 'Price', {
							confirmButtonText: 'OK',
							cancelButtonText: 'Cancel'
						}).then((valuex) => {
							valuex = valuex.value
							if(valuex <= value){
								this.$message({
									type: 'warning',
									message: 'Invalid Bid Amount'
								});
								return
							}
							this.$confirm("Bid Value : "+valuex+"<br>"+"Token ID : "+tokenId+"<br>"+"Confirm to Place Bid!", 'Warning', {
								confirmButtonText: 'Purchase',
								cancelButtonText: 'Cancel',
								dangerouslyUseHTMLString: true,
								type: 'warning'
							}).then(async () => {

								let CONTRACTContract = await new ethers.Contract(CONTRACTaddress, CONTRACTabi, signers)
								let placeBid = await CONTRACTContract.placeBid(userId, tokenId, { value: ethers.utils.parseUnits(valuex, "wei")})
								console.log("hello")
								this.$message({
									type: 'success',
									message: 'Bid Placed!'
								});
							}).catch(() => {
								this.$message({
									type: 'info',
									message: 'Bid Canceled!'
								});          
							});
						}).catch(() => {
							this.$message({
								type: 'info',
								message: 'Input canceled'
							});       
						});
					},
					async cancelBid(tokenId, userId){
						if(document.getElementById('web3').innerHTML != "Web3"){
							this.$message({
								message: 'Connect to Web3!',
								type: 'warning'
							});
							return
						}
						if(document.getElementById('approveContract').innerHTML == "Approve Contract"){
							this.$message({
								message: 'Approve Contract!',
								type: 'warning'
							});
							return
						}
						this.$confirm("Confirm to Cancel Your Bid!", 'Warning', {
							confirmButtonText: 'Cancel Bid',
							cancelButtonText: 'No',
							type: 'warning'
						}).then(async () => {
							let CONTRACTContract = await new ethers.Contract(CONTRACTaddress, CONTRACTabi, signers)
							let placeBid = await CONTRACTContract.cancelBid(userId, tokenId)
							this.$message({
								type: 'success',
								message: 'Bid Canceled!'
							});
						}).catch(() => {
							this.$message({
								type: 'info',
								message: 'Bid not Canceled!'
							});          
						});
					}
				}
			}
			var chkng2 = Vue.extend(Main2)
			new chkng2().$mount('#allAuctions')
		}
	}
	window.text.endLoading();
	console.log(whole)
	console.log(PROPERTIESData)
	console.log(URIData)
	console.log(IPFSData)
	myAuctions()
	myListings()
}
onLoad()

function slideLeft(){
	let temp = document.getElementById('firstNFT')
	if(temp.style.marginLeft != "0em"){
		let x = temp.style.marginLeft
		x = parseInt(x.substring(0, x.length-2))
		x += 98
		if(x == 0) temp.style.marginLeft = "0em"
			else temp.style.marginLeft = x+"em"
	}
}

function slideRight(){
	let temp = document.getElementById('firstNFT')
	if(temp.style.marginLeft != "-"+(nftDiv*98)+"em"){
		let x = temp.style.marginLeft
		if(x == "0em"){
			temp.style.marginLeft = "-98em"
			return
		}
		x = parseInt(x.substring(0,x.length-2))
		x -= 98
		console.log(x+"em")
		temp.style.marginLeft = x+"em"
	}
}

async function approveContract(){
	let NFTContract = await new ethers.Contract(NFTaddress, NFTabi, signers)
	let temp = document.getElementById('approveContract')
	const provider = new ethers.providers.Web3Provider(window.ethereum)
	await provider.send("eth_requestAccounts", [])
	window.signers = await provider.getSigner()
	if(userWalletAddress == null){
		alert("Connect to Web3")
		return
	}
	let tempx = await signers.getAddress()
	if(tempx.toLowerCase() != userWalletAddress){
		alert("Re-Connect to Web3")
		return
	}
	if(temp.innerHTML == "Approved"){
		await NFTContract.setApprovalForAll(CONTRACTaddress, false)
		temp.innerHTML = "Approve Contract"
		temp.style.backgroundColor = "var(--buttonRed)"
	}else{
		await NFTContract.setApprovalForAll(CONTRACTaddress, true)
		temp.innerHTML = "Approved"
		temp.style.backgroundColor = "var(--buttonGreen)"
	}
}

async function viewMore(x){
	document.getElementById('viewLoad').style.display = "block";
	var Details = document.getElementsByClassName('viewMoreData')
	Details[2].innerHTML = "Current Owner : " + PROPERTIESData[x].CurrentOwner
	let temp = PROPERTIESData[x].AcquiredState
	if(temp == 1) Details[3].innerHTML = "Acquired State : Auction"
		else if(temp == 2) Details[3].innerHTML = "Acquired State : Listing"
			else if(temp == 3) Details[3].innerHTML = "Acquired State : Donation"
				else Details[3].innerHTML = "Acquired State : Initial"
			const json = IPFSData[x-1]
			Details[0].innerHTML = json.name
			Details[1].src = json.image.replace("ipfs://", "https://ipfs.io/ipfs/")
			Details[4].innerHTML = "Description : " + json.description
			Details[5].innerHTML = "Address : " + json.attributes[0].value
			Details[6].innerHTML = "Latitude : " + json.attributes[1].value
			Details[7].innerHTML = "Longitude : " + json.attributes[2].value
			Details[8].innerHTML = "North Point : " + json.attributes[3].value
			Details[9].innerHTML = "East Point : " + json.attributes[4].value
			document.getElementById('view').style.display = "block";
			document.getElementById('viewLoad').style.display = "none";
		}

		async function viewMoreSale(x, user, mode, state){
			document.getElementById('viewLoad').style.display = "block";
			var Details = document.getElementsByClassName('viewMoreSaleData')
			let temp = whole[mode]
			temp = temp[state]
			temp = temp[x]
			console.log(temp)
			if(mode == "Auction"){
				Details[3].style.display = "block"
				Details[4].style.display = "block"
				Details[5].style.display = "block"
				if(state == "Cancled"){
					Details[3].style.display = "none"
					Details[4].style.display = "none"
					Details[5].style.display = "none"
				}
				else{
					Details[3].style.display = "block"
					Details[4].style.display = "block"
					Details[5].style.display = "block"
					Details[3].innerHTML = "Highest Bidder : " + temp.HighestBidderAddress
					Details[4].innerHTML = "Highest Bid : " + temp.HighestBidderValue	
					Details[5].innerHTML = "Step Value : " + temp.Step
				}
				Details[2].innerHTML = mode+" Owner : " + user

			}else{
				Details[3].style.display = "block"
				Details[4].style.display = "block"
				Details[5].style.display = "block"
				if(state == "Live" || state == "Cancled") Details[3].style.display = "none"
					else{
						Details[3].style.display = "block"
						Details[3].innerHTML = "Buyer : " + temp.buyer
					}
					Details[2].innerHTML = mode+" Owner : " + user
					Details[4].innerHTML = "Listing Value : " + temp.ListingValue
					Details[5].style.display = "none"
				}
				const json = IPFSData[x-1]
				Details[0].innerHTML = json.name
				Details[1].src = json.image.replace("ipfs://", "https://ipfs.io/ipfs/")
				Details[6].innerHTML = "Description : " + json.description
				Details[7].innerHTML = "Address : " + json.attributes[0].value
				Details[8].innerHTML = "Latitude : " + json.attributes[1].value
				Details[9].innerHTML = "Longitude : " + json.attributes[2].value
				Details[10].innerHTML = "North Point : " + json.attributes[3].value
				Details[11].innerHTML = "East Point : " + json.attributes[4].value
				document.getElementById('viewSale').style.display = "block";
				document.getElementById('viewLoad').style.display = "none";
			}

			function viewExit(){
				document.getElementById('view').style.display = "none";
			}
			function viewExitSale(){
				document.getElementById('viewSale').style.display = "none";
			}

			function view(x){
				let a = document.getElementById('nfts')
				let b = document.getElementById('mainDescription')
				let c = document.getElementById('allListings')
				let d = document.getElementById('allAuctions')
				let e = document.getElementById('heading')
				let f = document.getElementById('profile')
				let g = document.getElementsByClassName("hds")
				let h = document.getElementById('approveContract')
				let i = document.getElementById('profile')
				if(x == 1){
					a.style.display = "flex"
					b.style.display = "block";
					c.style.display = "none";
					d.style.display = "none";
					e.innerHTML = "";
					f.style.display = "none";
					g[0].style.display = "block";
					g[1].style.display = "block";
					h.style.display = "none";
					i.style.display = "none";
				}else if(x == 2){
					a.style.display = "none"
					b.style.display = "none";
					c.style.display = "none";
					d.style.display = "flex";
					e.innerHTML = "Auctions";
					f.style.display = "none";
					g[0].style.display = "none";
					g[1].style.display = "none";
					h.style.display = "block";
					i.style.display = "none";
				}else if(x == 3){
					a.style.display = "none"
					b.style.display = "none";
					c.style.display = "flex";
					d.style.display = "none";
					e.innerHTML = "Listings";
					f.style.display = "none";
					g[0].style.display = "none";
					g[1].style.display = "none";
					h.style.display = "block";
					i.style.display = "none";
				}else if(x == 4){
					a.style.display = "none"
					b.style.display = "none";
					c.style.display = "none";
					d.style.display = "none";
					e.innerHTML = "Profile";
					f.style.display = "none";
					g[0].style.display = "none";
					g[1].style.display = "none";
					h.style.display = "none";
					i.style.display = "flex";
					document.getElementById("myProps").style.marginLeft = "-100%"
				}
			}

	function myAuctions(){
		let temp = whole.Auction.Live
		let temp2 = Object.keys(temp)
		let temp4 = document.getElementById("aucNFTs")
		for(let i=0; i<temp2.length; i++){
			let temp3 = temp[temp2[i]]
			let temp5 = IPFSData[temp2[i]-1]
			if(temp3.State == '1' && temp3.Users == window.userWalletAddress){
				temp4.innerHTML += "<div class='nft' style='margin-bottom: 1em; min-height: 29.3em;'><div class='main'><h3 style='min-height: 2.2em'>"+(temp5.name)+"</h3><hr style='margin-top: 0.5em; margin-bottom: 0.5em; border-color: white '><img class='tokenImage' src='"+(temp5.image.replace("ipfs://", "https://ipfs.io/ipfs/"))+"' alt='NFT'/><p class='description'>"+(temp5.description)+"<div class='tokenInfo'><div class='price'><ins style='margin-top: -0.2em'>◘</ins>Bid Amount - &nbsp<p>"+(temp3.HighestBidderValue)+"</p></div></div><div><button id='nftBtn1' onclick='viewMyNfts(\"Auction\", "+(temp2[i])+")'>View More</button><button id='nftBtn2' type='text' @click='endAuction("+(temp2[i])+",\""+(temp3.HighestBidderAddress)+"\","+(temp[temp2[i]].HighestBidderValue)+", "+(parseInt(temp[temp2[i]].StartingValue)+parseInt(temp[temp2[i]].Step))+")'>End Auction</button><button id='nftBtn3' style='width: 7em; margin-left: 2.5em' type='text' @click='cancelAuction("+(temp2[i])+")'>Cancel Auction</button></div></div></div></div>"
			}
		}

		var Main5 = {
			methods: {
				async cancelAuction(id){
					if(document.getElementById('web3').innerHTML != "Web3"){
						this.$message({
							message: 'Connect to Web3!',
							type: 'warning'
						});
						return
					}
					if(document.getElementById('approveContract').innerHTML == "Approve Contract"){
						this.$message({
							message: 'Approve Contract!',
							type: 'warning'
						});
						return
					}


					this.$confirm("Canceling Auction for Token ID : "+id+"<br>"+" Confirm to Cancel Auction!", 'Warning', {
						confirmButtonText: 'Confirm',
						dangerouslyUseHTMLString: true,
						cancelButtonText: 'Cancel',
						type: 'warning'
					}).then(async () => {
						let CONTRACTContract = await new ethers.Contract(CONTRACTaddress, CONTRACTabi, signers)
						let placeBid = await CONTRACTContract.cancelAuction(id)
						this.$message({
							type: 'success',
							message: 'Auction Cancled!'
						});
					}).catch((hel) => {
						console.log(hel)
						this.$message({
							type: 'info',
							message: 'Cancelation Ended!'
						});          
					});
					
				},

				async endAuction(id, buyer, bidVal, setVal){
					console.log(id, buyer, bidVal, setVal)
					if(document.getElementById('web3').innerHTML != "Web3"){
						this.$message({
							message: 'Connect to Web3!',
							type: 'warning'
						});
						return
					}
					if(document.getElementById('approveContract').innerHTML == "Approve Contract"){
						this.$message({
							message: 'Approve Contract!',
							type: 'warning'
						});
						return
					}
					if(bidVal <= setVal){
						this.$message({
							message: 'Highest Bid Value is Less Than Set Initial Value',
							type: 'warning'
						});
						return
					}

					this.$confirm("Ending Auction for Token ID : "+id+"<br>"+"Highest Bid Value : "+bidVal+"<br>"+"Highest Bidder Address : "+buyer+"<br> Confirm to Cancel Auction!", 'Warning', {
						confirmButtonText: 'Confirm',
						dangerouslyUseHTMLString: true,
						cancelButtonText: 'Cancel',
						type: 'warning'
					}).then(async () => {
						let CONTRACTContract = await new ethers.Contract(CONTRACTaddress, CONTRACTabi, signers)
						console.log(typeof id, typeof buyer)
						let placeBid = await CONTRACTContract.assertAuction(id, buyer)
						this.$message({
							type: 'success',
							message: 'Auction Ended!'
						});
					}).catch((hel) => {
						console.log(hel)
						this.$message({
							type: 'info',
							message: 'Auction Still Live!'
						});          
					});
				}
			}
		}
		var chkng5 = Vue.extend(Main5)
		new chkng5().$mount('#myAuctions')
	}

	function myListings(){
		let temp = whole.Listing.Live
		let temp2 = Object.keys(temp)
		let temp4 = document.getElementById("lisNFTs")
		for(let i=0; i<temp2.length; i++){
			let temp3 = temp[temp2[i]]
			let temp5 = IPFSData[temp2[i]-1]
			if(temp3.State == '1' && temp3.Users == window.userWalletAddress){
				temp4.innerHTML += "<div class='nft' style='margin-bottom: 1.25em; min-height: 27em;'><div class='main'><h3 style='min-height: 2.2em'>"+(temp5.name)+"</h3><hr style='margin-top: 0.5em; margin-bottom: 0.5em; border-color: white'><img class='tokenImage' src='"+(temp5.image.replace("ipfs://", "https://ipfs.io/ipfs/"))+"' alt='NFT'/><p class='description'>"+(temp5.description)+"<div class='tokenInfo'><div class='price'><ins style='margin-top: -0.2em'>◘</ins>List Amount - &nbsp<p>"+(temp3.ListingValue)+"</p></div></div><div><button id='nftBtn1' onclick='viewMyNfts(\"Listing\", "+(temp2[i])+")'>View More</button><button id='nftBtn2' type='text' @click='cancelListing("+(temp2[i])+")'>Cancel Listing</button></div></div></div></div>"
			}
		}


		var Main6 = {
			methods: {
				async cancelListing(id){
					if(document.getElementById('web3').innerHTML != "Web3"){
						this.$message({
							message: 'Connect to Web3!',
							type: 'warning'
						});
						return
					}
					if(document.getElementById('approveContract').innerHTML == "Approve Contract"){
						this.$message({
							message: 'Approve Contract!',
							type: 'warning'
						});
						return
					}


					this.$confirm("Canceling Listing for Token ID : "+id+"<br>"+" Confirm to Cancel Listing!", 'Warning', {
						confirmButtonText: 'Confirm',
						dangerouslyUseHTMLString: true,
						cancelButtonText: 'Cancel',
						type: 'warning'
					}).then(async () => {
						let CONTRACTContract = await new ethers.Contract(CONTRACTaddress, CONTRACTabi, signers)
						let placeBid = await CONTRACTContract.cancelListing(id)
						this.$message({
							type: 'success',
							message: 'Listing Cancled!'
						});
					}).catch((hel) => {
						console.log(hel)
						this.$message({
							type: 'info',
							message: 'Listing Still Live!'
						});          
					});
					
				}
			}
		}
		var chkng6 = Vue.extend(Main6)
		new chkng6().$mount('#myListings')
	}

	let tempStorage = ""
	async function viewNftHome(p, q, r, s, t){
		console.log('a')
		let a = document.getElementsByClassName("nft")[p]
		let b = a.getElementsByClassName("main")[0]
		if(document.getElementById("tempx") != null) return
		b.style.padding = "unset"
		b.style.filter = "brightness(1)"
		tempStorage = b.innerHTML
		const json = IPFSData[p]
		let temp1 = PROPERTIESData[p+1].AcquiredState
		let temp = ""
		if(temp1 == 1) temp = "Acquired State : Auction"
		else if(temp1 == 2) temp = "Acquired State : Listing"
		else if(temp1 == 3) temp = "Acquired State : Donation"
		else temp = "Acquired State : Initial"
		b.innerHTML = "<div id='viewHomeDiv'><h1 id='viewHomeDivH2'>Details</h1><svg xmlns='http:/\/www.w3.org\/2000\/svg' width='2.5em' height='2.5em' fill='currentColor' class='bi bi-x' viewBox='0 0 16 16' style='position: absolute; margin-top: -3.4em; margin-left: 86.5em' onclick='viewNftHomeClose("+(p)+")'><path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/></svg><div id='tempx'><div id='viewHomeDivImage'><center style='height: auto;'><img class='tokenImage' src='"+(q)+"' alt='NFT' style='object-fit: contain; max-width: 25em; max-height: 27em; margin-top: 1em'></center><h4 style='font-size: 2em; font-family: var(--nftNameFont); margin: 0em; padding-bottom: 0.2em; text-align: center'>"+(s)+"</h4></div></div><div id='tempy'><div id='tempyIn'><h4>Current Owner : "+(PROPERTIESData[p+1].CurrentOwner)+"</h4><h4>"+(temp)+"</h4><h4>Description : "+(json.description)+"</h4><h4>Address : "+(json.attributes[0].value)+"</h4><h4>Latitude : "+(json.attributes[1].value)+"</h4><h4>Longitude : "+(json.attributes[2].value)+"</h4><h4>North Point : "+(json.attributes[3].value)+"</h4><h4>East Point : "+(json.attributes[4].value)+"</h4></div></div></div>"
		a.style.zIndex = "1"
		a.style.backdropFilter = "none"
		b.style.position = "fixed"
		b.style.float = "left"
		b.style.width = "120em"
		b.style.height = "75em"
		b.style.marginTop = "-9.8em"
		let m = (13.5*(t+1))+((t)*5.5)
		if (t == 0) m == 13.3
		b.style.marginLeft = "-"+(m)+"em"
		b.style.backgroundColor = "rgba(0,0,0,0.9)"
		a.style.top = "0"
		await new Promise(r => setTimeout(r, 300));
		let c = document.getElementById("viewHomeDiv")
		c.style.opacity = "1";
		document.getElementById("viewHomeDivH2").style.marginTop = "0em"
		document.getElementById("tempx").style.marginLeft = "3em"
		document.getElementById("tempy").style.marginRight = "3em"
	}

	async function viewNftHomeClose(x){
		document.getElementById("nfts").style.overflow = "hidden"
		document.getElementById("mainDiv").style.overflow = "auto"
		let a = document.getElementsByClassName("nft")[x]
		let b = a.getElementsByClassName("main")[0]
		let c = document.getElementById("viewHomeDiv")
		c.style.opacity = "0";
		await new Promise(r => setTimeout(r, 400));
		a.style.zIndex = "unset"
		b.style.padding = "1rem"
		a.style.backdropFilter = "blue(6px)"
		b.style.position = "static"
		b.style.width = "15em"
		b.style.height = "20em"
		b.style.marginTop = "0"
		b.style.marginLeft = "0"
		b.style.backgroundColor = "rgba(0,0,0,0.0)"
		await new Promise(r => setTimeout(r, 300));
		b.innerHTML = tempStorage
		tempStorage = ""
		console.log('b')
	}

	async function viewNft(x, y){
		const json = IPFSData[y-1]
		let temp1 = PROPERTIESData[y].AcquiredState
		let img = IPFSData[y-1].image
		if(x == "Listing"){
			let a = document.getElementById("listingView")
			let b = document.getElementById("ListingTempY")
			document.getElementById("ListingTempX").querySelector("img").src = img.replace("ipfs://", "https://ipfs.io/ipfs/")
			document.getElementById("ListingTempX").querySelector("h4").innerHTML = json.name
			a.style.display = "block"
			await new Promise(r => setTimeout(r, 100));
			a.style.opacity = "1"
			let temp3 = whole.Listing.Live[y]
			b.innerHTML = "<div style='width: 100%; height: auto; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);'><h4>Listing by : "+(PROPERTIESData[y].CurrentOwner)+"</h4><h4>Type : Listing</h4><h4> Listing Price : "+(temp3.ListingValue)+"</h4><h4>Description : "+(json.description)+"</h4><h4>Address : "+(json.attributes[0].value)+"</h4><h4>Latitude : "+(json.attributes[1].value)+"</h4><h4>Longitude : "+(json.attributes[2].value)+"</h4><h4>North Point : "+(json.attributes[3].value)+"</h4><h4>East Point : "+(json.attributes[4].value)+"</h4></div>"
			document.getElementById("ListingTempX").style.marginLeft = "-3em"
			document.getElementById("ListingTempY").style.marginRight = "-3em"
			document.getElementById("ListingTempX").style.marginLeft = "2em"
			document.getElementById("ListingTempY").style.marginRight = "2em"
		}else if(x == "Auction"){
			let a = document.getElementById("auctionView")
			let b = document.getElementById("AuctionTempY")
			document.getElementById("AuctionTempX").querySelector("img").src = img.replace("ipfs://", "https://ipfs.io/ipfs/")
			document.getElementById("AuctionTempX").querySelector("h4").innerHTML = json.name
			a.style.display = "block"
			await new Promise(r => setTimeout(r, 100));
			a.style.opacity = "1"
			let temp3 = whole.Auction.Live[y]
			b.innerHTML = "<div style='width: 100%; height: auto; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);'><h4>Auction by : "+(PROPERTIESData[y].CurrentOwner)+"</h4><h4>Type : Auction</h4><h4> Highest Bidder : "+(temp3.HighestBidderAddress)+"</h4><h4> Highest Bidder Amount : "+(temp3.HighestBidderValue)+"</h4><h4> Step Amount : "+(temp3.Step)+"</h4><h4>Description : "+(json.description)+"</h4><h4>Address : "+(json.attributes[0].value)+"</h4><h4>Latitude : "+(json.attributes[1].value)+"</h4><h4>Longitude : "+(json.attributes[2].value)+"</h4><h4>North Point : "+(json.attributes[3].value)+"</h4><h4>East Point : "+(json.attributes[4].value)+"</h4></div>"
			document.getElementById("AuctionTempX").style.marginLeft = "-3em"
			document.getElementById("AuctionTempY").style.marginRight = "-3em"
			document.getElementById("AuctionTempX").style.marginLeft = "2em"
			document.getElementById("AuctionTempY").style.marginRight = "2em"
		}
		
	}

	async function listingViewClose(){
		let a = document.getElementById("listingView")
		a.style.opacity = "0"
		document.getElementById("ListingTempX").style.marginLeft = "-3em"
		document.getElementById("ListingTempY").style.marginRight = "-3em"
		await new Promise(r => setTimeout(r, 300));
		a.style.display = "none"
	}

	async function auctionViewClose(){
		let a = document.getElementById("auctionView")
		a.style.opacity = "0"
		document.getElementById("AuctionTempX").style.marginLeft = "-3em"
		document.getElementById("AuctionTempY").style.marginRight = "-3em"
		await new Promise(r => setTimeout(r, 300));
		a.style.display = "none"
	}

	async function myViewClose(){
		let a = document.getElementById("myView")
		a.style.opacity = "0"
		document.getElementById("MyTempX").style.marginLeft = "-3em"
		document.getElementById("MyTempY").style.marginRight = "-3em"
		await new Promise(r => setTimeout(r, 300));
		a.style.display = "none"
	}

	function viewProf(x){
		let a = document.getElementById("myProps")
		if(x == 1) a.style.marginLeft = "0%"
		else if(x == 2) a.style.marginLeft = "-200%"
		else if(x == 3) a.style.marginLeft = "-300%"
		else if(x == 4) a.style.marginLeft = "-100%"
	}

	async function viewMyNft(p, q, d, s){
		const json = IPFSData[p-1]
		let temp1 = PROPERTIESData[p].AcquiredState
		let temp = ""
		if(temp1 == 1) temp = "Acquired State : Auction"
		else if(temp1 == 2) temp = "Acquired State : Listing"
		else if(temp1 == 3) temp = "Acquired State : Donation"
		else temp = "Acquired State : Initial"
		let a = document.getElementById("myView")
		let b = document.getElementById("MyTempY")
		document.getElementById("MyTempX").querySelector("img").src = q
		document.getElementById("MyTempX").querySelector("h4").innerHTML = s
		a.style.display = "block"
		await new Promise(r => setTimeout(r, 100));
		a.style.opacity = "1"
		let temp3 = whole.Listing.Live[p]
		b.innerHTML = "<div style='width: 100%; height: auto; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);'><h4>Current Owner : "+(PROPERTIESData[p].CurrentOwner)+"</h4><h4>"+(temp)+"</h4><h4>Description : "+(d)+"</h4><h4>Address : "+(json.attributes[0].value)+"</h4><h4>Latitude : "+(json.attributes[1].value)+"</h4><h4>Longitude : "+(json.attributes[2].value)+"</h4><h4>North Point : "+(json.attributes[3].value)+"</h4><h4>East Point : "+(json.attributes[4].value)+"</h4></div>"
		document.getElementById("MyTempX").style.marginLeft = "-3em"
		document.getElementById("MyTempY").style.marginRight = "-3em"
		document.getElementById("MyTempX").style.marginLeft = "2em"
		document.getElementById("MyTempY").style.marginRight = "2em"
	}


	async function viewMyNfts(x, y){
		const json = IPFSData[y-1]
		console.log(PROPERTIESData[y])
		let temp1 = PROPERTIESData[y].AcquiredState
		let img = IPFSData[y-1].image
		if(x == "Listing"){
			let a = document.getElementById("mylisView")
			let b = document.getElementById("MylisTempY")
			document.getElementById("MylisTempX").querySelector("img").src = img.replace("ipfs://", "https://ipfs.io/ipfs/")
			document.getElementById("MylisTempX").querySelector("h4").innerHTML = json.name
			a.style.display = "block"
			await new Promise(r => setTimeout(r, 100));
			a.style.opacity = "1"
			let temp3 = whole.Listing.Live[y]
			b.innerHTML = "<div style='width: 100%; height: auto; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);'><h4>Listing by : "+(PROPERTIESData[y].CurrentOwner)+"</h4><h4>Type : Listing</h4><h4> Listing Price : "+(temp3.ListingValue)+"</h4><h4>Description : "+(json.description)+"</h4><h4>Address : "+(json.attributes[0].value)+"</h4><h4>Latitude : "+(json.attributes[1].value)+"</h4><h4>Longitude : "+(json.attributes[2].value)+"</h4><h4>North Point : "+(json.attributes[3].value)+"</h4><h4>East Point : "+(json.attributes[4].value)+"</h4></div>"
			document.getElementById("MylisTempX").style.marginLeft = "-3em"
			document.getElementById("MylisTempY").style.marginRight = "-3em"
			document.getElementById("MylisTempX").style.marginLeft = "2em"
			document.getElementById("MylisTempY").style.marginRight = "2em"
		}else if(x == "Auction"){
			let a = document.getElementById("myaucView")
			let b = document.getElementById("MyaucTempY")
			document.getElementById("MyaucTempX").querySelector("img").src = img.replace("ipfs://", "https://ipfs.io/ipfs/")
			document.getElementById("MyaucTempX").querySelector("h4").innerHTML = json.name
			a.style.display = "block"
			await new Promise(r => setTimeout(r, 100));
			a.style.opacity = "1"
			let temp3 = whole.Auction.Live[y]
			b.innerHTML = "<div style='width: 100%; height: auto; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);'><h4>Auction by : "+(PROPERTIESData[y].CurrentOwner)+"</h4><h4>Type : Auction</h4><h4> Highest Bidder : "+(temp3.HighestBidderAddress)+"</h4><h4> Highest Bidder Amount : "+(temp3.HighestBidderValue)+"</h4><h4> Step Amount : "+(temp3.Step)+"</h4><h4>Description : "+(json.description)+"</h4><h4>Address : "+(json.attributes[0].value)+"</h4><h4>Latitude : "+(json.attributes[1].value)+"</h4><h4>Longitude : "+(json.attributes[2].value)+"</h4><h4>North Point : "+(json.attributes[3].value)+"</h4><h4>East Point : "+(json.attributes[4].value)+"</h4></div>"
			document.getElementById("MyaucTempX").style.marginLeft = "-3em"
			document.getElementById("MyaucTempY").style.marginRight = "-3em"
			document.getElementById("MyaucTempX").style.marginLeft = "2em"
			document.getElementById("MyaucTempY").style.marginRight = "2em"
		}
		
	}

	async function myaucViewClose(){
		let a = document.getElementById("myaucView")
		a.style.opacity = "0"
		document.getElementById("MyaucTempX").style.marginLeft = "-3em"
		document.getElementById("MyaucTempY").style.marginRight = "-3em"
		await new Promise(r => setTimeout(r, 300));
		a.style.display = "none"
	}

	async function mylisViewClose(){
		let a = document.getElementById("mylisView")
		a.style.opacity = "0"
		document.getElementById("MylisTempX").style.marginLeft = "-3em"
		document.getElementById("MylisTempY").style.marginRight = "-3em"
		await new Promise(r => setTimeout(r, 300));
		a.style.display = "none"
	}

	function goProf(){
		document.getElementById("myProps").style.marginLeft = "-100%"
	}
