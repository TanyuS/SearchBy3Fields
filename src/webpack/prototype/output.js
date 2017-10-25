const path = require('path');
const {isProduction} = require('../env');

module.exports = {
	filename: isProduction() ? '[name].[hash].js' : '[name].js',
	chunkFilename: isProduction() ? 'chunk.[chunkhash].js' : 'chunk.[id].js',
	path: path.resolve('./_/prototype'),
	publicPath: ''
};
