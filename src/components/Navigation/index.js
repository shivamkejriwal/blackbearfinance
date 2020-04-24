import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';

import { AuthUserContext } from '../Authentication/Session';
import { StyledIconButton } from './StyledComponents';
import useStyles from './useStyles';
import SidebarList from './routeList';
import AuthButton from './authButton';

const Navigation = () => (
    <AuthUserContext.Consumer>
      {authUser => (
          <ApplicationBar authUser={authUser} />
        )
      }
    </AuthUserContext.Consumer>
);

const ApplicationBar = ({ authUser }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);
    return (
        <div className={classes.root}>
        <AppBar position="static"
                className={classes.colorPrimary}
        >
            <Toolbar>
            <IconButton edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu"
                        onClick={handleDrawerOpen}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Black Bear Finance
            </Typography>
            <AuthButton authUser={authUser} />
            </Toolbar>
        </AppBar>
        <Drawer open={open} 
                onClose={handleDrawerClose} 
                classes={{paper: classes.paper}}>
            <div>
                <StyledIconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </StyledIconButton>
            </div>
            <Divider />
            <SidebarList />
        </Drawer>
        </div>
    );
};

export default Navigation;