import {app} from './server'

const server = app.listen('3000', () => {
	console.log('server running on 3000')
})

process.on('unhandledRejection', e=> {
  server.close() => {
    process.exit(1)
  }
})
