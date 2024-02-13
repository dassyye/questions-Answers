import { Sequelize } from 'sequelize'

const _sequelize = new Sequelize('mysql', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

export const sequelize = _sequelize
