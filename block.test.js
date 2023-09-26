const Block = require('./block');
const cryptoHash = require('./crypto-hash');
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
    
    describe('mineBlock()', () => {
        const previousBlock = Block.genesis();
        const data = 'mined data';
        const minedBlock = Block.mineBlock({ previousBlock, data });

        it('returns a Block instance', () => {
            expect(minedBlock instanceof Block).toBe(true);
        });

        it('sets the `index` property properly', () => {
            expect(minedBlock.index).toEqual(previousBlock.index + 1);
        });

        it('sets the `previousHash` to be the `hash` of the previousBlock', () => {
            expect(minedBlock.previousHash).toEqual(previousBlock.hash);
        });

        it('sets the `data`', () => {
            expect(minedBlock.data).toEqual(data);
        });

        it('sets a `timestamp`', () => {
            expect(minedBlock.timestamp).not.toEqual(undefined);
        });

        it('creates a SHA-256 `hash` based on the proper inputs', () => {
            expect(minedBlock.hash)
            .toEqual(cryptoHash(
                minedBlock.index, 
                minedBlock.timestamp, 
                minedBlock.previousHash, 
                minedBlock.data
            ));
        });
    });
});
