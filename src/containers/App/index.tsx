import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from 'components/global/Layout';

import HomePage from 'containers/HomePage/index';
import ProfilePage from 'containers/ProfilePage/index';
import StatistikPage from 'containers/StatistikPage/index';
import LoginPage from 'containers/LoginPage/index';
import InformasiPublik from 'containers/InformasiPublikPage/index';
import RegulasiPage from 'containers/RegulasiPage/index';
import MaklumatPage from 'containers/MaklumatPage/index';
import ProsedurPage from 'containers/ProsedurPage/index';
import FaqPage from 'containers/FaqPage/index';
import RegisterPage from 'containers/RegisterPage/index';
import InformasiUmumPage from 'containers/InformasiUmumPage';
import InformasiWajibPage from 'containers/InformasiWajibPage';
import AgendaPage from 'containers/AgendaPage';
import NotFoundPage from 'containers/NotFoundPage';
import * as ROUTES from './constants';

const index = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
					<Route exact path={ROUTES.PROFIL_PAGE} component={ProfilePage} />
					<Route exact path={ROUTES.STATISTIK_PAGE} component={StatistikPage} />
					<Route exact path={ROUTES.LOGIN_PAGE} component={LoginPage} />
					<Route exact path={ROUTES.INFORMASI_PAGE} component={InformasiPublik} />
					<Route exact path={ROUTES.INFORMASI_UMUM_PAGE} component={InformasiUmumPage} />
					<Route exact path={ROUTES.INFORMASI_WAJIB_PAGE} component={InformasiWajibPage} />
					<Route exact path={ROUTES.REGULASI_PAGE} component={RegulasiPage} />
					<Route exact path={ROUTES.MAKLUMAT_PAGE} component={MaklumatPage} />
					<Route exact path={ROUTES.PROSEDUR_PAGE} component={ProsedurPage} />
					<Route exact path={ROUTES.REGISTRASI_PAGE} component={RegisterPage} />
					<Route exact path={ROUTES.FAQ_PAGE} component={FaqPage} />
					<Route exact path={ROUTES.AGENDA_PAGE} component={AgendaPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default index;
