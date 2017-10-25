const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const {isProduction} = require('../env');
const getBabelConfig = require('../babel-config');

module.exports = function (extractor) {
	return [
		{
			test: /\.(svg|jpg|png|git)$/,
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
							return [
								['trimmer']
							];
						}

						return [
							['trimmer'],
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
			use: extractor.extract({
				fallback: 'style-loader',
				use: (function () {
					const list = [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						}
					];

					if (isProduction()) {
						list.push({
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
						});
					}

					return list;
				}())
			})
		}, {
			test: /\.less$/,
			use: extractor.extract({
				fallback: 'style-loader',
				use: [
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
							plugins: (function () {
								const list = [
									autoprefixer()
								];

								if (isProduction()) {
									list.push(
										csso({
											sourceMap: true,
											restructure: false
										})
									);
								}

								return list;
							}())
						}
					},
					{
						loader: 'less-loader',
						options: {
							sourceMap: true
						}
					}
				]
			})
		}
	];
};
