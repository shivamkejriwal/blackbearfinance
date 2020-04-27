import React from 'react';

import ServiceList from './serviceList';
import ContactUser from './contactUser';
import StickyFooter from '../Home/footer';

import { Firestore } from '../../utils/firestore';
import { getCurrentTime } from '../../utils/util';
import { Logger } from '../../utils/logger';

const divStyle = {
  padding: '20px 0',
};

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.requestedServices = null;
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    Logger().log('ServicesPage-componentDidMount');
  }

  handleChange(serviceMap) {
    Logger().log('ServicesPage-handleChange', serviceMap);
    this.requestedServices = serviceMap;
  }

  onSubmit() {
    Logger().log('ServicesPage-ContactUser-onSubmit', this.serviceMap);
    Firestore()
            .getUser()
            .then(user => {
                Logger().log('LetUsContactYou-CurrentUser', {
                    user,
                    consoleOnly: true
                });
                const requestCallBackCount = user.requestCallBackCount || 0;
                return Firestore().setUser(user, {
                    'requestCallBackCount': requestCallBackCount + 1,
                    'requestCallBackDate': `${getCurrentTime().dateString}`,
                    'requestedServices': this.requestedServices
                });
            });
  }
  
  render() {
    return (
      <div style={divStyle}>
        <ServiceList handleChange={this.handleChange}/>
        <ContactUser onSubmit={this.onSubmit} />
        <StickyFooter/>
      </div>
    )
  }
};
export default ServicesPage;