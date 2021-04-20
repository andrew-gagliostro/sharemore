import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {AmplifySignOut} from '@aws-amplify/ui-react';
import {Auth} from 'aws-amplify';
import { Hub } from 'aws-amplify';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from "react-router-dom";




const AccountLinks = () => {

    const history = useHistory();


    
    let [user, setUser] = useState(null);
  
    useEffect(() => {
        let updateUser = async () => {
        try {
            let user = await Auth.currentAuthenticatedUser()
            setUser(user)
        } catch {
            setUser(null)
        }
        }
        Hub.listen('auth', updateUser); // listen for login/signup events

    // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag 
        updateUser(); // check manually the first time because we won't get a Hub event // cleanup
    }, []);

    if(user !== null){
        return(
            <>
            <Dropdown.Item id="dropDownItem" onClick={() => { history.push('/shop') }}> Account </Dropdown.Item><br></br>
            <Dropdown.Item id="dropDownItem">  ----   </Dropdown.Item>
            <Dropdown.Item id="dropDownItem" > <AmplifySignOut> </AmplifySignOut> </Dropdown.Item>
            </>
        )
    }
    else{
        return(
            <>
                <Dropdown.Item id="dropDownItem" onClick={() => { history.push('/sisu') }}> Sign In / Sign Up </Dropdown.Item>
            </>
        )
    }

}


export default AccountLinks;