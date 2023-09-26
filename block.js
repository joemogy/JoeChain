class Block {
    constructor({index, timestamp, previousHash, hash, data}) {
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
    }
}

module.exports = Block;
