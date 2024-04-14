import ipfs from './ipfsClient';

export const testIpfsConnection = async () => {
  try {
    const version = await ipfs.version();
    console.log('IPFS Node Version:', version.version);
    return true;
  } catch (error) {
    console.error('Error connecting to IPFS node:', error);
    return false;
  }
};
