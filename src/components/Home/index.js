import React from 'react';
import StickyFooter from './footer';
import { Jumbotron } from './jumbotron';
import { Highlight } from './highlight';
import { InlineContent } from './inlineContent';
import InlineContactUs from './inlineContactUs';
import { Logger } from '../../utils/logger';

class HomePage extends React.Component {

  componentDidMount() {
    Logger().log('HomePage-componentDidMount');
  }

  render() {
    return (
      <div>
        <Jumbotron/>
        <Highlight/>
        <InlineContent/>
        <InlineContactUs/>
        <StickyFooter/>
      </div>
    )
  }
};
export default HomePage;