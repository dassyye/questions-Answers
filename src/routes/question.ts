import { Router } from 'express'

import { sequelize } from '../lib/sequelize'

export const question = Router()

question.get('/question', (req, res) => {
  res.render('question')
})

question.post('/question', (req, res) => {
  const title = req.body.title
  const description = req.body.description

  console.log(`${title} ${description}`)

  res.send('formulario enviado!')
})