const ethers = require("ethers")
const abi = require("../abi.json")


async function getTransfer(){
    const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; ///USDC Contract
    const usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    const maticAddress = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";
    const bnbAddress = "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";
    const usdcPoly = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
    const WethPoly = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
     const provider = new ethers.providers.WebSocketProvider(
        `wss://eth-mainnet.g.alchemy.com/v2/WJ6B1BBgX-hleCiTUDts6PeNO5YRdC74`
     );
    
    const provider2 = new ethers.providers.WebSocketProvider('wss://polygon-mainnet.g.alchemy.com/v2/fylVnrUN7fTux_DkEf3dsPh5LDOaFoEC');

    const contract = new ethers.Contract(usdtAddress, abi, provider);
    const contract2 = new ethers.Contract(usdcAddress, abi, provider);
    const contract3 = new ethers.Contract(maticAddress, abi, provider);
    const contract4 = new ethers.Contract(bnbAddress, abi, provider);
    const contract5 = new ethers.Contract(usdcPoly, abi, provider2);
    const contract6 = new ethers.Contract(WethPoly, abi, provider2);


    let i = 1;
    let j = 1;
    let k = 1;
    let l = 1;
    let p = 1;
    let q = 1;
    contract.on("Transfer", (from, to, value, event)=>{
        let transferEvent ={
            from: from,
            to: to,
            value: value,
            eventData: event,
        }

        console.log(JSON.stringify(transferEvent, null, 4), i,"FROM USDT\n\n\n\n\n");
        i++;

    })
    contract5.on("Transfer", (from, to, value, event)=>{
        let transferEvent ={
            from: from,
            to: to,
            value: value,
            eventData: event,
        }

        console.log(JSON.stringify(transferEvent, null, 4), p,"FROM USDC-POLY\n\n\n\n\n");
        p++;
    })
    contract6.on("Transfer", (from, to, value, event)=>{
        let transferEvent ={
            from: from,
            to: to,
            value: value,
            eventData: event,
        }

        console.log(JSON.stringify(transferEvent, null, 4), q,"FROM Weth-POLY\n\n\n\n\n");
        q++;
    })
    contract2.on("Transfer", (from, to, value, event)=>{
        let transferEvent1 ={
            from: from,
            to: to,
            value: value,
            eventData: event,
        }

        console.log(JSON.stringify(transferEvent1, null, 4), j,"FROM USDC\n\n\n\n\n");
        j++;

    })
    contract3.on("Transfer", (from, to, value, event)=>{
        let transferEvent1 ={
            from: from,
            to: to,
            value: value,
            eventData: event,
        }

        console.log(JSON.stringify(transferEvent1, null, 4), l,"FROM MATIC\n\n\n\n\n");
        l++;

    })
    contract4.on("Transfer", (from, to, value, event)=>{
        let transferEvent1 ={
            from: from,
            to: to,
            value: value,
            eventData: event,
        }

        console.log(JSON.stringify(transferEvent1, null, 4), k,"FROM BNB\n\n\n\n\n");
        k++;

    })
}
getTransfer();
