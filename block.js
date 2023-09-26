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

}

module.exports = Block;
