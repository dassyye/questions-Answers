import { NextFunction, Request, Response } from 'express'
import QuestionService from '../services/question.service'

import { z } from 'zod'

class QuestionController {
  private service = new QuestionService()

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.get()

      res.status(status).json(message)
    } catch(error) {
      next(error)
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const questionSchema = z.object({
        question: z.string(),
      })
    
      const { question } = questionSchema.parse(req.body)

      const { status, message } = await this.service.create(question)

      res.status(status).json(message)
    } catch(error) {
      next(error)
    }
  }
}

export default QuestionController