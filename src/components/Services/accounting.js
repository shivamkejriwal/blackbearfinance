import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Logger } from '../../utils/logger';

const boldStyle = {
    fontWeight: 'bold'
}

class AccountingServices extends React.Component {
    componentDidMount() {
        Logger().log('AccountingServices-componentDidMount');
    }
    
    render() {
        return (
        <div>
            <Typography component='h1' variant='h6' align='center' color='textPrimary' gutterBottom>
                Accounting Services
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                    {/* <RadioButtonUncheckedIcon /> */}
                    </ListItemIcon>
                    <Typography variant='body1' color='textPrimary' gutterBottom>
                    <span style={boldStyle}>Account Set Up/Training:</span> It is important to know how a business is performing. The Only way to do it is to set up accounting system that lets a business analyze its performance. Not only do we set up an accounting system but also train you to use it accurately. 
                    </Typography>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    {/* <RadioButtonUncheckedIcon /> */}
                    </ListItemIcon>
                    <Typography variant='body1' color='textPrimary' gutterBottom>
                    <span style={boldStyle}>Account Clean up:</span> It refers to undo the accounting errors that might have been made in the past. without accuracy it is impossible to know where the businesses are headed.  
                    </Typography>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    {/* <RadioButtonUncheckedIcon /> */}
                    </ListItemIcon>
                    <Typography variant='body1' color='textPrimary' gutterBottom>
                    <span style={boldStyle}>Depreciation & Amortization:</span> All assets depreciate depending on how much it was used. depreciating assets have major tax benefit and recognize which asset needs to be replaced. The debt account needs to be adjusted for interest since it is different every month. 
                    </Typography>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    {/* <RadioButtonUncheckedIcon /> */}
                    </ListItemIcon>
                    <Typography variant='body1' color='textPrimary' gutterBottom>
                    <span style={boldStyle}>Inventory Control:</span> There is usually a difference between on-hand inventory and inventory based on what the software reflects. the needs to be adjusted every month for compliance purposes. 
                    </Typography>
                </ListItem>
            </List>
        </div>
        );
    }
};

export default AccountingServices;