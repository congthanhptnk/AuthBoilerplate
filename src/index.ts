import {app} from './server'
import connectDb from './services/db'

connectDb()
	.then(() => {
		console.log('DB connected')
	})
	.catch(err => {
		console.log(err)
	})

const server = app.listen('3000', () => {
	console.log('server running on 3000s')
})

process.on('unhandledRejection', e => {
	server.close(() => {
		process.exit(1)
	})
})
