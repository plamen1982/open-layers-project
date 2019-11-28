import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  // Link
} from "react-router-dom";
import Home from './components/screens/Home/Home';
import AppNavigationBar from './components/AppNavigationBar/AppNavigationBar';
import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar';


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