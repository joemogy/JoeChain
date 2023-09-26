class Block {
    constructor(index, timestamp, previousHash, hash, data) {
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash.toString();
        this.hash = hash.toString();
        this.data = data;
    }
}

const block1    = new Block(1, 123456789, '0', 'hash1', 'data1');

console.log('block1', block1);