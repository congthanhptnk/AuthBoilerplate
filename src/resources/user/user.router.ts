import {Router} from 'express'
import * as userC from './user.controller'

const router = Router()

router.route('/').post(userC.createNewUser)

export default router
