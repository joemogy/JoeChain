const PubNub = require('pubnub');

const credentials = {
  publishKey: 'pub-c-0d94e644-b3c5-46a3-8766-9481da5fa958',
  subscribeKey: 'sub-c-d9a8ef89-b8e2-4cae-9881-b903751af430',
  secretKey: 'sec-c-ZWQ3YjZlOGMtZjU2Yy00N2ZiLTg1MmItMjY3ZjMxM2JlOTUw'
};

const CHANNELS = {
  TEST: 'TEST',
  BLOCKCHAIN: 'BLOCKCHAIN',
  TRANSACTION: 'TRANSACTION'
};

class PubSub {
  constructor({ blockchain, transactionPool }) {
    this.blockchain = blockchain;
    this.transactionPool = transactionPool;

    this.pubnub = new PubNub(credentials);
    this.pubnub.subscribe({ channels: Object.values(CHANNELS) });
    this.pubnub.addListener(this.listener());
  }

  handleMessage(channel, message) {
    console.log(`Message received. Channel: ${channel}. Message: ${message}`);

    const parsedMessage = JSON.parse(message);

    switch(channel) {
      case CHANNELS.BLOCKCHAIN:
        this.blockchain.replaceChain(parsedMessage, true, () => {
          this.transactionPool.clearBlockchainTransactions({
             chain: parsedMessage
          });
        });
        break;
      case CHANNELS.TRANSACTION:
        this.transactionPool.setTransaction(parsedMessage);
        break;
     default:
        return;
    }
  }


  listener() {
    return {
      message: messageObject => {
        const { channel, message } = messageObject;

        // this.handleMessage(channel, message);
        console.log(`Message received. Channel: ${channel}. Message: ${message}`);
      }
    };
  }

  publish({ channel, message}) {
    this.pubnub.publish({ channel, message });
  }
}

    const testPubSub = new PubSub();
    testPubSub.publish({ channel: CHANNELS.TEST, message: 'hello pubnub' });

  // broadcastChain() {
  //   this.publish({
  //     channel: CHANNELS.BLOCKCHAIN,
  //     message: JSON.stringify(this.blockchain.chain)
  //   });
  // }

  // broadcastTransaction(transaction) {
  //   this.publish({
  //     channel: CHANNELS.TRANSACTION,
  //     message: JSON.stringify(transaction)
  //   })
  // }
  // }

module.exports = PubSub;