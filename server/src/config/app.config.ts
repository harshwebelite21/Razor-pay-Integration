import { config } from 'dotenv';
config();

export const appConfig = {
  mongodbConnectionString: getOsEnv('DB_URL'),
  port: getOsEnv('PORT') || 4000,
  key_id: getOsEnv('RAZORPAY_API_KEY'),
  key_secret: getOsEnv('RAZORPAY_API_SECRET'),
};

export function getOsEnv(key: string): string {
  if (typeof process.env[key] === 'undefined') {
    throw Error(`Environment variable ${key} is not set.`);
  }

  return process.env[key] ?? '';
}
