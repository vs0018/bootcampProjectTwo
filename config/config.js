// This allows the whole config to be loaded even though we're not using it in production
module.exports = {
  development: {
    username: "root",
    // make sure to set this env variable in your .env file
    password: process.env.LOCAL_MYSQL_PASSWORD,
    // password: process.env.MYSQL_PASSWORD,
    database: "goplay_db",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },

  test: {
    username: "root",
    password: process.env.LOCAL_MYSQL_PASSWORD,
    database: "goplay_db_test",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },

  production: {
    /*
     * Set all of the production environment variables here
     * No need to add these in your .env files
     * Go to the heroku user configs inside of settings
     * Add these values, get them from JAWSDB console page
     */
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
    host: process.env.PROD_DB_HOST,
    dialect: "mysql",
    logging: false
  }
};
