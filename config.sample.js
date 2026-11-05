// Sample configuration for documentation purposes.
// Copy this file to config.js and replace each placeholder with your own value.
// Never commit real credentials to this repository.

module.exports = {
  databaseUrl: process.env.DATABASE_URL || 'postgres://USER:PASSWORD@localhost:5432/DATABASE',
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_AWS_SECRET_ACCESS_KEY',
  apiToken: process.env.API_TOKEN || 'YOUR_API_TOKEN',
  jwtSigningSecret: process.env.JWT_SIGNING_SECRET || 'YOUR_JWT_SIGNING_SECRET',
  openaiApiKey: process.env.OPENAI_API_KEY || 'sk-YOUR_OPENAI_API_KEY',
  anthropicApiKey: process.env.ANTHROPIC_API_KEY || 'sk-ant-YOUR_ANTHROPIC_API_KEY',
};
