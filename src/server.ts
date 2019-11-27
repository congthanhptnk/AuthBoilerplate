import express from 'express'
import dotenv from 'dotenv'
import userRouter from './resources/user/user.router'
import {urlencoded} from 'body-parser'

dotenv.config()

export const app = express()

app.use(urlencoded({extended: true}))
app.use('/users', userRouter)
