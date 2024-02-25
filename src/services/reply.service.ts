import { ModelStatic } from 'sequelize' // typing of typescript
import Reply from '../db/models/reply' // Model
import { randomUUID } from 'node:crypto'

import { resp } from '../utils/resp'
import { IReply } from '../interfaces/Reply'
import { replyBodySchema } from './schemas'
import Question from '../db/models/question'

class ReplyService {
  private model: ModelStatic<Reply> = Reply

  async get() {
    const replys = await this.model.findAll()

    return resp(200, replys)
  }

  async create(reply: IReply) {
    const replyParse = replyBodySchema.parse(reply)

    const questionId = await Question.findByPk(replyParse.question_id)

    if(!questionId) return resp(404, 'question not found')

    const createdReply = await this.model.create({
      id: randomUUID(),
      ...replyParse
    })

    return resp(201, createdReply)
  }
}

export default ReplyService