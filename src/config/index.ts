import _ from 'lodash'
import devConfig from './devConfig'

const env = process.env.NODE_ENV || 'development'

const baseConfig = {}

let envConfig

switch (env) {
	case 'development':
		envConfig = devConfig
		break
	default:
		envConfig = devConfig
		break
}

const config = _.merge(baseConfig, envConfig)

export default config
