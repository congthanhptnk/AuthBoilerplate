export const createNewUser = (req, res) => {
	console.log(req.params)
	res.status(201).send(req.body)
}
export const deleteUser = (req, res) => {
	res.status(400).send(req.body)
}
