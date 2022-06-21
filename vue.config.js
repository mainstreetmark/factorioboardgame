module.exports = {
	chainWebpack: config => {
		config.module.rule('md')
			.test(/\.(png|jpg|gif|svg)$/)
			.use('file-loader')
			.loader('file-loader')
			.options({
				name: '[name].[ext]?[hash]',
			})
			.end()
			.test(/\.md/)
			.use('vue-loader')
			.loader('vue-loader')
			.end()
			.use('vue-markdown-loader')
			.loader('vue-markdown-loader/lib/markdown-compiler')
			.options({
				raw: true
			})
	}
}


