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

import { Logger } from '../../utils/logger';


// const divStyle = {
//     padding: '20px 0',
// };
  
const boldStyle = {
    fontWeight: 'bold'
}

class ServiceOverview extends React.Component {
    componentDidMount() {
        Logger().log('ServiceOverview-componentDidMount', { consoleOnly: true });
    }
    
    render() {
        return (
            <div>
                <Typography component='h1' variant='h6' align='center' color='textPrimary' gutterBottom>
                    Services we Offer?
                </Typography>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                        <AssessmentIcon />
                        </ListItemIcon>
                        <Typography variant='body1' color='textPrimary' gutterBottom>
                        <span style={boldStyle}>Long Term and short term forecasting:</span> To make right decision for your business it is important to know where you’re going. We can help your business estimate potential revenue from recognized revenue stream.
                        </Typography>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <AccountBalanceIcon />
                        </ListItemIcon>
                        <Typography variant='body1' color='textPrimary' gutterBottom>
                        <span style={boldStyle}>Budgeting and estimation:</span> our dynamic estimation model can predict cost associated with revenue stream and help you plan. We closely monitor actual vs estimated costs and  prepare financial instruments to budget for the difference. 
                        </Typography>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <AccountBalanceWalletIcon />
                        </ListItemIcon>
                        <Typography variant='body1' color='textPrimary' gutterBottom>
                        <span style={boldStyle}>Historical clean up of accounting data:</span> accurately recording accounting data is essential to raise, by means of loan or equity investment. It also provides the means to better understand your business and make decisions to increase its value. 
                        </Typography>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <AutorenewIcon />
                        </ListItemIcon>
                        <Typography variant='body1' color='textPrimary' gutterBottom>
                        <span style={boldStyle}>Cash flow issues:</span> many small business have cash flow constraints. Most of the time this is not due to the nature of business but  inconsistencies in workflow and operations. We can recognize these operational issues and prepare your business for the growth it deserves.
                        </Typography>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <BusinessIcon />
                        </ListItemIcon>
                        <Typography variant='body1' color='textPrimary' gutterBottom>
                        <span style={boldStyle}>Maximize profitability by providing stability to business operation:</span> if you can predict all the cost associated with your business, you can increase your margins by making the right decisions at the right time. We can provide the means to stabilize your business to a more predictable model.
                        </Typography>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <LocalAtmIcon />
                        </ListItemIcon>
                        <Typography variant='body1' color='textPrimary' gutterBottom>
                        <span style={boldStyle}>Provide strategy to meet liquidity and debt issues:</span> we understand that some times businesses take unwanted debt to meet cashflow constraints. Out team of financial engineer can you get out that situation just a little quicker, by using short term and long term strategies focused on growth.
                        </Typography>
                    </ListItem>
                </List>
            </div>
        );
    }
};

export default ServiceOverview;