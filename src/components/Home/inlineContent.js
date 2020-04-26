import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import { Logger } from '../../utils/logger';

const divStyle = {
    padding: '20px 0',
};

const imageStyle = {
    width: '100%',
    height: '100%',
    marginTop: '5px',
    padding: '0 5px'
}

const boldStyle = {
    fontWeight: 'bold'
}

const useStyles = (theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    paper: {
        background: '#fafafa'
    }
});

class InlineContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Logger().log('InlineContent-componentDidMount');
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={divStyle}>
                <Container className={classes.cardGrid} maxWidth='md'>
                    {/* Picture on the right */}
                    <Grid container className={classes.cardGrid} spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper} elevation={0}>
                                <Typography component='h6' variant='h6' align='left' color='textPrimary' gutterBottom>
                                    What is virtual CFO services? 
                                </Typography>
                                <Typography variant='body1' color='textPrimary' gutterBottom>
                                    Virtual CFO services provide financial assistance and consultancy in a by project or part-time basis. Services offered generally include strategies to maximize profitability, recognize inefficiencies in operation, prepare for growth opportunities and facilitate transactions.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper} elevation={1}>
                                {/* xs=12 sm=6 */}
                                <img src="/images/photo-of-person-holding-mobile-phone-3183153.jpg" alt="Smiley face" style={imageStyle}></img>
                            </Paper>
                        </Grid>
                    </Grid>
                    {/* Picture on the left */}
                    <Grid container className={classes.cardGrid} spacing={1}>     
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper} elevation={1}>
                                {/* xs=12 sm=6 */}
                                <img src="/images/photo-of-people-doing-handshakes-3183172.jpg" alt="Smiley face" style={imageStyle}></img>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper} elevation={0}>
                                <List>
                                    <ListItem>
                                        <Typography component='h6' variant='h6' align='left' color='textPrimary' gutterBottom>
                                            Why choose us? 
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body1' color='textPrimary' gutterBottom>
                                            <span style={boldStyle}>Experienced:</span> We are highly motivated group of financial experts that have industry experience including retail, manufacturing, construction etc.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body1' color='textPrimary' gutterBottom>
                                            <span style={boldStyle}>Cost effective:</span> Hiring a CFO/Controller can cost more than $100K. We  provide customized finance solutions at a fraction of the cost.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body1' color='textPrimary' gutterBottom>
                                            <span style={boldStyle}>Transparency:</span> We pride our self in brutal honesty and transparency. Think of our service as a tool, to provide necessary information about your business so that it can achieve its short and long term goals. 
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body1' color='textPrimary' gutterBottom>
                                            <span style={boldStyle}>Faster Results:</span> We provide results accurately and in a timely manner. We view our services as an investment and not a cost. We intend to educate on basic business operations along with providing financials solutions. 
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant='body1' color='textPrimary' gutterBottom>
                                            <span style={boldStyle}>Personal:</span> We did not believe in one size fits all concept. All our solutions will be personally crafted to fit your business. Our virtual platform enables you to have face to face conversation regardless of where you are located. 
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
};
export default withStyles(useStyles)(InlineContent);