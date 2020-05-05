import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BusinessIcon from '@material-ui/icons/Business';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { withStyles } from '@material-ui/core/styles';
// import StickyFooter from '../Home/footer';
import { Logger } from '../../utils/logger';
import NumberSlider from '../BusinessPlan/slider';
import OptionSelection from '../BusinessPlan/selection';
import Tabulation from '../BusinessPlan/tabulation';
import { Naics, States } from '../BusinessPlan/constants';
// import { foo } from './fi';
import { getDerivedValues } from '../../constants/NaicsData/index';
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
        name: 'Price per item',
        id: 'itemPrice',
        max: 500,
        initial: 25,
        icon: (<BusinessIcon />)
    }
}

class BusinessStructurePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            revenue: options.revenue.initial,
            netIncome: options.netIncome.initial,
            debt: options.debt.initial,
            employees: options.employees.initial,
            State: States[5].name,
            Classification: Naics[0]
        };
    }

    componentDidMount() {
        Logger().log('BusinessStructurePage-componentDidMount');
        window.fbq('track', 'ViewContent');
    }

    updateValue = (id, value) => {
        Logger().log(`BusinessStructurePage-updateValue-${id}`, {
            value, id,
            consoleOnly: true
        });
        this.setState({
            [id]: value
        });
    }

    submitButton = () => {
        Logger().log('BusinessStructurePage-submitButton', this.state);
        // foo(this.state);
        // this.props.onSubmit(ctx);
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div style={divStyle}>
            <List>
                <ListItem className={classes.listItem}>
                    <NumberSlider name={options.revenue.name}
                        updateValue={this.updateValue}
                        id={options.revenue.id}
                        initial={options.revenue.initial}
                        icon={options.revenue.icon}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <NumberSlider name={options.itemPrice.name}
                        updateValue={this.updateValue}
                        id={options.itemPrice.id}
                        initial={options.itemPrice.initial}
                        max={options.itemPrice.max}
                        icon={options.itemPrice.icon}
                    />
                </ListItem>
                <ListItem>
                    <OptionSelection updateValue={this.updateValue}/>
                </ListItem>
                <Tabulation 
                    revenue={this.state.revenue}
                    Classification={this.state.Classification}
                />
                <ListItem className={classes.submitBtn}>
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
                </ListItem>
            </List>
            </div>
        )
    }
};
export default withStyles(useStyles)(BusinessStructurePage);


/**
 * output:
 * amount of money needed to satrt
 * approximate working capital
 * button:
 * Prjections and Esitamtyes call us
 */