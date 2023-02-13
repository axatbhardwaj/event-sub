const ethers = require("ethers");

const provider = new ethers.providers.WebSocketProvider('wss://eth-mainnet.g.alchemy.com/v2/3xFd2mV39s2drt5ySrtIfjpQus_PQPvW');

async function getLogs(fromBlock,toBlock) {
    if (toBlock > fromBlock) {
  
        for (var i = fromBlock; i <= toBlock; i++) {
            console.log("\n\n-----------    getting block no .", i);
            let block = await provider.getBlock(i);
            //console.log("Block",block);
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
    console.log("TxnHash = ", txnHash);
   // console.log("TXN :", txn);
    for (var j = 0; j < txn.logs.length; j++)
    {
        console.log("logIndex :", txn.logs[j].logIndex);
        if (txn.logs[j].topics[0] == "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef") {
            console.log("event for transfer function");
            console.log("Amount",parseInt(txn.logs[j].data).toString());
        }
        if (txn.logs[j].topics[0] == "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925") {
            console.log("event for approve function");
        }
        console.log(txn.logs[j].topics);
    }
}

getLogs(16596868,16598868);