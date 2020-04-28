import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import { options, serviceKeys } from './options';
import { Logger } from '../../utils/logger';

class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.isSelected = this.isSelected.bind(this);

        const state = {};
        serviceKeys().forEach(key => {
            state[key] = false;
        })
        this.state = state;
    }

    componentDidMount() {
        Logger().log('ServiceList-componentDidMount', { consoleOnly: true });
    }

    componentDidUpdate() {
        this.props.handleChange(this.state);
    }

    isSelected() {
        let selected = false;
        for (let [key, value] of Object.entries(this.state)) {
            selected = selected || value;
        }
        return selected || this.props.showServices;
    }

    handleClick(name) {
        Logger().log('ServiceList-handleClick', {
            key: name,
            value: this.state[name]
        });
        const value = {};
        value[name] = !this.state[name];
        this.setState(value);
    }

    getListItem(option, name) {
        const icon = option[name].icon;
        const content = option[name].content;
        return (
            <ListItem button key={name} onClick={() => this.handleClick(name)}>
                <ListItemIcon>
                    { this.isSelected()
                    ? <Checkbox
                        checked={this.state[name]}
                        onChange={this.handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    : icon}
                </ListItemIcon>
                {content}
            </ListItem>
        );
    }

    getServiceCategory(option) {
        const category = option.category;
        const keys = Object.keys(option[category]);
        return (
            <div key={category}>
                <Typography component='h1' variant='h6' align='center' color='textPrimary' gutterBottom>
                    {option.heading}
                </Typography>
                <List component='nav' aria-label='main mailbox folders'>
                    {keys.map((key) => this.getListItem(option[category], key))}
                </List>
            </div>
        );
    }
    
    render() {
        return (
            <div>
                {options.map(option => this.getServiceCategory(option))}
            </div>
        );
    }
};

export default ServiceList;