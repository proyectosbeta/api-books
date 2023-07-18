const dotenv = require('dotenv');

dotenv.config();

const { APP_PORT } = process.env;
const { URL_DOMAIN } = process.env;

module.exports = {
  APP_PORT,
  URL_DOMAIN,
};
