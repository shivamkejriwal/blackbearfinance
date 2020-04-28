import React from 'react';

import ServiceList from './serviceList';
// import ContactUser from './contactUser';
import ContactClient from './contactClient';
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
    this.toggleServices = this.toggleServices.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      showServices: false
    }
  }
  componentDidMount() {
    Logger().log('ServicesPage-componentDidMount');
  }

  handleChange(serviceMap) {
    Logger().log('ServicesPage-handleChange', serviceMap);
    this.requestedServices = serviceMap;
  }

  toggleServices() {
    this.setState({showServices: !this.state.showServices});
  }

  onSubmit(payload) {
    Logger().log('ServicesPage-ContactUser-onSubmit', {
      requestedServices: this.requestedServices,
      payload
    });
    Firestore()
      .setClients({
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        requestCallBackDate: `${getCurrentTime().dateString}`,
        requestedServices: this.requestedServices
      });
  }
  
  render() {
    return (
      <div style={divStyle}>
        <ServiceList handleChange={this.handleChange} showServices={this.state.showServices}/>
        {/* <ContactUser onSubmit={this.onSubmit} /> */}
        <ContactClient onSubmit={this.onSubmit} toggleServices={this.toggleServices}/>
        <StickyFooter/>
      </div>
    )
  }
};
export default ServicesPage;