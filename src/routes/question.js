import { Router } from 'express'

export const question = Router()

question.get('/question', (req, res) => {
  res.render('question')
})