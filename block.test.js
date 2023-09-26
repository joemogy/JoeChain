const Block = require('./block');
const { GENESIS_DATA } = require('./config');

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

    describe('genesis()', () => {
        const genesisBlock = Block.genesis();

        it('returns a Block instance', () => {
            expect(genesisBlock instanceof Block).toBe(true);
        });

        it('returns the genesis data', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });  
});