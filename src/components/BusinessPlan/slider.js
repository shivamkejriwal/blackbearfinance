import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';
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
});

const deafultValues = {
    max: 10000000,
    min: 0,
    step: 1000
}

class NumberSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.initial,
            name: this.props.name,
            max: this.props.max || deafultValues.max,
            step: this.props.step || deafultValues.step
        };
    }

    componentDidMount() {
        Logger().log('NumberSlider-componentDidMount', {
            consoleOnly: true
        });
    }

    handleSliderChange = (event, newValue) => {
        this.setState({
            value: newValue
        });
        this.props.updateValue(this.props.id, newValue);
    };

    handleInputChange = (event) => {
        const newValue = event.target.value 
            ? Number(event.target.value) : 0;
        this.setState({
            value: newValue
        });
        this.props.updateValue(this.props.id, newValue);
    };

    render() {
        // const [value, setValue] = React.useState(30);
        const { classes } = this.props;
        return (
          <div style={divStyle}>
            <Typography id="input-slider" gutterBottom>
                {this.state.name}
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    {this.props.icon}
                </Grid>
                <Grid item xs>
                    <Slider
                        value={this.state.value}
                        onChange={this.handleSliderChange}
                        aria-labelledby="input-slider"
                        step={this.state.step}
                        min={this.state.min}
                        max={this.state.max}
                    />
                </Grid>
                <Grid item>
                    <Input
                    className={classes.input}
                    value={this.state.value}
                    margin="dense"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur}
                    inputProps={{
                        step: this.state.step,
                        min: this.state.min,
                        max: this.state.max,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                    />
                </Grid>
            </Grid>
          </div>
        )
      }
}
export default withStyles(useStyles)(NumberSlider);