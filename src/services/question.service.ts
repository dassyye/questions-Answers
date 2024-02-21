import { ModelStatic } from 'sequelize' // typing of typescript
import Question from '../db/models/question' // Model
import { randomUUID } from 'node:crypto'

import { resp } from '../utils/resp'

class QuestionService {
  private model: ModelStatic<Question> = Question

  async get() {
    const questions = await this.model.findAll()

    return resp(200, questions)
  }

  async create(question: string) {
    const questions = await this.model.create({
      id: randomUUID(),
      question
    })

    return resp(201, questions)
  }
}

export default QuestionService