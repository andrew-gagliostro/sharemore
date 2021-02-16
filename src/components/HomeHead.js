import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, {Auth} from 'aws-amplify';


const HomeHead = () => {


    const temp = Auth.currentAuthenticatedUser();
    const linkTo = "/sisu";
    const show = "Sign in / Sign Up";
    

    if(temp != null) {
        const linkTo = "/shop";
        const show = "Sign Out"; 
    }

    return (
        <section className="home-head">
        <header>
            <nav>
                <h1 id="logo">ShareMore</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop ShareMore</Link>
                    </li>
                    <li>
                    <Link to={linkTo}> {show}</Link>
                    </li>
                </ul>
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