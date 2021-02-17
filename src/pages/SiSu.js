import React from "react";
import Home from "./Home";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {Redirect} from "react-router-dom";
import {withAuthenticator} from '@aws-amplify/ui-react';


const SiSu = () => {
    return (
            <Redirect to="/"/>
        
    )
}

export default withAuthenticator(SiSu);
