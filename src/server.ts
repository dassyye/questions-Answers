import express, { NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser'

import { env } from './env/index.ts'

import { router } from './routes/index.ts'

const app = express()

// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// estou dizendo para o express que a view engine utilizada sera o EJS.
app.set('view engine', 'ejs')
// adicionando arquivos estaticos.
app.use(express.static('styles'))

app.use(router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(env.PORT, () => {
  console.log('server is running!')
})