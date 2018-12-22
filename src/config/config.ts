import * as dotenv from 'dotenv';

dotenv.config();

export const CONFIG: Record<string, string> = {
  app: process.env.APP || 'dev',
  port: process.env.PORT || '3000',
  db_dialect: process.env.DB_DIALECT || 'mongo',
  db_host: process.env.DB_HOST || 'localhost',
  db_port: process.env.DB_PORT || '27017',
  db_name: process.env.DB_NAME || 'roulette-rest',
  db_user: process.env.DB_USER || 'clicktronix',
  db_password: process.env.DB_PASSWORD || '23031994',
  jwt_encryption: process.env.JWT_ENCRYPTION || 'jwt_please_change',
  jwt_expiration: process.env.JWT_EXPIRATION || '10000',
};
