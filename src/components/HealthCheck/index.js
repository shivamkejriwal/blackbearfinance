import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { withStyles } from '@material-ui/core/styles';
import StickyFooter from '../Home/footer';
import { Logger } from '../../utils/logger';

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
});

class HealthCheckPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3000000
        };
    }

    componentDidMount() {
        Logger().log('HealthCheckPage-componentDidMount');
        window.fbq('track', 'ViewContent');
    }

    handleSliderChange = (event, newValue) => {
        this.setState({
            value: newValue
        });
    };

    handleInputChange = (event) => {
        const newValue = event.target.value 
            ? Number(event.target.value) : 0;
        this.setState({
            value: newValue
        });
    };

    handleBlur = () => {
        // if (this.state.value < 0) {
        //     this.setState({ value: 0 });
        // } else if (this.state.value > 100) {
        //     this.setState({ value: 100 });
        // }
    };

  render() {
    // const [value, setValue] = React.useState(30);
    const { classes } = this.props;
    return (
      <div style={divStyle}>
        {/* ====================== value 1 ====================== */}
        <Typography id="input-slider" gutterBottom>
            Revenue
        </Typography>
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <VolumeUp />
            </Grid>
            <Grid item xs>
                <Slider
                value={this.state.value}
                onChange={this.handleSliderChange}
                aria-labelledby="input-slider"
                step={1000}
                min={0}
                max={10000000}
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
                    step: 1000,
                    min: 0,
                    max: 10000000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
                />
            </Grid>
        </Grid>
        <StickyFooter/>
      </div>
    )
  }
};
export default withStyles(useStyles)(HealthCheckPage);