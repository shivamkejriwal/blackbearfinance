import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

import ServiceOverview from './overview';
import BookkeepingServices from './bookkeeping';
import AccountingServices from './accounting';
import CfoServices from './cfo';
import ContactUser from './contactUser';
import StickyFooter from '../Home/footer';

import { Logger } from '../../utils/logger';

const divStyle = {
  padding: '20px 0',
};

class ServicesPage extends React.Component {
  componentDidMount() {
    Logger().log('ServicesPage-componentDidMount');
  }
  
  render() {
    return (
      <div style={divStyle}>
        <ServiceOverview/>
        <BookkeepingServices/>
        <AccountingServices/>
        <CfoServices/>
        <ContactUser/>
        <StickyFooter/>
      </div>
    )
  }
};
export default ServicesPage;