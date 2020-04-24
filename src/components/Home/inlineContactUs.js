import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';

import { makeStyles } from '@material-ui/core/styles';

const linkStyle = {
    textDecoration: 'none'
  }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    button: {
        borderRadius: 25
    }
}));

export const InlineContactUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify="center" alignItems="center">
                <Link to={ROUTES.CONTACTUS}  style={linkStyle}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<CallIcon />}
                    >
                        Contact Us
                    </Button>
                </Link>
            </Grid>
        </div>
    );
};