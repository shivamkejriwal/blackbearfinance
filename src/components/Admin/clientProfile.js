import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import SaveIcon from '@material-ui/icons/Save';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import { Logger } from '../../utils/logger';

const boldStyle = {
    // fontWeight: 'bold'
  }

const flexStyle = {
    display: 'flex'
  }

const useStyles = (theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    borderTop: '1px solid grey',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  padding: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  textarea: {
      width: '100%'
  }
});

const getRequestedServices = (client) => {
    const requestedServices = [];
    Object.entries(client.requestedServices).forEach(([key, value]) => {
      if(value) {
        requestedServices.push(key);
      }
    });
    return requestedServices;
}

class CientProfile extends React.Component {

    constructor(props) {
        super(props);
        this.waitingClients = [];
        this.state = {
            loaded: this.props.loaded
        };
    }

    componentDidMount() {
        Logger().log('CientProfile-componentDidMount', {
            waitingClients: this.waitingClients.length
        });
    }

    render() {
        const { classes } = this.props;
        this.waitingClients = this.props.getWaitingClients();
        const client = this.waitingClients[this.props.selected] || { requestedServices: [] };
        const requestedServices = getRequestedServices(client);
        return (
            <div>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={client.displayName} />
                    </ListItem>
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
                <Typography className={classes.padding} variant='h5' color='textPrimary' align='center' gutterBottom>
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
                <Typography className={classes.padding} variant='h5' color='textPrimary' align='center' gutterBottom>
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
                <Typography className={classes.padding} variant='h5' color='textPrimary' align='center' gutterBottom>
                    Note's:
                </Typography>
                <TextareaAutosize 
                    rowsMin='10'
                    className={classes.textarea} 
                    aria-label="empty textarea" 
                    placeholder="Empty" />
                <Grid className={classes.padding} container justify="center" alignItems="center">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </Grid>
            </div>
        );
    }
}
export default withStyles(useStyles)(CientProfile);