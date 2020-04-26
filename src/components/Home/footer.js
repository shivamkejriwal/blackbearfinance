import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import BusinessIcon from '@material-ui/icons/Business';

import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    borderTop: '1px solid grey',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  ContactDetails: {
    // float: 'right'
  }
}));

const linkStyle = {
  textDecoration: 'none'
}


// const Copyright = () => {
//   return (
//     <Typography variant='body2' color='textSecondary'>
//       {'Copyright © '}
//       <Link color='inherit' href='https://material-ui.com/'>
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// };

const MiniNavigation = () => {
  return (
    <Grid container item lg={3} xs={10} justify='center'>
      <List>
        <Link to={ROUTES.HOME} style={linkStyle}>
            <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Link>
        <Link to={ROUTES.CONTACTUS} style={linkStyle}>
            <ListItem button>
                <ListItemIcon>
                  <ContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Us" />
            </ListItem>
        </Link>
        <Link to={ROUTES.SERVICES} style={linkStyle}>
            <ListItem button>
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Services" />
            </ListItem>
        </Link>
      </List>
    </Grid>
  );
};

const ContactDetails = () => {
  const classes = useStyles();
  return (
    <Grid container item lg={3} xs={10} className={classes.ContactDetails} justify='center'>
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
};


export const StickyFooter = () => {
  const classes = useStyles();

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

/*
  <Grid item xs={7}>
    <Copyright />
  </Grid>
*/