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
import Doner from "./pages/Doner";

Amplify.configure(awsExports);


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        
        
        <Route exact path="/shop" component={Shop} />
          
        
        <Route exact path="/sisu" component={SiSu}/>

        
        <Route exact path="/admin" component={Admin}/>

        
        <Route exact path="/doner" component={Doner}/>

        
        <Route path="/items/:id" children={<ItemDetails></ItemDetails>} />

        <Route path="/bids/:id" children={<PlaceBid></PlaceBid>} />
        
        
      </Switch>
    </Router>
  );
}

export default App;
