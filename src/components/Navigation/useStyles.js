import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linkText: {
        color: '#fff',
        textDecoration: 'none'
    },
    colorPrimary: {
      backgroundColor: '#2C2F40',
    },
    paper: {
      color: '#fff',
      backgroundColor: '#2C2F40',
    }
}));

export default useStyles;