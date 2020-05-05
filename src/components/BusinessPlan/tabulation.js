import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
// import Grow from '@material-ui/core/Grow';
import { getDerivedValues } from '../../constants/NaicsData/index';
import { withStyles } from '@material-ui/core/styles';
import { Logger } from '../../utils/logger';

const divStyle = {
    padding: '20px 0',
    minWidth: '100%'
};

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        // paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(5),
    },
    table: {
        minWidth: 650,
    },
});

class Tabulation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        // this.LastClassification = '';
        // this.show = false;
    }

    componentDidMount() {
        Logger().log('Tabulation-componentDidMount', {
            consoleOnly: true
        });
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const newValue = event.target.value 
            ? Number(event.target.value) : 0;
        this.setState({
            value: newValue
        });
        Logger().log('Tabulation-handleInputChange', {
            newValue, name
        });
        this.props.updateValue(name, newValue);
    };

    render() {
        const { classes } = this.props;
        const rows = getDerivedValues(this.props.Classification, this.props.revenue);
        return (
            <div style={divStyle}>
                <Typography variant='body1' align='left' color='textPrimary' gutterBottom>
                    Note: Estimates based on 2014 s-corp data.
                </Typography>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Line Item</TableCell>
                            <TableCell align="right">Ratio (%)</TableCell>
                            <TableCell align="right">Aproximation ($)</TableCell>
                            <TableCell align="right">Actual</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.key}>
                            <TableCell component="th" scope="row">{row.key}</TableCell>
                            <TableCell align="right">{row.ratio}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                            <TableCell align="right">
                                <TextField name={row.key}
                                    onChange={this.handleInputChange}
                                    label={row.key} 
                                    fullWidth/>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        )
    }
}
export default withStyles(useStyles)(Tabulation);