import React from 'react';



import DropDown from './DropDown';


        
        /*
        <section className="other-head">
        <header id="top" className="home-top">
            <div id="other-head-nav">
                <h2 id="otherlogo">ShareMore</h2>
                <DropDown></DropDown>
            </div>
        </header>
        </section>
        */



const OtherHead = () => {


    return (
        <header id="top" className="home-top">
            <div id="home-head-nav">
                <h2 id="logo">ShareMore</h2>
                <DropDown id="trans"></DropDown>
            </div>
        </header>
        
    )
}


export default OtherHead