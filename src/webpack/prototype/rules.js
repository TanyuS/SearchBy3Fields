const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const {isProduction} = require('../env');
const getBabelConfig = require('../babel-config');

module.exports = function (extractor) {
	return [
		{
			test: /\.(svg|jpg|png|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 10000,
					outputPath: 'images/'
				}
			}]
		}, {
			test: /\.(woff|woff2|ttf|eot)$/,
			use: [{
				loader: 'file-loader',
				options: {
					outputPath: 'fonts/'
				}
			}]
		}, {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: getBabelConfig({
					plugins: (function () {
						if (isProduction()) {
							return [];
						}

						return [
							['react-transform', {
								transforms: [{
									transform: 'react-transform-hmr',
									imports: ['react'],
									locals: ['module']
								}, {
									transform: 'react-transform-catch-errors',
									imports: ['react', 'redbox-react']
								}]
							}]
						];
					}())
				})
			}]
		}, {
			test: /\.css$/,
			use: (function () {
				const pipeline = [
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: [
								csso({
									sourceMap: true,
									restructure: false
								})
							]
						}
					}
				];

				if (isProduction()) {
					return extractor.extract({
						fallback: 'style-loader',
						use: pipeline
					});
				}

				return ['style-loader'].concat(pipeline);
			}())
		}, {
			test: /\.less$/,
			use: (function () {
				const pipeline = [
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: [
								autoprefixer(),
								csso({
									sourceMap: true,
									restructure: false
								})
							]
						}
					},
					{
						loader: 'less-loader',
						options: {
							sourceMap: true
						}
					}
				];

				if (isProduction()) {
					return extractor.extract({
						fallback: 'style-loader',
						use: pipeline
					});
				}

				return ['style-loader'].concat(pipeline);
			}())
		}
	];
};
