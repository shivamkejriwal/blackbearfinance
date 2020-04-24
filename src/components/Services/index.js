import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BusinessIcon from '@material-ui/icons/Business';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ServicesPage = () => {
  const classes = useStyles();
  
  return (
  <div>
    <Typography component='h1' variant='h6' align='left' color='textPrimary' gutterBottom>
    Services we Offer?
    </Typography>
    <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Long Term and short term forecasting: To make right decision for your business it is important to know where you’re going. We can help your business estimate potential revenue from recognized revenue stream. " />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Budgeting and estimation: our dynamic estimation model can predict cost associated with revenue stream and help you plan. We closely monitor actual vs estimated costs and  prepare financial instruments to budget for the difference. " />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary="Historical clean up of accounting data: accurately recording accounting data is essential to raise, by means of loan or equity investment. It also provides the means to better understand your business and make decisions to increase its value. " />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AutorenewIcon />
          </ListItemIcon>
          <ListItemText primary="Cash flow issues: many small business have cash flow constraints. Most of the time this is not due to the nature of business but  inconsistencies in workflow and operations. We can recognize these operational issues and prepare your business for the growth it deserves." />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Maximize profitability by providing stability to business operation: if you can predict all the cost associated with your business, you can increase your margins by making the right decisions at the right time. We can provide the means to stabilize your business to a more predictable model."/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="Provide strategy to meet liquidity and debt issues: we understand that some times businesses take unwanted debt to meet cashflow constraints. Out team of financial engineer can you get out that situation just a little quicker, by using short term and long term strategies focused on growth." />
        </ListItem>
      </List>
  </div>
)};
export default ServicesPage;
// import { withAuthorization } from '../Authentication/Session';
// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);


/*
  Services we Offer? 
  // •	Long Term and short term forecasting: To make right decision for your business it is important to know where you’re going. We can help your business estimate potential revenue from recognized revenue stream. 
  // •	Budgeting and estimation: our dynamic estimation model can predict cost associated with revenue stream and help you plan. We closely monitor actual vs estimated costs and  prepare financial instruments to budget for the difference. 
  // •	Historical clean up of accounting data: accurately recording accounting data is essential to raise, by means of loan or equity investment. It also provides the means to better understand your business and make decisions to increase its value. 
  // •	Cash flow issues: many small business have cash flow constraints. Most of the time this is not due to the nature of business but  inconsistencies in workflow and operations. We can recognize these operational issues and prepare your business for the growth it deserves.
  // •	Maximize profitability by providing stability to business operation: if you can predict all the cost associated with your business, you can increase your margins by making the right decisions at the right time. We can provide the means to stabilize your business to a more predictable model.
  // •	Provide strategy to meet liquidity and debt issues: we understand that some times businesses take unwanted debt to meet cashflow constraints. Out team of financial engineer can you get out that situation just a little quicker, by using short term and long term strategies focused on growth.
*/