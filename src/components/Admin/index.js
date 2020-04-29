import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Firestore } from '../../utils/firestore';
import { Logger } from '../../utils/logger';
import WaitingList from './waitingList';
import CientProfile from './clientProfile';

const useStyles = (theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  toolBar: {
    margin: 'auto',
    maxWidth: 800,
    width: '100%'
  },
  main: {
    marginRight: '30px',
    border: '1px solid grey',
  },
  drawer: {
    marginLeft: '30px',
    border: '1px solid grey',
  }
});

class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            waitingClients: [],
            loaded: false
        };

        this.getWaitingClients = this.getWaitingClients.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.init();
    }

    init() {
        Firestore()
        .getWaitingClients()
        .then(waitingClients => {
            Logger().log('AdminPage-waitingClients', {
                count: waitingClients.length,
                consoleOnly: true
            });
            this.setState({
                waitingClients,
                loaded: true,
                selected: ''
            });
        });
    }

    componentDidMount() {
        Logger().log('AdminPage-componentDidMount', {
            count: this.state.waitingClients.length
        });
    }

    getWaitingClients() {
        Logger().log('AdminPage-getWaitingClients', {
            consoleOnly: true
        });
        return this.state.waitingClients;
    }

    handleSelection(client, index) {
        Logger().log('AdminPage-handleSelection', {
            index,
            consoleOnly: true
        });
        this.setState({
            selected: index
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={1} className={classes.root} justify='space-between'>
                <Grid item xs={12} sm={3} md={3} lg={3}
                    className={classes.drawer}>
                    <WaitingList 
                        getWaitingClients={this.getWaitingClients}
                        handleSelection={this.handleSelection}
                        loaded={this.state.loaded}
                    />
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={8}
                    className={classes.main}>
                    <CientProfile 
                        getWaitingClients={this.getWaitingClients} 
                        loaded={this.state.loaded}
                        selected={this.state.selected} 
                    />
                </Grid>
            </Grid>
        );
    }
}
export default withStyles(useStyles)(AdminPage);