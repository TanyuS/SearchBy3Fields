import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import AppRouter from '../../entries/prototype/router/index';
import {isProduction} from '../env';

function renderPageContent(locals) {
	if (!isProduction()) {
		return '';
	}

	const props = {
		location: `/${locals.path}`,
		context: {}
	};

	return renderToString(
		React.createElement(
			StaticRouter,
			props,
			React.createElement(
				AppRouter,
				null
			)
		)
	);
}

module.exports = function (locals) {
	return `<!DOCTYPE html>
<html>
<!-- Build: ${new Date().toISOString()} -->
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i" rel="stylesheet">
<title>Prototype | CAVC</title>
</head>
<body>
<div id="application-content">${renderPageContent(locals)}</div>
</body>
</html>
`;
};
