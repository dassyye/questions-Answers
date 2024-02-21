import { NextFunction, Request, Response } from 'express'
import ReplyService from '../services/reply.service'

import { z } from 'zod'

class ReplyController {
  private service = new ReplyService()

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
      const { status, message } = await this.service.create(req.body)

      res.status(status).json(message)
    } catch(error) {
      next(error)
    }
  }
}

export default ReplyController