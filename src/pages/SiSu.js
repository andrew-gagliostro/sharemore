import React from "react";
import {Redirect} from "react-router-dom";
import {withAuthenticator} from '@aws-amplify/ui-react';


const SiSu = () => {
    return (
            <Redirect to="/"/>
        
    )
}

export default withAuthenticator(SiSu);
