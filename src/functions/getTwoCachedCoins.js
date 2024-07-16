export const getTwoCachedCoins=()=>{
  const myCoins=[{
    "id": "bitcoin",
    "name": "Bitcoin",
    "symbol": "btc",
    "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "desc": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the \u003Ca href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\"\u003ESHA-256\u003C/a\u003E hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as \u003Ca href=\"https://www.coingecko.com/en/coins/litecoin\"\u003ELitecoin\u003C/a\u003E, \u003Ca href=\"https://www.coingecko.com/en/coins/peercoin\"\u003EPeercoin\u003C/a\u003E, \u003Ca href=\"https://www.coingecko.com/en/coins/primecoin\"\u003EPrimecoin\u003C/a\u003E, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by \u003Ca href=\"https://www.coingecko.com/en/coins/ethereum\"\u003EEthereum\u003C/a\u003E which led to the development of other amazing projects such as \u003Ca href=\"https://www.coingecko.com/en/coins/eos\"\u003EEOS\u003C/a\u003E, \u003Ca href=\"https://www.coingecko.com/en/coins/tron\"\u003ETron\u003C/a\u003E, and even crypto-collectibles such as \u003Ca href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\"\u003ECryptoKitties\u003C/a\u003E.",
    "price_change_percentage_24h": 3.86717,
    "total_volume": 24708074380,
    "current_price": 62708,
    "market_cap": 1236487118926,
  },
  {
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "current_price": 3353.29,
    "market_cap": 402894873436,
    "total_volume": 12806549643,
    "price_change_percentage_24h": 4.0654,
    "desc": "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand." 
  }
]

  return myCoins;
}