import logo from './logo.svg';
import './App.css';

import ResponsiveDrawer from './components/ResponsiveDrawer.js'

import ControlledAccordions from './components/ControlledAccordions.js'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
    <div className={classes.root}>
      <ResponsiveDrawer/>
    </div>
    </div>
  );
}

export default App;
