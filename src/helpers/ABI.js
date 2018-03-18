export const ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "ADDRESS_COOLDOWN",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "HEIGHT",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "isArtworkFinished",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPixelCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      },
      {
        "name": "_pixelIndex",
        "type": "uint32"
      }
    ],
    "name": "getPixelAuthor",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "mapPaintedPixels",
    "outputs": [
      {
        "name": "",
        "type": "bool[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "getCanvasInfo",
    "outputs": [
      {
        "name": "id",
        "type": "uint32"
      },
      {
        "name": "paintedPixels",
        "type": "uint32"
      },
      {
        "name": "isFinished",
        "type": "bool"
      },
      {
        "name": "biddingState",
        "type": "uint8"
      },
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getArtworksCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "getArtworkPaintedPixels",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "getArtworkBiddingState",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "getArtwork",
    "outputs": [
      {
        "name": "",
        "type": "uint8[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "COMMISSION",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "fees",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "BIDDING_SOLD",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_ACTIVE_CANVAS",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_CANVAS_COUNT",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "BIDDING_ONGOING",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MINIMUM_BID_AMOUNT",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "BIDDING_DURATION",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "PIXEL_COUNT",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "BIDDING_ARTWORK_NOT_FINISHED",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "WIDTH",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "getLastBidForArtwork",
    "outputs": [
      {
        "name": "bidder",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "finishTime",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "activeCanvasCount",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "CanvasCreated",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "withdrawReward",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      },
      {
        "name": "_minPrice",
        "type": "uint256"
      }
    ],
    "name": "offerArtworkForSale",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdrawFees",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "artworkId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BuyOfferMade",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "artworkNoLongerForSale",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "artworkId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BuyOfferCancelled",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "buyArtwork",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_bidder",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_finishTime",
        "type": "uint256"
      }
    ],
    "name": "BidPosted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_address",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "MoneyPaid",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      },
      {
        "name": "_minPrice",
        "type": "uint256"
      },
      {
        "name": "_receiver",
        "type": "address"
      }
    ],
    "name": "offerArtworkForSaleToAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "createCanvas",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      },
      {
        "name": "_index",
        "type": "uint32"
      },
      {
        "name": "_color",
        "type": "uint8"
      }
    ],
    "name": "setPixel",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "makeBid",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "CommissionPaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_artworkId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "_index",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "_color",
        "type": "uint8"
      }
    ],
    "name": "PixelPainted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "ArtworkNoLongerForSale",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "artworkId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "minPrice",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "toAddress",
        "type": "address"
      }
    ],
    "name": "ArtworkOfferedForSale",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "artworkId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "to",
        "type": "address"
      }
    ],
    "name": "ArtworkSold",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "withdrawCommission",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      },
      {
        "name": "_minPrice",
        "type": "uint256"
      }
    ],
    "name": "acceptBuyOffer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "FeeWithdrawn",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "enterBuyOffer",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_artworkId",
        "type": "uint32"
      }
    ],
    "name": "cancelBuyOffer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]