import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // Link
} from "react-router-dom";
import Home from './src/components/screens/Home/Home';
import AppNavigationBar from './src/components/AppNavigationBar/AppNavigationBar';
import BottomNavigationBar from './src/components/BottomNavigationBar/BottomNavigationBar';

const App = () => {
  return (
    <Router>
      <AppNavigationBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route component={Home} />
      </Switch>
      <BottomNavigationBar />
    </Router>
  );
}

export default App;