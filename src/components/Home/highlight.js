import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';

const divStyle = {
    padding: '20px 0',
};


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

const cards = [
    {
        heading: 'Bookkeeping',
        // text: 'Month end close, Bank reconciliation, Account reconciliation, Project cost accounting',
        list: [
          'Month End Close',
          'Bank Reconciliation',
          'Account Reconciliation',
          'Project Cost Accounting'
        ],
        imageUrl: '/images/white-graphing-paper-164686.jpg',
        imageTitle: 'Image title'
    },
    {
        heading: 'Accounting Services',
        // text: 'Accounting setup & training, Historical cleanup, Depreciation & amotization, Inventory control',
        list: [
          'Accounting Setup & Training',
          'Historical Cleanup',
          'Depreciation & Amotization',
          'Inventory Control'
        ],
        imageUrl: '/images/black-calculator-near-ballpoint-pen-on-white-printed-paper-53621.jpg',
        imageTitle: 'Image title'
    },
    {
        heading: 'CFO Services',
        // text: 'To provide virtual bookkeeping and  CFO solution to small business who lack the means to problems solve issues of financial nature.',
        list: [
          'Finance Statement Review',
          'Price Analysis',
          'Budget vs Actual',
          'Debt Planning',
          'Forecasting'
        ],
        imageUrl: '/images/administration-agreement-banking-blur-618158.jpg',
        imageTitle: 'Image title'
    }
];
export const Highlight = () => {
    const classes = useStyles();
    return (
        <div style={divStyle}>
            <Container className={classes.cardGrid} maxWidth='md'>
                {/* End hero unit */}
                <Grid container spacing={8}>
                    {cards.map((card) => (
                      <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image={card.imageUrl}
                            title={card.imageTitle}
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant='h5' component='h2'>
                            {card.heading}
                            </Typography>
                            <List>
                              {card.list.map(item =>(
                                <ListItem>
                                  <ListItemText primary={item}/>
                                </ListItem>
                              ))}
                            </List>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
};