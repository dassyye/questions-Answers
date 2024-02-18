import sequelize, { Model } from 'sequelize'

import db from '.'

class User extends Model {
  declare id: string
  declare username: string
  declare email: string
  declare password: string
}

User.init({
  id: {
    type: sequelize.UUID,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'user'
})

export default User