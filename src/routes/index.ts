import { Router } from 'express'

import { user } from './user'
import { question } from './question'
import { reply } from './reply'

export const router = Router()

router.use(user)
router.use(question)
router.use(reply)