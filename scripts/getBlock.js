//const { latest } = require("@nomicfoundation/hardhat-network-helpers/dist/src/helpers/time");
const ethers = require("ethers");
const provider = new ethers.providers.WebSocketProvider('wss://polygon-mainnet.g.alchemy.com/v2/fylVnrUN7fTux_DkEf3dsPh5LDOaFoEC');
const tokenURIABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
];
let contractAddress = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';

async function getBlockByBum(i) {
    num = await provider.getBlock(i);
    console.log(num);
    for (var i = num; i >= 0; i--) {
        var block = await provider.getBlock(i);
        console.log(block,i);
    }
}

async function nnnn() {
  for (let i = 38120511; i < 39120511;i++)
 await getBlockByBum(i);
}

nnnn();
// const contract = new ethers.Contract(contractAddress, tokenURIABI, provider);

// const filter = contract.filters.Transfer();

// async function check(walletAddress,blockNo) {
//     try {
//       querty = await contract.queryFilter(filter, blockNo ,blockNo);
//       // console.log(typeof (querty));
//       console.log(querty.length);
//       for (var q = 0; q < querty.length; q++) {
//        // if (querty[q].args.from == walletAddress) {
//          // console.log(querty[q].args.from);
//           console.log("EVENT iteration number :-------->", q);
//        // }
//         console.log(JSON.stringify(querty, null, 4));
//         //console.log(querty);
//       }
//     }catch(err){console.log(err)}
//   }
  
//   async function checker(xxx) {
//   var latest = await provider.getBlockNumber();
//     for (var i = xxx; i < latest ;i++)
//     await check("0xc590175E458b83680867AFD273527Ff58f74c02b",i);
// }

// checker(16000000);
