import express from 'express'
import bodyParser from 'body-parser'

import { sequelize } from './lib/sequelize.ts'
import questionModel from './lib/models.ts'

import { env } from './env/index.ts'

import { question } from './routes/question.ts'

const app = express()

// connetion db
try {
  sequelize.authenticate()
  console.log('Connection has been established successfully.');
  questionModel
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// estou dizendo para o express que a view engine utilizada sera o EJS.
app.set('view engine', 'ejs')
// adicionando arquivos estaticos.
app.use(express.static('styles'))

app.use(question)

app.listen(env.PORT, () => {
  console.log('server is running!')
})