import sequelize, { Model } from 'sequelize'
import db from '.'

import Question from './question'

class Reply extends Model {
  declare id: string
  declare reply: string
  declare questionId: string
}

Reply.init({
  id: {
    type: sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'question',
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  reply: {
    type: sequelize.STRING,
    allowNull: false
  },
  questionId: {
    type: sequelize.UUID,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
}, {
  sequelize: db,
  tableName: 'reply',
  underscored: true,
  timestamps: false
})

Reply.belongsTo(Question, {
  foreignKey: 'questionId',
})

export default Reply