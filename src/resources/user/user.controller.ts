import * as UserService from './user.service'
import {RequestHandler} from 'express-serve-static-core'

export const createNewUser: RequestHandler = async (req, res) => {
	try {
		const {fname, lname, password, avatar, email} = req.body
		const user = await UserService.createNewUser(
			fname,
			lname,
			password,
			avatar,
			email,
		)
		res.status(201).json(user)
	} catch (err) {
		res.status(400).json({err})
	}
}

export const deleteUser: RequestHandler = (req, res) => {
	res.status(400).send(req.body)
}
