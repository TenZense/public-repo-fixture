// Sample configuration. Copy to config.js and replace the
// placeholder values below with your own real credentials.
// Do NOT commit real secrets — load them from .env / your secrets manager.
module.exports = {
  // e.g. postgres://user:password@host:5432/dbname
  DATABASE_URL: 'postgres://USER:PASSWORD@HOST:5432/DBNAME',

  // AWS IAM secret access key (40-char base64-ish string)
  AWS_SECRET_ACCESS_KEY: 'EXAMPLE_AWS_SECRET_ACCESS_KEY_xxxxxxxxxx',

  // Service API token
  API_TOKEN: 'example-api-token-0000000000000000',

  // Secret used to sign JWTs
  JWT_SIGNING_SECRET: 'example-jwt-signing-secret-change-me',
};
