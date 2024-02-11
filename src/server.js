import express from 'express'
import { question } from './routes/question.js'

const app = express()

// estou dizendo para o express que a view engine utilizada sera o EJS.
app.set('view engine', 'ejs')
// adicionando arquivos estaticos.
app.use(express.static('styles'))

app.use(question)

app.listen(3000, () => {
  console.log('server is running!')
})