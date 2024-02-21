import { Router } from 'express'

import UserController from '../controller/user.controller'

const control = new UserController()

export const user = Router()

user.get('/user', control.get.bind(control))
user.post('/user', control.create.bind(control))
user.post('/login', control.login.bind(control))