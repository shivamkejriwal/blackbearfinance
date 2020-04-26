import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { StyledListItemText, StyledListItemIcon } from './StyledComponents';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import ContactsIcon from '@material-ui/icons/Contacts';
import { withStyles } from '@material-ui/core/styles';

import * as ROUTES from '../../constants/routes';
import { Logger } from '../../utils/logger';

const useStyles = (theme) => ({
});

class SidebarList extends React.Component {

    componentDidMount() {
        Logger().log('SidebarList-componentDidMount');
    }

    render() {
        return(
            <List>
                <Link to={ROUTES.HOME}>
                    <ListItem button>
                        <StyledListItemIcon>
                            <HomeIcon />
                        </StyledListItemIcon>
                        <StyledListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to={ROUTES.CONTACTUS}>
                    <ListItem button>
                        <StyledListItemIcon>
                            <ContactsIcon />
                        </StyledListItemIcon>
                        <StyledListItemText primary="Contact Us" />
                    </ListItem>
                </Link>
                <Link to={ROUTES.SERVICES}>
                    <ListItem button>
                        <StyledListItemIcon>
                            <BusinessIcon />
                        </StyledListItemIcon>
                        <StyledListItemText primary="Services" />
                    </ListItem>
                </Link>
            </List>
        );
    }
};
export default withStyles(useStyles)(SidebarList);