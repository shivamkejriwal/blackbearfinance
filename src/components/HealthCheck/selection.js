import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core/styles';
import { Logger } from '../../utils/logger';
import { Naics, States } from './constants';

const divStyle = {
    padding: '20px 0',
};

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        // paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(5),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
});

class OptionSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            State: States[0].name,
            Classification: Naics[0]
        };
    }

    componentDidMount() {
        Logger().log('OptionSelection-componentDidMount', {
            consoleOnly: true
        });
    }

    handleChange = (event, name) => {
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        this.props.updateValue(name, value);

    };

    render() {
        const { classes } = this.props;
        return (
          <div style={divStyle}>
            <Typography id="input-slider" gutterBottom>
                {this.state.name}
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel>
                            North American Industry Classification
                        </InputLabel>
                        <Select value={this.state.Classification}
                            onChange={(e) => this.handleChange(e, 'Classification')}
                        >
                            {Naics.map(classification => (
                                <MenuItem key={classification} 
                                    value={classification}>
                                        {classification}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl className={classes.formControl} size='medium'>
                        <InputLabel>
                            State of Operation (or registration, etc)
                        </InputLabel>
                        <Select value={this.state.State}
                            onChange={(e) => this.handleChange(e, 'State')}
                        >
                            {States.map(state => (
                                <MenuItem key={state}
                                    value={state.name}>
                                        {state.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
          </div>
        )
      }
}
export default withStyles(useStyles)(OptionSelection);