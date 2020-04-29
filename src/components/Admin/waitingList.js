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

import { Logger } from '../../utils/logger';

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
});

class WaitingList extends React.Component {

    constructor(props) {
        super(props);
        this.waitingClients = [];
        this.state = {
            loaded: this.props.loaded
        };
    }

    componentDidMount() {
        Logger().log('WaitingList-componentDidMount', {
            waitingClients: this.waitingClients.length,
            consoleOnly: true
        });
    }

    render() {
        const { classes } = this.props;
        this.waitingClients = this.props.getWaitingClients();
        return (
            <Grid container spacing={3} justify='space-between'>
                <List>
                    {this.waitingClients.map((client, index) => (
                        <ListItem button
                                key={index} 
                                alignItems='flex-start'  
                                className={classes.root}
                                onClick={() => this.props.handleSelection(client, index)}
                            >
                            <div style={flexStyle}>
                                <ListItemAvatar>
                                    <Avatar alt='Remy Sharp' src='' />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={client.name || client.email || client.phone}
                                    secondary={client.requestCallBackDate}
                                />
                            </div>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        );
    }
}
export default withStyles(useStyles)(WaitingList);