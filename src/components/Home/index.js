import React from 'react';
import { StickyFooter } from './footer';
import { Jumbotron } from './jumbotron';
import { Highlight } from './highlight'
import { InlineContent } from './inlineContent';
import { InlineContactUs } from './inlineContactUs';
import { withFirebase } from '../Firebase';

const HomePage = ({ firebase }) => {
  firebase.analytics.logEvent('PageInit-HomePage');
  console.log('console-PageInit-HomePage');
  return (
  <div>
    <Jumbotron/>
    <Highlight/>
    <InlineContent/>
    <InlineContactUs/>
    <StickyFooter/>
  </div>
)};
// export default HomePage;
export default withFirebase(HomePage);
// import { withAuthorization } from '../Authentication/Session';
// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);

/**
 * what is a virtual cfo ?
 * how we can help you?
 * 
 */