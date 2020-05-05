import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Logger } from '../../utils/logger';
const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        // paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(5),
    },
    table: {},
});

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
    }

    componentDidMount() {
        Logger().log('DisplayPlan-componentDidMount', {
            consoleOnly: true
        });
    }

    dsiplayInitialInvestment() {
        return (<div>
            Initial Investment: -----
        </div>);
    }

    displayExpense() {
        return (<div>
            <p>
                Cost of goods sold:{this.state['Cost of goods sold']}
            </p>
            <p>
                Salaries and wages: {this.state['Salaries and wages']}
            </p>
            <p>
                Rents paid: {this.state['Rents paid']}
            </p>
            <p>
                Advertising: {this.state['Advertising']}
            </p>
            <p>
                Other Expenses: {this.state['Other Expenses']}
            </p>
        </div>);
    }

    displayIncome() {
        return (<div>
            <p>
                Net Profit:{this.state["Net Profit"]}
            </p>
        </div>);
    }

    render() {
        // const { classes } = this.props;
        return( 
            <div>
                {this.dsiplayInitialInvestment()}
                {this.displayExpense()}
                {this.displayIncome()}
            </div>
        )
    }
}
export default withStyles(useStyles)(DisplayPlan);