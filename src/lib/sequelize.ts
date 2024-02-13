import { Sequelize } from 'sequelize'

const _sequelize = new Sequelize('mysql', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})



try {
  _sequelize.authenticate()
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export const sequelize = _sequelize
