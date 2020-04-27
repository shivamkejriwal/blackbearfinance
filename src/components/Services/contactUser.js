import React from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import { Logger } from '../../utils/logger';
import { Firestore } from '../../utils/firestore';
import { getCurrentTime } from '../../utils/util';
import { withStyles } from '@material-ui/core/styles';

const divStyle = {
    padding: '20px 0',
};

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        // paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(5),
    },
    button: {
        borderRadius: 25
    }
});

class ContactUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.action = this.action.bind(this);
    }

    componentDidMount() {
        Logger().log('ContactUser-componentDidMount');
    }

    action () {
        Logger().log('LetUsContactYou');
        Firestore()
            .getUser()
            .then(user => {
                Logger().log('LetUsContactYou-CurrentUser', {
                    user,
                    consoleOnly: true
                });
                const requestCallBackCount = user.requestCallBackCount || 0;
                return Firestore().setUser(user, {
                    'requestCallBackCount': requestCallBackCount + 1,
                    'requestCallBackDate': `${getCurrentTime().dateString}`
                });
            })
            .then(() => {
                this.props.onSubmit();
            })
        
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div style={divStyle}>
                <Grid container justify="center" alignItems="center">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<CallIcon />}
                        onClick={this.action}
                    >
                        Let us contact you
                    </Button>
                </Grid>
            </div>
        );
    }
};
export default withStyles(useStyles)(ContactUser);