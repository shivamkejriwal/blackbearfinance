import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
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
    },
    grid: {
        // paddingLeft: '10px',
        // border: '1px solid grey',
    },
    paddingBottom: {
        paddingBottom: '250px'
    },
    contactSubmitBtn: {
        paddingTop: '40px',
        justifyContent: 'center'
    }
});

class ContactClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
        this.clickButton = this.clickButton.bind(this);
        this.submitButton = this.submitButton.bind(this);
    }

    componentDidMount() {
        Logger().log('ContactClient-componentDidMount');
    }

    clickButton() {
        this.props.toggleServices();
        this.setState({
            selected: !this.state.selected
        })
    }

    submitButton() {
        const ctx = this.state;
        delete ctx.selected;
        Logger().log('ContactClient-submitButton', ctx);
        this.props.onSubmit(ctx);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value || '';
        this.setState({
            [name]: value
        });
    }

    initalButton() {
        const { classes } = this.props;
        return(
            <Fade in={!this.state.selected}>
                <Grid container className={classes.paddingBottom}
                    justify='center' alignItems='center'>
                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        className={classes.button}
                        startIcon={<CallIcon />}
                        onClick={this.clickButton}
                    >
                        Let us contact you
                    </Button>
                </Grid>
            </Fade>
        )
    }

    expandedForm() {
        const { classes } = this.props;
        return(
            <Grow in={this.state.selected}>
                <Grid container justify='center' alignItems='center'>
                    <Grid item className={classes.grid}
                        xs={12} sm={4} md={4} lg={4}>   
                        <div>
                            <List>
                                <ListItem onClick={() => this.clickButton()}>
                                    <Button
                                        color='primary'
                                        size='large'
                                        className={classes.button}
                                        startIcon={<ExpandLessIcon />}
                                        disableElevation
                                    >
                                        Details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Please select a few services from above.
                                </ListItem>
                                <ListItem>
                                    <TextField name='name' label='name' autoComplete='name' fullWidth={true}
                                        onChange={event => this.handleChange(event)}
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField name='email' label='email' autoComplete='email' fullWidth={true}
                                        onChange={event => this.handleChange(event)}
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField name='phone' label='phone' autoComplete='mobile' fullWidth={true}
                                        onChange={event => this.handleChange(event)}
                                    />
                                </ListItem>
                                <ListItem className={classes.contactSubmitBtn}>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        size='large'
                                        className={classes.button}
                                        startIcon={<CallIcon />}
                                        onClick={this.submitButton}
                                        disableElevation
                                    >
                                        Let us contact you
                                    </Button>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </Grow>
        )
    }
    
    render() {
        // const { classes } = this.props;
        return (
            <div style={divStyle}>
                {
                    this.state.selected 
                    ? this.expandedForm()
                    : this.initalButton()
                }
            </div>
        );
    }
};
export default withStyles(useStyles)(ContactClient);