const prototypeConfig = require('../prototype/webpack.config');
const siteConfig = require('../site/webpack.config');

function getConfig() {
	const argv = process.argv.slice(2);

	if (argv.some(arg => arg === '--site')) {
		return siteConfig;
	} else if (argv.some(arg => arg === '--prototype')) {
		return prototypeConfig;
	}

	throw new Error('Please, provide --site or --prototype argument');
}

module.exports = getConfig();
