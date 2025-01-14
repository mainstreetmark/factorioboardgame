/** @format */

module.exports = {
  publicPath: '/factorioboardgame/',
	chainWebpack: (config) => {
		config.module
			.rule("markdown")
			.test(/\.md$/)
			.use("raw-loader")
			.loader("raw-loader")
			.end();
	},
};
