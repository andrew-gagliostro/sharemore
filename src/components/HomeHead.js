import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react';
import Amplify, {Auth} from 'aws-amplify';
import { Hub } from 'aws-amplify';
import AccountLinks from './AccountLinks';




const HomeHead = () => {

    

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
                    <li>
                        <Link to="/doner">Doner/Partner Info</Link>
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