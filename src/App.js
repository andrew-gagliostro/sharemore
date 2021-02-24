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
import Admin from "./pages/Admin";
import ItemDetails from "./pages/ItemDetails";

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
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route
          path="/items/:id"
          children={<ItemDetails></ItemDetails>}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
