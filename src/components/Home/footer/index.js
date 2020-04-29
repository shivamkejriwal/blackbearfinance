import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MiniNavigation from './miniNavigation';
import ContactDetails from './contactDetails';
import { Logger } from '../../../utils/logger';

const useStyles = (theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    borderTop: '1px solid grey',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
});

class StickyFooter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Logger().log('StickyFooter-componentDidMount', {
            consoleOnly: true
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <footer className={classes.footer}>
            <Container maxWidth='md'>
                <Grid container spacing={3} justify='space-between'>
                <MiniNavigation />
                <ContactDetails />
                </Grid>
            </Container>
            </footer>
        );
    }
}
export default withStyles(useStyles)(StickyFooter);