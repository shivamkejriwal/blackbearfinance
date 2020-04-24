import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
        text: 'Month end close, Bank reconciliation, Account reconciliation, Project cost accounting',
        imageUrl: 'https://source.unsplash.com/random',
        imageTitle: 'Image title'
    },
    {
        heading: 'Accounting Services',
        text: 'Accounting setup & training, Historical cleanup, Depreciation & amotization, Inventory control',
        imageUrl: 'https://source.unsplash.com/random',
        imageTitle: 'Image title'
    },
    {
        heading: 'CFO Services',
        text: 'To provide virtual bookkeeping and  CFO solution to small business who lack the means to problems solve issues of financial nature.',
        imageUrl: 'https://source.unsplash.com/random',
        imageTitle: 'Image title'
    }
];
export const Highlight = () => {
    const classes = useStyles();
    return (
        <div style={divStyle}>
            <Container className={classes.cardGrid} maxWidth='md'>
                {/* End hero unit */}
                <Grid container spacing={4}>
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
                                <Typography>
                                {card.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
};