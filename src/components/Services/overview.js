import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BusinessIcon from '@material-ui/icons/Business';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import Checkbox from '@material-ui/core/Checkbox';

import { Logger } from '../../utils/logger';
  
const boldStyle = {
    fontWeight: 'bold'
}

const options = {
    'Long Term and short term forecasting': {
        icon: (<AssessmentIcon />),
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Long Term and short term forecasting:</span> To make right decision for your business it is important to know where you’re going. We can help your business estimate potential revenue from recognized revenue stream.
            </Typography>
        )
    },
    'Budgeting and estimation': {
        icon: (<AccountBalanceIcon />),
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Budgeting and estimation:</span> our dynamic estimation model can predict cost associated with revenue stream and help you plan. We closely monitor actual vs estimated costs and  prepare financial instruments to budget for the difference.
            </Typography>
        )
    },
    'Historical clean up of accounting data': {
        icon: (<AccountBalanceWalletIcon />),
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Historical clean up of accounting data:</span> accurately recording accounting data is essential to raise, by means of loan or equity investment. It also provides the means to better understand your business and make decisions to increase its value.
            </Typography>
        )
    },
    'Cash flow issues': {
        icon: (<AutorenewIcon />),
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Cash flow issues:</span> many small business have cash flow constraints. Most of the time this is not due to the nature of business but  inconsistencies in workflow and operations. We can recognize these operational issues and prepare your business for the growth it deserves.
            </Typography>
        )
    },
    'Maximize profitability by providing stability to business operation': {
        icon: (<BusinessIcon />),
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Maximize profitability by providing stability to business operation:</span> if you can predict all the cost associated with your business, you can increase your margins by making the right decisions at the right time. We can provide the means to stabilize your business to a more predictable model.
            </Typography>
        )
    },
    'Provide strategy to meet liquidity and debt issues': {
        icon: (<LocalAtmIcon />),
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Provide strategy to meet liquidity and debt issues:</span> we understand that some times businesses take unwanted debt to meet cashflow constraints. Out team of financial engineer can you get out that situation just a little quicker, by using short term and long term strategies focused on growth.
            </Typography>
        )
    }
}

class ServiceOverview extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.keys = Object.keys(options);

        const state = {};
        this.keys.forEach(key => {
            state[key] = false;
        })
        this.state = state;
    }

    componentDidMount() {
        Logger().log('ServiceOverview-componentDidMount', { consoleOnly: true });
    }

    isSelected() {
        let selected = false;
        for (let [key, value] of Object.entries(this.state)) {
            selected = selected || value;
        }
        return selected;
    }

    handleClick(name) {
        const value = {};
        value[name] = true;
        this.setState(value);
        this.isSelected()
    }

    getListItem(name) {
        const icon = options[name].icon;
        const content = options[name].content;
        return (
            <ListItem button key={name} onClick={() => this.handleClick(name)}>
                <ListItemIcon>
                    { this.isSelected()
                    ? <Checkbox
                        onChange={this.handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    : icon}
                </ListItemIcon>
                {content}
            </ListItem>
        );
    }
    
    render() {
        return (
            <div>
                <Typography component='h1' variant='h6' align='center' color='textPrimary' gutterBottom>
                    Services we Offer?
                </Typography>
                <List component="nav" aria-label="main mailbox folders">
                    {this.keys.map((key) => this.getListItem(key))}
                </List>
            </div>
        );
    }
};

export default ServiceOverview;