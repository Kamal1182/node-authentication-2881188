const logger = require('pino')({ prettyPrint: true });
require('dotenv').config();

module.exports = {
  database: {
    // dsn: 'mongodb://localhost:27017/linkedin-node-authentication',
    dsn: 'mongodb+srv://aboelmaged:Kamal-821780@cluster0.afwv5bu.mongodb.net/',
    status: {
      connected: false,
      error: false,
    },
  },
  JWTSECRET: process.env.JWTSECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  logger,
};
