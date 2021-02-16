import React from "react";
import Home from "./Home";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


const SiSu = () => {
    return (
        <AmplifyAuthenticator usernameAlias="email">
            <Home />
        </AmplifyAuthenticator>
        
    )
}

export default SiSu;