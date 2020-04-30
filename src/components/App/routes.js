import React from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import SignUpPage from '../Authentication/SignUp';
import SignInPage from '../Authentication/SignIn';
import PasswordForgetPage from '../Authentication/PasswordForget';
import HomePage from '../Home';
import ContactUsPage from '../ContactUs';
import ServicesPage from '../Services';
import AdminPage from '../Admin';
import HealthCheckPage from '../HealthCheck'
import * as ROUTES from '../../constants/routes';

const AppRoutes = () => (
    <Container maxWidth='lg'>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
        />
        <Route path={ROUTES.CONTACTUS} component={ContactUsPage} />
        <Route path={ROUTES.SERVICES} component={ServicesPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.HEALTHCHECK} component={HealthCheckPage} />
    </Container>  
);
export default AppRoutes;