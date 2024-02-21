import sequelize, { Model } from 'sequelize'
import db from '.'

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
  tableName: 'question',
  timestamps: false
})

export default Question