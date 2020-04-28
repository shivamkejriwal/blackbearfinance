import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import BusinessIcon from '@material-ui/icons/Business';

import { withStyles } from '@material-ui/core/styles';
import { Logger } from '../../../utils/logger';
import * as ROUTES from '../../../constants/routes';

const linkStyle = {
    textDecoration: 'none'
}

const useStyles = (theme) => ({
    MiniNavigation: {}
});

class MiniNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Logger().log('MiniNavigation-componentDidMount', { consoleOnly: true });
    }

    render() {
        // const { classes } = this.props;
        return (
            <Grid container item lg={3} md={3} xs={10} justify='center'>
                <List>
                <Link to={ROUTES.HOME} style={linkStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>
                <Link to={ROUTES.CONTACTUS} style={linkStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <ContactsIcon />
                        </ListItemIcon>
                        <ListItemText primary='Contact Us' />
                    </ListItem>
                </Link>
                <Link to={ROUTES.SERVICES} style={linkStyle}>
                    <ListItem button>
                        <ListItemIcon>
                            <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary='Services' />
                    </ListItem>
                </Link>
                </List>
            </Grid>
        );
    }
};
export default withStyles(useStyles)(MiniNavigation);