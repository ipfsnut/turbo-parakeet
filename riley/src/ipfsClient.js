import { Buffer } from 'buffer';
import { create } from 'ipfs-http-client';

// Replace with your IPFS node's IP address and authentication credentials
const ipfsNodeAddress = 'http://208.189.163.151';
const ipfsNodePort = 5001;
const ipfsNodeUsername = 'admin';
const ipfsNodePassword = 'hardpassword';

// Create an IPFS client instance
const ipfs = create({
  host: ipfsNodeAddress,
  port: ipfsNodePort,
  protocol: 'http',
  headers: {
    'Authorization': 'Basic ' + Buffer.from(`${ipfsNodeUsername}:${ipfsNodePassword}`).toString('base64')
  }
});

export default ipfs;
