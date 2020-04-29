import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';

import { withStyles } from '@material-ui/core/styles';
import { Logger } from '../../utils/logger';

const linkStyle = {
    textDecoration: 'none'
  }

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
class InlineContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Logger().log('InlineContactUs-componentDidMount', {
            consoleOnly: true
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify='center' alignItems='center'>
                    <Link to={ROUTES.CONTACTUS}  style={linkStyle}>
                        <Button
                            variant='contained'
                            color='primary'
                            size='large'
                            className={classes.button}
                            startIcon={<CallIcon />}
                        >
                            Contact Us
                        </Button>
                    </Link>
                </Grid>
            </div>
        );
    }
};

export default withStyles(useStyles)(InlineContactUs);