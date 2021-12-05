const WebpackBar = require('webpackbar')

module.exports = {
	webpack: {
		plugins: [
			// webpack构建进度条
			new WebpackBar({
				profile: true
			})
		]
	}
}
