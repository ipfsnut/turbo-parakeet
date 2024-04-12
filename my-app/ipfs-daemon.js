// Import the IPFS module
const IPFS = require('ipfs');

// Create a new IPFS node instance
const node = new IPFS({
  // Set the repository path for the IPFS node
  repo: './ipfs-repo',
  // Start the IPFS node immediately after creation
  start: true,
  // Enable the experimental pubsub feature
  EXPERIMENTAL: {
    pubsub: true,
  },
});

// Initialize a flag to track if the IPFS node is ready
let isIPFSReady = false;

// Listen for the 'ready' event emitted by the IPFS node
node.on('ready', () => {
  // Log a message indicating that the IPFS node is ready
  console.log('IPFS node is ready');
  // Set the isIPFSReady flag to true
  isIPFSReady = true;
});

// Export the IPFS node instance and the isIPFSReady flag
module.exports = {
  ipfs: node,
  isIPFSReady,
};
