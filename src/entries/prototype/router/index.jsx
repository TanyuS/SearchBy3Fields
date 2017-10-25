import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import routes from '../routes';

const AppRouter = () => (
	<Switch>
		{routes.map(({path, component}, i) => (
			<Route key={i} path={`/${path}`} component={component}/>
		))}
		<Redirect from="/" to="index.html"/>
	</Switch>
);

export default AppRouter;
