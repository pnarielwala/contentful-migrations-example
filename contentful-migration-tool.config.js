// const { config } = require('dotenv');

// const ENV = config().parsed ?? process.env;

module.exports = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  migrationDirectory: 'migrations',
};
