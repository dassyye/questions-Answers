import sequelize, { Model } from 'sequelize'
import db from '.'

import Question from './question'

class Reply extends Model {
  declare id: string
  declare reply: string
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
  }
}, {
  sequelize: db,
  tableName: 'reply'
})

Reply.belongsTo(Question, {
  foreignKey: 'id',
  as: 'question'
})

export default Reply