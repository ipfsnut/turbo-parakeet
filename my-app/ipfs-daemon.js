const IPFS = require('ipfs');

const node = new IPFS({
  repo: './ipfs-repo',
  start: true,
  EXPERIMENTAL: {
    pubsub: true,
  },
});

node.on('ready', () => {
  console.log('IPFS node is ready');
});
