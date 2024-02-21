import { Router } from 'express'

import QuestionController from '../controller/question.controller'
import { verifyToken } from '../jwt'

const control = new QuestionController()

export const question = Router()

question.get('/question', control.get.bind(control))

question.post('/question', verifyToken, control.create.bind(control))