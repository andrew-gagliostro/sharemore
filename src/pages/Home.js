import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import HomeHead from "../components/HomeHead";

const Home = () => {
    return (
        <>
            <HomeHead></HomeHead>
            <section className="featured">
                <header className="about-head">
                    <h2>About ShareMore</h2>
                </header>
            </section>
            <section className="about-info">
                <h3>
                    ShareMore is the only mission-based online marketplace working to connect public figures 
                    with their fans
                </h3>

                <h3>
                    Our goal is to monitize the fandom industry: allowing true fans to get the merchandise 
                    they want while distributing profits to worthy causes that buyers and sellers may choose!
                </h3>

                <h3>Public figures: choose your cause and list anything: 
                    from an autographed ball to a pair of shoes in the back of your closet</h3>

                <h3>Fans: find something that strikes a chord and buy now or place a bid!</h3>
            </section>
        </>
    )
}

export default Home;