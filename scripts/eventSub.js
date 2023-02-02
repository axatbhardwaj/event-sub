const ethers = require("ethers")
const abi = require("../abi.json")


async function getTransfer(){
    const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; ///USDC Contract
     const provider = new ethers.providers.WebSocketProvider(
        `wss://eth-mainnet.g.alchemy.com/v2/WJ6B1BBgX-hleCiTUDts6PeNO5YRdC74`
    );

    const contract = new ethers.Contract(usdtAddress, abi, provider);

    let i = 1;
    contract.on("Transfer", (from, to, value, event)=>{
        let transferEvent ={
            from: from,
            to: to,
            value: value,
            eventData: event,
        }

        console.log(JSON.stringify(transferEvent, null, 4), i);
        i++;

    })
}

getTransfer();