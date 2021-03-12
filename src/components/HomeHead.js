import React from 'react';



import DropDown from './DropDown';






const HomeHead = () => {

/*
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
*/
    /*
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.className.DropDown.appendChild(styleLink);
    */

    return (
        
        
        <section className="home-head">
        <header >
            <div id="home-head-nav">
                <h2 id="logo">ShareMore</h2>
                <DropDown></DropDown>
            </div>
        </header>
        <section className="home-hero">
            <h2>ShareMore</h2>
            <h3>Working to connect fans and public figures <br />for causes that matter</h3>
        </section>
        </section>
       
    )
}


export default HomeHead