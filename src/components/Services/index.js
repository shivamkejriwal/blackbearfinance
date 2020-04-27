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
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    Logger().log('ServicesPage-componentDidMount');
  }

  handleChange() {}

  onSubmit() {
    Logger().log('ServicesPage-ContactUser-onSubmit');
  }
  
  render() {
    return (
      <div style={divStyle}>
        <form noValidate onSubmit={this.onSubmit} >
          <ServiceOverview handleChange={this.handleChange}/>
          <BookkeepingServices handleChange={this.handleChange}/>
          <AccountingServices handleChange={this.handleChange}/>
          <CfoServices handleChange={this.handleChange}/>
          <ContactUser onSubmit={this.onSubmit} />
        </form>
        <StickyFooter/>
      </div>
    )
  }
};
export default ServicesPage;