import { Router } from 'express'

import ReplyController from '../controller/reply.controller'
import { verifyToken } from '../jwt'

const control = new ReplyController()

export const reply = Router()

reply.get('/reply', control.get.bind(control))

reply.post('/reply', verifyToken, control.create.bind(control))