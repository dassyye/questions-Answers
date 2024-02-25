import { DataTypes, Model } from 'sequelize'

import connection from '.'

class Question extends Model {
  declare id: string
  declare question: string
}

Question.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  question: DataTypes.STRING
}, {
  sequelize: connection,
  underscored: true,
  tableName: 'question'
})

export default Question