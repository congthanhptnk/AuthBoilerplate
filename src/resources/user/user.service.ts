import UserModel from './user.model'

export const createNewUser = (
	fname: string,
	lname: string,
	password: string,
	avatar: string,
	email: string,
) => {
	let newUser = {
		fname,
		lname,
		password,
		avatar,
		email,
	}
	return UserModel.create(newUser)
		.then(savedUser => {
			return savedUser
		})
		.catch(err => {
			return err
		})
}
