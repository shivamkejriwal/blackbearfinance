import React from 'react';
import Typography from '@material-ui/core/Typography';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BusinessIcon from '@material-ui/icons/Business';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AutorenewIcon from '@material-ui/icons/Autorenew';


const boldStyle = {
    fontWeight: 'bold'
}

const overview = {
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
};

const bookkeeping = {
    'Month End Close': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Month End Close:</span> This is an essential part of business. not only does reflect that all transaction in a month is accounted for, but also gives us a glimpse of business health and profitability at per month scale. 
            </Typography>
        )
    },
    'Bank Reconciliation': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Bank Reconciliation:</span> All transaction that come through the bank must be accounted for. Bank reconciliation is a tool used to accurately judge weather such transaction has been reflected in the bank account and credit cards.  
            </Typography>
        )
    },
    'Sub-Account Reconciliation': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Sub-Account Reconciliation:</span> Just like bank, customer/vendor account must be accounted as well to know what balances remain. We include debt/asset accounts in this group as well.
            </Typography>
        )
    },
    'Project Cost Accounting': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Project Cost Accounting:</span> Cost accounting is a way to allocate cost to certain projects or clients. It lets a business know profitability as per client/revenue stream. 
            </Typography>
        )
    },
};
const accounting = {
    'Account Set Up/Training': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Account Set Up/Training:</span> It is important to know how a business is performing. The Only way to do it is to set up accounting system that lets a business analyze its performance. Not only do we set up an accounting system but also train you to use it accurately. 
            </Typography>
        )
    },
    'Account Clean Up': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Account Clean Up:</span> It refers to undo the accounting errors that might have been made in the past. without accuracy it is impossible to know where the businesses are headed.  
            </Typography>
        )
    },
    'Depreciation & Amortization': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Depreciation & Amortization:</span> All assets depreciate depending on how much it was used. depreciating assets have major tax benefit and recognize which asset needs to be replaced. The debt account needs to be adjusted for interest since it is different every month. 
            </Typography>
        )
    },
    'Inventory Control': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Inventory Control:</span> There is usually a difference between on-hand inventory and inventory based on what the software reflects. the needs to be adjusted every month for compliance purposes. 
            </Typography>
        )
    },
};
const cfo = {
    'Finance Rtatement Review': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Finance Statement Review:</span> A review of balance sheet and income statement to know the overall health and growth of a company. We use as a metric to compare between different timelines.  
            </Typography>
        )
    },
    'Price Analysis': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Price Analysis:</span> How to charge clients? We use price analysis demand and profitability. We also use this tool figure out breakeven price or volume 
            </Typography>
        )
    },
    'Budget Vs Actual': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Budget Vs Actual:</span> An analysis in difference between budgeted costs vs the actual cost. It is tool to adjust the budget or use financial tools to judge the potential profitability of projects or lack thereof. 
            </Typography>
        )
    },
    'Debt Planning': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Debt Planning:</span>Using different financial instrument to get out of debt. Special forecasting and cost management are used to put a timeline when the business can be debt free and prep for growth
            </Typography>
        )
    },
    'Forecasting': {
        icon: null,
        content: (
            <Typography variant='body1' color='textPrimary' gutterBottom>
                <span style={boldStyle}>Forecasting:</span> Revenue forecasting is used to judge demand and profitability of a business. To raise finds, either through loan or thru investments will require accurate growth projections. 
            </Typography>
        )
    },
};

export const options = [
    {
        heading: 'Services we Offer?',
        category: 'overview',
        overview
    },
    {
        heading: 'Bookkeeping Services',
        category: 'bookkeeping',
        bookkeeping
    },
    {
        heading: 'Accounting Services',
        category: 'accounting',
        accounting
    },
    {
        heading: 'CFO Services',
        category: 'cfo',
        cfo
    }
];

export const serviceKeys = () => {
    const keys = [];
    options.forEach(option => {
        const { category } = option;
        Object.keys(option[category])
            .forEach(key => keys.push(key));
    });
    return keys;
}