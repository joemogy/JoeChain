const Block = require('./block');

describe('Block', () => {
    const index = 'index';
    const timestamp = 'timestamp';
    const previousHash = 'previousHash';
    const hash = 'hash';
    const data = ['blockchain', 'data'];
    const block = new Block({ index, timestamp, previousHash, hash, data });

    it('has a `index, timestamp, previousHash, hash, and data` property', () => {
        expect(block.index).toEqual(index);
        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });
});