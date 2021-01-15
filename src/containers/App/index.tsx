import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../../components/global/Layout';

import HomePage from '../HomePage/index';
import ProfilePage from '../ProfilePage/index';
import StatistikPage from '../StatistikPage/index';
import * as ROUTES from './constants';

const index = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
					<Route exact path={ROUTES.PROFIL_PAGE} component={ProfilePage} />
					<Route exact path={ROUTES.STATISTIK_PAGE} component={StatistikPage} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default index;
