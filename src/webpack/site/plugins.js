const webpack = require('webpack');
const {isProduction, isDevelopment} = require('../env');

module.exports = function (extractor) {
	const plugins = [];

	plugins.push(
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"'
		}),
		extractor
	);

	if (isProduction()) {
		plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: true,
				compress: {
					warnings: false
				}
			})
		);
	} else if (!isDevelopment()) {
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin()
		);
	}

	return plugins;
};
