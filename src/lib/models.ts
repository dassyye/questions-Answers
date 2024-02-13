import { Sequelize } from 'sequelize'
import { sequelize } from './sequelize'

const questionModel = sequelize.define('question', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

questionModel.sync({ force: false }).then(() => {
  console.log('question table created!')
})

export default questionModel