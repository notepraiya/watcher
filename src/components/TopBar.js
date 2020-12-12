import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    backgroundColor: theme.palette.secondary.main,
  },
  logo: {
    marginBottom: '-0.8rem',
    height: '4.5rem',
  },
  title: {
    fontFamily: ['Pacifico', 'cursive'].join(','),
  },
}));

function TopBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <img src="mstile-150x150.png" alt="logo" className={classes.logo} />
        <Typography variant="h5" className={classes.title}>
          Watcher
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
