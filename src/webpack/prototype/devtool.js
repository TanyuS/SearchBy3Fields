const {isProduction} = require('../env');

module.exports = isProduction() ? 'source-map' : 'eval';
