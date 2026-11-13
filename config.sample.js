// Sample configuration. Copy to config.js and replace the placeholder values
// with your own credentials. Never commit real secrets.
module.exports = {
  databaseUrl: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/dbname',
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_AWS_SECRET_ACCESS_KEY',
  apiToken: process.env.API_TOKEN || 'YOUR_API_TOKEN',
  jwtSigningSecret: process.env.JWT_SIGNING_SECRET || 'YOUR_JWT_SIGNING_SECRET',
};
