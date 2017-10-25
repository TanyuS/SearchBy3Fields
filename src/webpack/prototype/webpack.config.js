require('../babel-register');

// suppress processing styles and SVG on server-side
require('css-modules-require-hook')({
	extensions: ['.css', '.less', '.svg', '.png', '.jpg'],
	preprocessCss: () => ''
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = require('../env').isProduction;
const entry = require('./entry');
const output = require('./output');
const resolve = require('./resolve');
const rules = require('./rules');
const plugins = require('./plugins');
const devtool = require('./devtool');
const stats = require('./stats');

const extractor = new ExtractTextPlugin({
	filename: isProduction() ? '[name].[hash].css' : '[name].css',
	allChunks: true
});

module.exports = {
	entry,
	output,
	resolve,
	module: {
		rules: rules(extractor)
	},
	plugins: plugins(extractor),
	devtool,
	stats
};
