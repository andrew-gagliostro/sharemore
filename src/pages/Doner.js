import React from "react";
import HomeHead from "../components/HomeHead";
import '../index.css';
import Footer from "../components/Footer";

const Doner = () => {
    return (
        <>
            <HomeHead></HomeHead>
            
            <h3 className="doner-head">
                Doner / Partner Information
            </h3>
            
            <section className="doner-info">
                <h4>
                My name is Andrew Gagliostro and over the past few months I have been building a nonprofit called ShareMore. 
                ShareMore’s goal is to connect fans with the people they adore to benefit worthy causes worldwide. 
                </h4>

    
                <h4>
                ShareMore is a marketplace where we ask people with fans to donate anything you may have laying around that a fan may like to get their hands on! 
                It’s up to you to choose where the profit goes: keep some if you’d like, and choose charity or organization for us to donate to on your behalf!
                </h4>


                <h4>
                In the world we live in, fandom merchandise is usually in the hands of someone who either has disposable income to spend or is lucky enough to be in the right place at the right time.
                ShareMore’s goal is to transform the fandom industry to one that maximizes auction exposure (and in turn auction profit) while redistributing the funds to those who need it most.
                </h4>

                

                <h4>
                Anything you could donate to help us with our mission would be greatly appreciated.
                I would love to speak further about any questions you may have: feel free to call @(+1) 973-830-7793 or email @argagliostro@gmail.com.
                </h4>


                <h4>
                Thanks again for taking the time to read this, we look forward to hopefully hearing from you soon!
                </h4>

                
            </section>
            <Footer></Footer>
        </>
    )
}

export default Doner;