const getBabelConfig = require('./babel-config');

require('babel-register')(getBabelConfig({
	ignore: /(node_modules)/
}));
