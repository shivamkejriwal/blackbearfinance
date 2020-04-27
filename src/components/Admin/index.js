import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Firestore } from '../../utils/firestore';
import { Logger } from '../../utils/logger';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const boldStyle = {
  // fontWeight: 'bold'
}

const divStyle = {
  padding: '20px 0',
};

const flexStyle = {
  display: 'flex'
}


const useStyles = (theme) => ({
  // root: {
  //   width: '100%',
  //   maxWidth: '36ch',
  //   backgroundColor: theme.palette.background.paper,
  // },
  // inline: {
  //   display: 'inline',
  // },
});

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.waitingClients = [];
    this.state = {
      count: 0
    };
    this.init();
  }

  init() {
    Firestore()
    .getWaitingClients()
    .then(waitingClients => {
      this.waitingClients = waitingClients;
      Logger().log('AdminPage-waitingClients', {
        count: waitingClients.length
      });
      this.setState({count: waitingClients.length});
    });
  }

  componentDidMount() {
    Logger().log('AdminPage-componentDidMount');
  }

  clientItem(client) {
    Logger().log('AdminPage-clientItem', client.uid);
    const requestedServices = [];
    Object.entries(client.requestedServices).forEach(([key, value]) => {
      if(value) {
        requestedServices.push(key);
      }
    });

    const { classes } = this.props;
    return (
      <div style={divStyle}>
        <div style={flexStyle}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="" />
          </ListItemAvatar>
          <ListItemText
            primary={client.displayName}
            secondary={client.uid}
            className={classes.inline}
          />
        </div>
        
        <List>
          <ListItem>
              <ListItemIcon>
                  <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={client.email} />
          </ListItem>
          <ListItem>
              <ListItemIcon>
                  <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={client.phone} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
        <Typography variant='h5' color='textPrimary' gutterBottom>
          Last Request Details
        </Typography>
        <List>
          <ListItem>
            <Typography variant='body1' color='textPrimary' gutterBottom>
            <span style={boldStyle}>requestCallBackCount:</span> {client.requestCallBackCount}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1' color='textPrimary' gutterBottom>
            <span style={boldStyle}>requestCallBackDate:</span> {client.requestCallBackDate}
            </Typography>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
        <Typography variant='h4' color='textPrimary' gutterBottom>
          Requested Services
        </Typography>
        <List>
        {requestedServices.map(service => (
          
          <ListItem key={service}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <Typography variant='body1' color='textPrimary' gutterBottom>
              <span style={boldStyle}>{service}</span>
            </Typography>
          </ListItem>
        ))}
        </List> 
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <List>
          {this.waitingClients.map(client => (
            <ListItem key={client.uid} alignItems="flex-start"  className={classes.root}>
              {this.clientItem(client)}
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
};
export default withStyles(useStyles)(AdminPage);