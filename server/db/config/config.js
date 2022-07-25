require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": "postgres",
    "password": "password",
    "database": "postgres",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": null,
    "database": "postgres",
    "host": process.env.DATABASE_URL,
    "dialect": "postgres"
  }
};
