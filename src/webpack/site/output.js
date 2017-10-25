const path = require('path');
const {isProduction} = require('../env');

module.exports = {
	filename: '[name].js',
	chunkFilename: isProduction() ? '[chunkhash].chunk.js' : '[id].chunk.js',
	path: path.resolve('./_/site'),
	publicPath: '/_/site/'
};
