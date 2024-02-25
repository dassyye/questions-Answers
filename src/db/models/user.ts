import { Model, DataTypes } from 'sequelize'

import connection from '.'

class User extends Model {
  declare id: string
  declare username: string
  declare email: string
  declare password: string
}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize: connection,
  underscored: true,
  tableName: 'user'
})

export default User