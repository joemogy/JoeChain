const { GENESIS_DATA } = require('./config');

class Block {
    constructor({index, timestamp, previousHash, hash, data}) {
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
    }
    static genesis() {
        return new Block(GENESIS_DATA);
    }

    static mineBlock({ previousBlock, data }) {
        return new Block({
            index: previousBlock.index + 1,
            timestamp: Date.now(),
            previousHash: previousBlock.hash,
            data
        });
    }
}

module.exports = Block;
