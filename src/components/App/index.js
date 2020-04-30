import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from '../Navigation';
import { withAuthentication } from '../Authentication/Session';
import AppRoutes from './routes';
import { Logger } from '../../utils/logger';
import { middleware } from './middleware'

class App extends React.Component {
  constructor(props) {
    super(props);
    middleware();
  }

  componentDidMount() {
    Logger().log('App-componentDidMount');
  }

  render () {
    return (
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    )
  };
};

export default withAuthentication(App);