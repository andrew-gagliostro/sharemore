import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { ItemProvider } from "./context/items";


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
import Doner from "./pages/Doner";

Amplify.configure(awsExports);

ReactDOM.render(
  <ItemProvider>
  <React.StrictMode>
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
          <Route exact path="/doner">
            <Doner />
          </Route>
          <Route
            path="/items/:id"
            children={<ItemDetails></ItemDetails>}>
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>
  </ItemProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
