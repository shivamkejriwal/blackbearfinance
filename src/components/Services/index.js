import React from 'react';

import ServiceList from './serviceList';
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
          <ServiceList handleChange={this.handleChange}/>
          <ContactUser onSubmit={this.onSubmit} />
        </form>
        <StickyFooter/>
      </div>
    )
  }
};
export default ServicesPage;