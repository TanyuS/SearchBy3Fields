import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './router/index';

render(
	React.createElement(
		BrowserRouter,
		null,
		React.createElement(
			AppRouter,
			null
		)
	),
	document.getElementById('application-content')
);
