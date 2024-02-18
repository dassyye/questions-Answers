import { Sequelize } from 'sequelize'
import * as config from '../config/config'

export default new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
})