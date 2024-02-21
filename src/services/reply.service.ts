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

    // const questionId = await Question.findByPk(replyParse.questionId)
    // console.log(questionId)

    // if(!questionId) return resp(404, 'question not found')

    const createdReply = await this.model.create({
      id: randomUUID(),
      reply: 'oi vida',
      questionId: '9f91ca41-db3f-49ef-a15b-fa5c8300a9c0'
    })

    return resp(201, createdReply)
  }
}

export default ReplyService