import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { Firestore } from '../../utils/firestore';
import { Logger } from '../../utils/logger';

const boldStyle = {
  fontWeight: 'bold'
}

const divStyle = {
  padding: '20px 0',
};

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
    return (
      <div style={divStyle}>
        <Typography variant='h4' color='textPrimary' gutterBottom>
          <span style={boldStyle}>displayName:</span> {client.displayName}
        </Typography>
        <Typography variant='body1' color='textPrimary' gutterBottom>
          <span style={boldStyle}>UID:</span> {client.uid}
        </Typography>
        <Typography variant='body1' color='textPrimary' gutterBottom>
          <span style={boldStyle}>email:</span> {client.email}
        </Typography>
        <Typography variant='body1' color='textPrimary' gutterBottom>
          <span style={boldStyle}>requestCallBackCount:</span> {client.requestCallBackCount}
        </Typography>
        <Typography variant='body1' color='textPrimary' gutterBottom>
          <span style={boldStyle}>requestCallBackDate:</span> {client.requestCallBackDate}
        </Typography>
        <Typography variant='h5' color='textPrimary' gutterBottom>
          Requested Services
        </Typography>
        <List>
        {requestedServices.map(service => (
          <ListItem key={service}>
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
    return (
      <div>
        <List>
          {this.waitingClients.map(client => (
            <ListItem key={client.uid}>
              {this.clientItem(client)}
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
};
export default AdminPage;