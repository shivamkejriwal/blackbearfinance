import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Logger } from '../../utils/logger';

const boldStyle = {
    fontWeight: 'bold'
}

class CfoServices extends React.Component {
    componentDidMount() {
        Logger().log('CfoServices-componentDidMount', { consoleOnly: true });
    }
    
    render() {
        return (
        <div>
            <Typography component='h1' variant='h6' align='center' color='textPrimary' gutterBottom>
                CFO Services
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                    {/* <DonutLargeIcon /> */}
                    </ListItemIcon>
                    <Typography variant='body1' color='textPrimary' gutterBottom>
                    <span style={boldStyle}>Finance statement review:</span> A review of balance sheet and income statement to know the overall health and growth of a company. We use as a metric to compare between different timelines.  
                    </Typography>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    {/* <DonutLargeIcon /> */}
                    </ListItemIcon>
                    <Typography variant='body1' color='textPrimary' gutterBottom>
                    <span style={boldStyle}>Price analysis:</span> How to charge clients? We use price analysis demand and profitability. We also use this tool figure out breakeven price or volume 
                    </Typography>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    {/* <DonutLargeIcon /> */}
                    </ListItemIcon>
                    <Typography variant='body1' color='textPrimary' gutterBottom>
                    <span style={boldStyle}>Budget Vs Actual:</span> An analysis in difference between budgeted costs vs the actual cost. It is tool to adjust the budget or use financial tools to judge the potential profitability of projects or lack thereof. 
                    </Typography>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    {/* <DonutLargeIcon /> */}
                    </ListItemIcon>
                    <Typography variant='body1' color='textPrimary' gutterBottom>
                    <span style={boldStyle}>Debt Planning:</span>Using different financial instrument to get out of debt. Special forecasting and cost management are used to put a timeline when the business can be debt free and prep for growth
                    </Typography>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    {/* <DonutLargeIcon /> */}
                    </ListItemIcon>
                    <Typography variant='body1' color='textPrimary' gutterBottom>
                    <span style={boldStyle}>Forecasting:</span> Revenue forecasting is used to judge demand and profitability of a business. To raise finds, either through loan or thru investments will require accurate growth projections. 
                    </Typography>
                </ListItem>
            </List>
        </div>
        );
    }
};

export default CfoServices;