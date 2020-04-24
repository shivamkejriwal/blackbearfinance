import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

export const StyledListItemText = withStyles(theme => ({
    root: {
        color: '#fff',
        backgroundColor: '#2C2F40',
    },
}))(ListItemText);


export const StyledListItemIcon = withStyles(theme => ({
    root: {
        color: '#fff',
        backgroundColor: '#2C2F40',
    },
}))(ListItemIcon);

export const StyledIconButton = withStyles(theme => ({
    root: {
        color: '#fff',
        backgroundColor: '#2C2F40',
    },
}))(IconButton);