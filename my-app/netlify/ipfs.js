const IpfsHttpClient = require('ipfs-http-client');
const ipfs = await IpfsHttpClient.create();

exports.handler = async (event, context) => {
  const { path, httpMethod, body } = event;

  if (httpMethod === 'POST') {
    const files = await ipfs.add(Buffer.from(body, 'base64'));
    return {
      statusCode: 200,
      body: JSON.stringify({ cid: files.cid.toString() }),
    };
  }

  return {
    statusCode: 404,
    body: 'Not found',
  };
};
