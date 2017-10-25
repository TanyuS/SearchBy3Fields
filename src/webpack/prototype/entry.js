const {isProduction} = require('../env');

const productionEntries = {
	app: [
		'./src/entries/prototype/app.js'
	]
};

const developmentEntries = {
	app: [
		require.resolve('eventsource-polyfill'),
		'webpack-hot-middleware/client?reload=true',
		'./src/entries/prototype/app.js'
	]
};

module.exports = isProduction() ? productionEntries : developmentEntries;
