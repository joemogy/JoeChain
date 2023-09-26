const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block {
    constructor({index, timestamp, previousHash, hash, data}) {
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
    }
    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({ previousBlock, data }) {
        const index = previousBlock.index + 1;
        const timestamp = Date.now();
        const previousHash = previousBlock.hash;


        return new this({ 
            index, 
            timestamp, 
            previousHash, 
            hash: cryptoHash(index, timestamp, previousHash, data), data });
    }
}

module.exports = Block;
