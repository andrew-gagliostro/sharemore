import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react';
import Amplify, {Auth} from 'aws-amplify';
import { Hub } from 'aws-amplify';




const AccountLinks = () => {

    
    let [redir, setredir] = useState({path:"/sisu", show:"Sign In/Sign Up"})
    
    let [user, setUser] = useState(null);
  
    useEffect(() => {
        let updateUser = async () => {
        try {
            let user = await Auth.currentAuthenticatedUser()
            setUser(user)
            setredir({path:"/shop", show:"Sign Out"})
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
            <ul >
            <div ><Link to="/shop"> My Account </Link></div>
            <div ><AmplifySignOut></AmplifySignOut></div>
            </ul>
        )
    }
    else{
        return(
            <ul>
                <div><Link to="/sisu"> Sign In/Sign Up</Link></div>
            </ul>
        )
    }

}


export default AccountLinks;