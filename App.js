import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DrawAMap from './src/components/DrawAMap/DrawAMap';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/draw-a-map" component={DrawAMap} />
        <Route exact path="/draw-a-map" component={DrawAMap} />
      </Switch>
    </Router>
  );
}

export default App;