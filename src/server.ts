import express from 'express'
import bodyParser from 'body-parser'
import { env } from './env/index.js'

import { question } from './routes/question.js'

const app = express()

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