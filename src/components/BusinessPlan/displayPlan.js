import React from 'react';
import Chart from 'chart.js';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import { RequiredLineItems } from '../../constants/NaicsData/index';
import { withStyles } from '@material-ui/core/styles';
import { Logger } from '../../utils/logger';
import { Months } from '../../utils/util';
const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        // paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(5),
    },
    grid: {
        padding: '20px',
    },
    personalGrid: {
        padding: '20px',
        border: '1px solid grey',
    },
    businessGrid: {
        padding: '20px',
        border: '1px solid grey',
    },
    cardPaper: {
        margin: '10px',
        padding: '20px',
        border: '1px solid grey',
    },
    incomePaper: {
        minWidth: '185px',
        margin: '10px',
        padding: '20px',
        border: '1px solid grey', 
    }
});

const chartInit = () => {
    const chartId = document.getElementById('DisplayPlan-displayYearlyCycle');
    const options = {
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: [{
                    stacked: true,
                    gridLines: {
                        offsetGridLines: true
                    }
            }]
        }
    };
    const data = {
        labels: Months,
        datasets: [
            {
                label: 'Expense',
                backgroundColor: 'rgba(255, 99, 132, 0.4)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
                data: [10,20,30,40,50,60,70,80,90,100,110,120]
            },
            {
                label: 'Income',
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderColor: 'rgb(54, 162, 235)',
                
                borderWidth: 1,
                data: [10,20,30,40,50,60,70,80,90,100,110,120]
            }
        ]
    };
    const barChart = new Chart(chartId, {
        type: 'bar',
        data,
        options
    });
    Logger().log('DisplayPlan-chartInit', {
        consoleOnly: true
    });
    return barChart;
}

class DisplayPlan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'revenue': 10000,
            'Cost of goods sold': 1000,
            'Salaries and wages': 200,
            'Rents paid': 100,
            'Advertising': 10,
            'Other Expenses': 50,
            'Net Profit': 30
        };
        this.chart = '';
    }

    componentDidMount() {
        Logger().log('DisplayPlan-componentDidMount', {
            consoleOnly: true,
            data: this.props.data
        });
        this.chart = chartInit(this.chart);
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    dsiplayCompliance() {
        return (
        <div>
            <Typography variant='h6' color='textPrimary' gutterBottom>
                Assuming the following:-
            </Typography>
            <Typography variant='body1' color='textPrimary' gutterBottom>
                Days in inventory of 30 days. Which implies you sell all your inventory or 
                use all your intital investments every month.
            </Typography>
            <Typography variant='body1' color='textPrimary' gutterBottom>
                You re-invest all monthly profits into the bussiness and take only yearly profits.
            </Typography>
        </div>
        );
    }

    displaySnapShot() {
        const { classes } = this.props;
        const Expenses = RequiredLineItems.filter(item => item !== 'Net Profit');
        Expenses.push('Other Expenses');
        Expenses.push('...')
        return (
            <div style={{ padding: '40px 0' }}>
                <Container maxWidth='md' className={classes.personalGrid}>
                    <Typography variant='h6' color='textPrimary' gutterBottom>
                        Personal
                    </Typography>
                    <Grid container spacing={4} justify='center' alignItems='center'>
                        <Paper elevation={0} className={classes.cardPaper}>
                            <Typography variant='h6' color='textPrimary' gutterBottom>
                                Initial Investment
                            </Typography>
                            <Typography variant='body1' color='textPrimary' gutterBottom>
                                $18,000
                            </Typography>
                        </Paper>
                        <Paper elevation={0} className={classes.cardPaper}>
                            <Typography variant='h6' color='textPrimary' gutterBottom>
                                Year End Income
                            </Typography>
                            <Typography variant='body1' color='textPrimary' gutterBottom>
                                $60,000
                            </Typography>
                        </Paper>
                    </Grid>
                </Container>
                <Container maxWidth='md' className={classes.businessGrid}>
                    <Typography variant='h6' color='textPrimary' gutterBottom>
                        Business
                    </Typography>
                    <Grid container spacing={4} justify='center' alignItems='center'>
                        <Paper elevation={0} className={classes.incomePaper}>
                            <Typography variant='h6' color='textPrimary' gutterBottom>
                                Income
                            </Typography>
                            <Typography variant='body1' color='textPrimary' gutterBottom>
                                Net Profit
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid container spacing={4} justify='center' alignItems='center'>
                        <Paper elevation={0} className={classes.cardPaper}>
                            <Typography variant='h6' color='textPrimary' gutterBottom>
                                Expense
                            </Typography>
                            {Expenses.map(lineItem => (
                                <Typography key={lineItem}
                                    variant='body1' color='textPrimary' 
                                    gutterBottom>
                                    {lineItem}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                </Container>
            </div>
        );
    }

    displayYearlyCycle() {
        return (
            <div>
                <canvas id='DisplayPlan-displayYearlyCycle'></canvas>
            </div>
        );
    }

    render() {
        // const { classes } = this.props;
        return( 
            <div>
                {this.dsiplayCompliance()}
                {this.displaySnapShot()}
                {this.displayYearlyCycle()}
            </div>
        )
    }
}
export default withStyles(useStyles)(DisplayPlan);