import React from 'react';
import { StickyFooter } from '../Home/footer';
import { Logger } from '../../utils/logger';

const ContactUsPage = () => {
  Logger().log('ContactUsPage-init');
  return (
    <div>
      <h1>Contact Us Page</h1>
      <p>Just call us and save your self some trouble</p>
      <StickyFooter/>
    </div>
)};
export default ContactUsPage;
// import { withAuthorization } from '../Authentication/Session';
// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);