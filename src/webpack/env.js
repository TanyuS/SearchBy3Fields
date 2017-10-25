function getNodeEnv() {
	return (process.env.NODE_ENV || '').toLowerCase().trim();
}

exports.isProduction = function isProduction() {
	return getNodeEnv() === 'production';
};

exports.isDevelopment = function isDevelopment() {
	return getNodeEnv() === 'development';
};

exports.isHmr = function isHmr() {
	return getNodeEnv() === 'hmr';
};
