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
import TodayIcon from '@material-ui/icons/Today';
import SaveIcon from '@material-ui/icons/Save';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';

import { Logger } from '../../utils/logger';
import { Firestore } from '../../utils/firestore';

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
        this.client = { requestedServices: [] };
        this.requestedServices = [];
        // this.textArea = React.createRef();
        this.state = {
            loaded: this.props.loaded,
            notes: ''
        };
    }

    componentDidMount() {
        Logger().log('CientProfile-componentDidMount', {
            waitingClients: this.waitingClients.length,
            consoleOnly: true
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const selected = nextProps.selected || 0;
        this.waitingClients = nextProps.getWaitingClients();
        this.client = this.waitingClients[selected] || this.client;
        this.client.id = Firestore().getClientId(this.client);
        this.requestedServices = getRequestedServices(this.client);
        Logger().log('CientProfile-shouldComponentUpdate', {
            loaded: nextProps.loaded,
            selected: nextProps.selected,
            consoleOnly: true
        });
        return true;
    }

    componentDidUpdate() {
        Logger().log('CientProfile-componentDidUpdate', {
            consoleOnly: true
        });
    }

    saveProfile = () => {
        this.client.notes = this.state.notes;
        Firestore()
            .setClients(this.client)
            .then(_ => {
                Logger().log('CientProfile-saveProfile', {
                    consoleOnly: true
                });
            });
    }

    deleteProfile = () => {
        Firestore()
            .deleteClients(this.client)
            .then(_ => {
                Logger().log('CientProfile-deleteProfile', {
                    consoleOnly: true
                });
            });
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        Logger().log('CientProfile-handleNotes', {
            notes: this.client.notes,
            consoleOnly: true
        });
    }

    renderNotes(client) {
        const { classes } = this.props;
        Logger().log('CientProfile-renderNotes', {
            notes: client.notes,
            consoleOnly: true 
        });
        return (
            <div>
                <Typography className={classes.padding} 
                    variant='h5' 
                    color='textPrimary' 
                    align='center' 
                    gutterBottom>
                    Note's:
                </Typography>
                <textarea 
                    rows='10'
                    className={classes.textarea}
                    name='notes'
                    value={client.notes || ''}
                    onChange={this.handleChange}
                />
            </div>   
        );
    }

    renderSubmitButtons() {
        const { classes } = this.props;
        return(
            <Grid className={classes.padding} container
                    spacing={3} 
                    justify='center' 
                    alignItems='center'>
                <Grid item>
                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={this.saveProfile}
                    >
                        Save
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='large'
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={this.deleteProfile}
                    >
                        Delete
                    </Button>
                </Grid>
            </Grid>
        );
    }

    renderSelected = () => {
        const { classes } = this.props;
        return (
            <div>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={this.client.name} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary={this.client.email} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={this.client.phone} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <TodayIcon />
                        </ListItemIcon>
                        <ListItemText 
                            primary={this.client.requestCallBackDate}
                            secondary='request date (year-month-day-hour)'
                        />
                    </ListItem>
                    <Divider variant='inset' component='li' />
                </List>
                <Typography className={classes.padding} variant='h5' color='textPrimary' align='center' gutterBottom>
                    Requested Services
                </Typography>
                <List>
                    {this.requestedServices.map(service => (
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
                {this.renderNotes(this.client)}
                {this.renderSubmitButtons()}
            </div>
        );
    }

    renderNotSelected() {
        return(<div></div>);
    }

    render() {
        const { classes } = this.props;
        const isSelected = Number.isInteger(this.props.selected);

        return (
            <div>
                {isSelected
                ? this.renderSelected()
                : this.renderNotSelected()}
            </div>
        );
    }
}
export default withStyles(useStyles)(CientProfile);