import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TimerIcon from '@material-ui/icons/Timer';
import './TopBar.css';

function TopBar() {
  return (
    <div className="TopBar">
      <AppBar position="static" className="TopBar-appbar">
        <Toolbar>
          <TimerIcon className="TopBar-logo" />
          <Typography variant="h6" className="TopBar-title">
            Watcher
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
