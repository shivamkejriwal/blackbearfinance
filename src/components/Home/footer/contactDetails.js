import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from '@material-ui/core/Grid';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { Logger } from '../../../utils/logger';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    ContactDetails: {}
});

class ContactDetails extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
      Logger().log('ContactDetails-componentDidMount', { consoleOnly: true });
    }
  
    render() {
        const { classes } = this.props;
        return (
            <Grid container item lg={3} md={3} xs={10} className={classes.ContactDetails} justify='center'>
                <List>
                <ListItem>
                    <Typography variant='h6'>Black Bear Finance</Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PhoneIcon />
                    </ListItemIcon>
                    <Typography variant='body1'>
                        217-111-2223
                    </Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <EmailIcon />
                    </ListItemIcon>
                    <Typography variant='body1'>
                        email@info.com
                    </Typography>
                </ListItem>
                </List>
            </Grid>
        );
    }
};
export default withStyles(useStyles)(ContactDetails);