import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BusinessIcon from '@material-ui/icons/Business';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import StickyFooter from '../Home/footer';
import { RequiredLineItems, getDerivedValues, getDerivedValuesFromIncome } from '../../constants/NaicsData/index';
import { Logger } from '../../utils/logger';
import NumberSlider from './slider';
import OptionSelection from './selection';
import DisplayPlan from './displayPlan';
import Tabulation from './tabulation';
import { Naics, States } from './constants';

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
    listItem: {},
    submitBtn: {
        paddingTop: '40px',
        justifyContent: 'center'
    }
});

const options = {
    revenue: {
        name: 'Revenue',
        id: 'revenue',
        max: 3000000,
        initial: 1000000,
        icon: (<AssessmentIcon />)
    },
    netIncome: {
        name: 'Net Income',
        id: 'netIncome',
        max: 3000000,
        initial: 1000000,
        icon: (<AutorenewIcon />)
    },
    debt: {
        name: 'Debt',
        id: 'debt',
        max: 1000000,
        initial: 10000,
        icon: (<LocalAtmIcon />)
    },
    employees: {
        name: 'Employees',
        id: 'employees',
        max: 500,
        initial: 25,
        icon: (<BusinessIcon />)
    },
    itemPrice: {
        name: 'Average price per item',
        id: 'itemPrice',
        max: 500,
        initial: 25,
        icon: (<ShoppingCartIcon />)
    },
    personalIncome: {
        name: 'How much personal income do you want to make at the end of the year?',
        id: 'personalIncome',
        max: 500000,
        initial: 60000,
        icon: (<AttachMoneyIcon />)
    }
}

class BusinessPlanPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            revenue: options.revenue.initial,
            netIncome: options.netIncome.initial,
            debt: options.debt.initial,
            employees: options.employees.initial,
            personalIncome: options.personalIncome.initial,
            State: States[5].name,
            Classification: Naics[0],
            showDisplay: false
        };
    }

    componentDidMount() {
        Logger().log('BusinessPlanPage-componentDidMount');
        window.fbq('track', 'ViewContent');
    }

    updateValue = (id, value) => {
        Logger().log(`BusinessPlanPage-updateValue-${id}`, {
            value, id,
            consoleOnly: true
        });
        const ctx = { [id]: value };
        if (['personalIncome', 'Classification'].includes(id)) {
            const rows = getDerivedValuesFromIncome(this.state.Classification, this.state.personalIncome);
            rows.forEach(row => {
                ctx[row.key] = Number(row.value)
            });
        }
        this.setState(ctx);
    }

    submitButton = () => {
        Logger().log('BusinessPlanPage-submitButton', this.state);
        this.setState({showDisplay: true});
        // this.props.onSubmit(ctx);
    }

    resetButton = () => {
        Logger().log('BusinessPlanPage-resetButton', this.state);
        this.setState({showDisplay: false});
    }

    render() {
    const { classes } = this.props;
        // getDerivedValuesFromIncome(this.state.Classification, options.personalIncome.initial);
        return (
            <div style={divStyle}>
                <List>
                    <ListItem className={classes.listItem}>
                        <NumberSlider name={options.personalIncome.name}
                            updateValue={this.updateValue}
                            id={options.personalIncome.id}
                            initial={options.personalIncome.initial}
                            max={options.personalIncome.max}
                            icon={options.personalIncome.icon}
                        />
                    </ListItem>
                    <ListItem>
                        <OptionSelection updateValue={this.updateValue}/>
                    </ListItem>
                    <Tabulation 
                        revenue={this.state.revenue}
                        Classification={this.state.Classification}
                        updateValue={this.updateValue}
                    />
                    <ListItem className={classes.submitBtn}>
                        <Grid container spacing={4} justify='center' alignItems='center'>
                            <Grid item>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    size='large'
                                    className={classes.button}
                                    // startIcon={<CallIcon />}
                                    onClick={this.submitButton}
                                    disableElevation
                                >
                                    Submit
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    size='large'
                                    className={classes.button}
                                    // startIcon={<CallIcon />}
                                    onClick={this.resetButton}
                                    disableElevation
                                >
                                    Reset
                                </Button>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            {
                this.state.showDisplay
                ? <DisplayPlan data={this.state}/>
                : null
            }
            <StickyFooter />
            </div>
        )
    }
};
export default withStyles(useStyles)(BusinessPlanPage);

/*
days inventory = 30 days
at tne end of every month we sold everything
cycles = 12
*/