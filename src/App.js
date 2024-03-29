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
import Donor from "./pages/Donor";
import PlaceBidForm from "./components/PlaceBidForm";

Amplify.configure(awsExports);


const App = () => {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Home}/>
        
        
        <Route exact path="/shop" component={Shop} />
          
        
        <Route exact path="/sisu" component={SiSu}/>

        
        <Route exact path="/admin" component={Admin}/>

        
        <Route exact path="/donor" component={Donor}/>

        
        <Route path="/items/:id" children={<ItemDetails></ItemDetails>} />
        

        <Route path="/bids/:id" children={<PlaceBidForm></PlaceBidForm>} />
        
      </Switch>
    </Router>
  );
}

export default App;
