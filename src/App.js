import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Amplify
import Amplify from "aws-amplify";

// Pages

// Components
//import Header from "./components/Header"

// Amplify Configurations
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import awsExports from "./aws-exports";
import SiSu from "./pages/SiSu";
Amplify.configure(awsExports);


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/sisu">
          <SiSu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
