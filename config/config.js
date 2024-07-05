import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB
  }
};

export default dbConfig;
