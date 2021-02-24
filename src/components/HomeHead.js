import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react';
import Amplify, {Auth} from 'aws-amplify';
import { Hub } from 'aws-amplify';
import AccountLinks from './AccountLinks';




const HomeHead = () => {

    
    /*
    let [redir, setredir] = useState({path:"/sisu", show:"Sign In/Sign Up"})
    
    let [user, setUser] = useState(null)
    const button = <Link/>;
  
    useEffect(() => {
        let updateUser = async () => {
        try {
            let user = await Auth.currentAuthenticatedUser()
            setUser(user)
            setredir({path:"/shop", show:"Sign Out"})
            button = <Link to="/admin"> My Account </Link>
        } catch {
            setUser(null)
        }
        }
        Hub.listen('auth', updateUser); // listen for login/signup events

    // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag 
        updateUser(); // check manually the first time because we won't get a Hub event // cleanup
    }, []);
    */


    /*

    useEffect(() => {
    let updateUser = async authState => {
      try {
        let user = await Auth.currentAuthenticatedUser()
        setUser(user)
      } catch {
        setUser(null)
      }
      if(user!=null){
        setredir({path:"/signout", show:"Sign out"});
      }
    }
    Hub.listen('auth', updateUser) // listen for login/signup events
    updateUser() // check manually the first time because we won't get a Hub event
    return () => Hub.remove('auth', updateUser) // cleanup
  }, [redir, user]);

    */



    return (
        <section className="home-head">
        <header>
            <nav>
                <h2 id="logo">ShareMore</h2>
                <div id="homenav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop ShareMore</Link>
                    </li>
                </ul>
                <AccountLinks></AccountLinks>
                </div>
            </nav>
        </header>
        <section className="home-hero">
            <h2>ShareMore</h2>
            <h3>Working to connect fans and public figures <br />for a greater good</h3>
        </section>
        </section>
    )
}


export default HomeHead