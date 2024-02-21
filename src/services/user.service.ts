import { ModelStatic } from 'sequelize'
import User from '../db/models/user'
import { resp } from '../utils/resp'
import { userBodySchema } from './schemas'
import { randomUUID } from 'node:crypto'
import { IUser } from '../interfaces/User'
import md5 from 'md5'
import { sign } from '../jwt'

class UserService {
  private model: ModelStatic<User> = User

  async get() {
    const users = await this.model.findAll()

    return resp(200, users)
  }

  async create(user: IUser) {
    const userParse = userBodySchema.parse(user)
    const hashPassword = md5(userParse.password)

    const createdUser = await this.model.create({
      id: randomUUID(),
      ...userParse,
      password: hashPassword,
    })

    return resp(201, createdUser)
  }

  async login(body: { email: string, password: string }) {
    const hashPassword = md5(body.password)

    const user = await this.model.findOne({
      where: {
        email: body.email,
        password: hashPassword
      }
    })

    if(!user) return resp(404, 'User not found')

    const { id, email } = user

    const token = sign({ id, email })

    return resp(200, { id, email, token })
  }
}

export default UserService