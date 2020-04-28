import React from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import { Logger } from '../../utils/logger';
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
    }

    componentDidMount() {
        Logger().log('ContactUser-componentDidMount');
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div style={divStyle}>
                <Grid container justify='center' alignItems='center'>
                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        className={classes.button}
                        startIcon={<CallIcon />}
                        onClick={this.props.onSubmit}
                    >
                        Let us contact you
                    </Button>
                </Grid>
            </div>
        );
    }
};
export default withStyles(useStyles)(ContactUser);