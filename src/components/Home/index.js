import React from 'react';
import { StickyFooter } from './footer';
import { Jumbotron } from './jumbotron';
import { Highlight } from './highlight'
import { InlineContent } from './inlineContent';
import { InlineContactUs } from './inlineContactUs';
import { Logger } from '../../utils/logger';

const HomePage = () => {
  Logger.log('ComponentInit-HomePage');

  return (
  <div>
    <Jumbotron/>
    <Highlight/>
    <InlineContent/>
    <InlineContactUs/>
    <StickyFooter/>
  </div>
)};
export default HomePage;
// export default withFirebase(HomePage);
// import { withAuthorization } from '../Authentication/Session';
// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);