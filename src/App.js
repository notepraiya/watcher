import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Board from './components/Board';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0DD8AB',
      light: '#36DDB8',
      dark: '#3A645B',
      contrastText: '#1A1A1A',
    },
  },
  typography: {
    h1: {
      fontFamily: ['Pacifico', 'cursive'].join(','),
    },
  },
});

const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.app}>
        <TopBar />
        <SideBar />
        <Board />
      </div>
    </ThemeProvider>
  );
}

export default App;
