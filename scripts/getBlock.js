const ethers = require("ethers");

const provider = new ethers.providers.WebSocketProvider('wss://polygon-mainnet.g.alchemy.com/v2/fylVnrUN7fTux_DkEf3dsPh5LDOaFoEC');

const latest = async () => {
      const res = await provider.getBlockNumber();
    // console.log(res, "REs");
    return res;
}

async function getBlockByBum() {
   num = await latest();
    for (var i = 0; i < num; i++) {
        var blockNumber = await provider.getBlock(i);
        console.log(blockNumber.number,i);
    }
}
getBlockByBum();
