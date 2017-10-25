const {isHmr} = require('../env');

const productionEntries = {
	app: [
		'./src/entries/site/app.js'
	]
};

const developmentEntries = {
	app: [
		require.resolve('eventsource-polyfill'),
		'webpack-hot-middleware/client?reload=true',
		'./src/entries/site/app.js'
	]
};

module.exports = isHmr() ? developmentEntries : productionEntries;
