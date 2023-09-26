const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_14ki', // Database name
  'clouduser', // User
  'id5J4bnvJov08uxfnQc9tbOTozauOr9u', // Password
  {
    host: 'pg-ck9d0f6gtj9c73c4g4k0-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
