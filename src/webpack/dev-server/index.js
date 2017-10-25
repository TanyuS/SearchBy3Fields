process.env.NODE_ENV = 'hmr';

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./config.js');

const compiler = webpack(config);
const app = express();

app.set('json spaces', 2);

app.use('/', (req, res, next) => {
	if (req.path === '/') {
		res.redirect('/index.html');
		return;
	}

	next();
});

app.use(webpackDevMiddleware(compiler, {
	noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, () => {
	console.log('Listening at http://127.0.0.1:3000'); // eslint-disable-line no-console
});
