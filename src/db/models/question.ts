import sequelize, { Model } from 'sequelize'
import db from '.'

import Reply from './reply'

class Question extends Model {
  declare id: string
  declare question: string
}

Question.init({
  id: {
    type: sequelize.UUID,
    allowNull: false,
    primaryKey: true
  },
  question: {
    type: sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'question'
})

Question.hasMany(Reply, {
  foreignKey: 'id',
  as: 'reply'
})

export default Question