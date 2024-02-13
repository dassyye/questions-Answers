import { Router } from 'express'
import { z } from 'zod'

import { sequelize } from '../lib/sequelize'
import questionModel from '../lib/models'

export const question = Router()

question.get('/question', (req, res) => {
  questionModel.findAll({raw: true}).then(question => {
    console.log(question)
  })
  res.render('question')
})


question.post('/question', (req, res) => {
  const questionSchema = z.object({
    title: z.string(),
    description: z.string(),
  })

  const { title, description } = questionSchema.parse(req.body)

  questionModel.create({
    title,
    description
  }).then(() => {
    res.redirect('/')
  }).catch((error) => {
    console.log(error)
  })
})