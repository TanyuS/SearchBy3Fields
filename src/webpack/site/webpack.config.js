require('../babel-register');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entry = require('./entry');
const output = require('./output');
const resolve = require('./resolve');
const rules = require('./rules');
const plugins = require('./plugins');
const devtool = require('./devtool');
const stats = require('./stats');

const extractor = new ExtractTextPlugin({
	filename: '[name].css',
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
