import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Logger } from '../../utils/logger';

const boldStyle = {
    fontWeight: 'bold'
}

class BookkeepingServices extends React.Component {
    componentDidMount() {
        Logger().log('BookkeepingServices-componentDidMount');
    }
    
    render() {
        return (
        <div>
            <Typography component='h1' variant='h6' align='center' color='textPrimary' gutterBottom>
                Bookkeeping Services
            </Typography>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                        {/* <ArrowRightIcon /> */}
                        </ListItemIcon>
                        <Typography variant='body1' color='textPrimary' gutterBottom>
                        <span style={boldStyle}>Month End Close:</span> This is an essential part of business. not only does reflect that all transaction in a month is accounted for, but also gives us a glimpse of business health and profitability at per month scale. 
                        </Typography>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        {/* <ArrowRightIcon /> */}
                        </ListItemIcon>
                        <Typography variant='body1' color='textPrimary' gutterBottom>
                        <span style={boldStyle}>Bank Reconciliation:</span> All transaction that come through the bank must be accounted for. Bank reconciliation is a tool used to accurately judge weather such transaction has been reflected in the bank account and credit cards.  
                        </Typography>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        {/* <ArrowRightIcon /> */}
                        </ListItemIcon>
                        <Typography variant='body1' color='textPrimary' gutterBottom>
                        <span style={boldStyle}>Sub-Account Reconciliation:</span> Just like bank, customer/vendor account must be accounted as well to know what balances remain. We include debt/asset accounts in this group as well.
                        </Typography>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        {/* <ArrowRightIcon /> */}
                        </ListItemIcon>
                        <Typography variant='body1' color='textPrimary' gutterBottom>
                        <span style={boldStyle}>Project Cost accounting:</span> Cost accounting is a way to allocate cost to certain projects or clients. It lets a business know profitability as per client/revenue stream. 
                        </Typography>
                    </ListItem>
                </List>
        </div>
        );
    }
};

export default BookkeepingServices;