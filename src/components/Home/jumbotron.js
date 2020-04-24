import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';

const divStyle = {
    padding: '20px 0',
};

export const Jumbotron = () => (
    <div style={divStyle}>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
        Black Bear Finance
        </Typography>
        <Typography variant='h6' align='center' color='textSecondary' paragraph>
        "CFOs can help companies successfully deliver on the full potential of a transformation. 
        To do so, they must be judicious about which activities truly add value and embrace their 
        roles in leading the improvement in both performance and organizational health" - The role of the CEO, Mckinsey & Company,  2017.
        </Typography>
      </Container>
    </div>
);