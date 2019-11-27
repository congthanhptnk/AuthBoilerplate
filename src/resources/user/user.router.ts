import {Router} from 'express'
import {createNewUser} from './user.controller'

const router = Router()

router.route('/').post(createNewUser)

export default router
