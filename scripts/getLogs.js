const ethers = require("ethers");

const provider = new ethers.providers.WebSocketProvider('wss://eth-mainnet.g.alchemy.com/v2/3xFd2mV39s2drt5ySrtIfjpQus_PQPvW');

async function getLogs(fromBlock,toBlock) {
    if (toBlock > fromBlock) {
  
        for (var i = fromBlock; i <= toBlock; i++) {
            console.log("\n\n-----------    getting block no .", i);
            let block = await provider.getBlock(i);
            console.log("-----------    Traversing transaction for block no", i);
            console.log("-----------    Block no ", i, " Has ", block.transactions.length, " Transactions ")
            for (var q = 0; q < block.transactions.length; q++) {
                console.log("-----------    getting txn receipt for Txn no", q);
                await getTXN(block.transactions[q].toString(),q);
            }
        }
    }
}

async function getTXN(txnHash,txnNo) {
    const txn = await  provider.getTransactionReceipt(txnHash);
   // console.log(txn.logs[0].topics)
    console.log("-----------    Txn : ", txnNo, " has ", txn.logs.length, " logs \n");
    for (var j = 0; j < txn.logs.length; j++)
    {
        console.log(txn.logs[j].topics);
    }
}

getLogs(16596868,16597868);