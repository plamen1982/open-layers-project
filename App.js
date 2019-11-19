import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // Link
} from "react-router-dom";
import Home from './src/components/screens/Home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;