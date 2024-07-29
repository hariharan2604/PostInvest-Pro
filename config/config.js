import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
};

export default dbConfig;


// module.exports = {
//   development: {
//     username: process.env.DB_USERNAME || 'root',
//     password: process.env.DB_PASSWORD || 'root',
//     database: process.env.DB_NAME || 'postinvest_pro',
//     host: process.env.DB_HOST || 'db',
//     dialect: process.env.DB || 'mysql', // Add this line
//     port: process.env.PORT || 3306,
//   },
//   test: {
//     username: process.env.DB_USERNAME || 'root',
//     password: process.env.DB_PASSWORD || 'root',
//     database: process.env.DB_NAME || 'post',
//     host: process.env.DB_HOST || 'localhost',
//     dialect: process.env.DB || 'mysql', // Add this line
//     port: process.env.PORT || 3000,
//   },
//   production: {
//     username: process.env.DB_USERNAME || 'root',
//     password: process.env.DB_PASSWORD || 'root',
//     database: process.env.DB_NAME || 'post',
//     host: process.env.DB_HOST || 'localhost',
//     dialect: process.env.DB || 'mysql', // Add this line
//     port: process.env.PORT || 3000,
//   }
// };
