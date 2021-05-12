import React from 'react';



import DropDown from './DropDown';






const HomeHead = () => {


    return (
        
        <section className="home-head">
        <header >
            <div id="home-head-nav">
                <h2 id="logo">ShareMore</h2>
                <DropDown id="trans"></DropDown>
            </div>
        </header>
        <section className="home-hero">
            <h2>ShareMore</h2>
            <h3>A nonprofit working to connect fans and public figures </h3>
            <h3>for causes that matter</h3>
        </section>
        </section>
       
    )
}


export default HomeHead