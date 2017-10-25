const {isProduction, isDevelopment} = require('../env');

function getSourceMapMode() {
	if (isDevelopment()) {
		return '';
	}

	return isProduction() ? 'source-map' : 'eval';
}

module.exports = getSourceMapMode();
