const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {isProduction} = require('../env');
const generator = require('./generator');

import routes from '../../entries/prototype/routes';

module.exports = function (extractor) {
	const plugins = [];

	plugins.push(
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"'
		})
	);

	routes.forEach(route => {
		plugins.push(new HtmlWebpackPlugin({
			filename: route.path,
			inject: true,
			templateContent: generator({
				path: route.path,
				NODE_ENV: process.env.NODE_ENV
			})
		}));
	});

	plugins.push(
		new CopyWebpackPlugin([{
			from: './src/public'
		}])
	);

	if (isProduction()) {
		plugins.push(
			extractor,
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: true,
				compress: {
					warnings: false
				}
			})
		);
	} else {
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin()
		);
	}

	return plugins;
};
