require('dotenv/config');
const { env: { APIGateway } } = process;
console.log({ APIGateway });
const PROXY_CONFIG = [
  {
    context: [ '/api' ],
    target: APIGateway,
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
  }
];

module.exports = PROXY_CONFIG;