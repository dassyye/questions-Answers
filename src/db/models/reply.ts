import { DataTypes, Model } from 'sequelize'

import connection from '.'

import Question from './question'

class Reply extends Model {
  declare id: string
  declare reply: string
}

Reply.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  reply: DataTypes.STRING,
}, {
  sequelize: connection,
  underscored: true,
  tableName: 'reply'
})

Reply.belongsTo(Question, {
  foreignKey: 'question_id',
  as: 'question'
})

export default Reply