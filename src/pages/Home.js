import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import HomeHead from "../components/HomeHead";
import FirstPic from "../assets/jakob-owens-olHGGd_zYtE-unsplash.jpg";
import SecondPic from "../assets/nina-strehl-Ds0ZIA5gzc4-unsplash.jpg";
import ThirdPic from "../assets/anthony-delanoix-hzgs56Ze49s-unsplash.jpg";
import LastPic from "../assets/joel-muniz-A4Ax1ApccfA-unsplash.jpg";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <HomeHead></HomeHead>
            
            <h3 className="about-head">
                About ShareMore
            </h3>
            
            <section className="about-info">
                <h4>
                    <div>
                    ShareMore is the only mission-based online marketplace working to connect public figures 
                    with their fans
                    </div>

                <img className = "homepics"src={FirstPic}></img>
                </h4>


                <h4>
                    <div>
                    Our goal is to monitize the fandom industry: allowing true fans to get the merchandise 
                    they want while distributing profits to worthy causes that buyers and sellers may choose!
                    </div>
                    <img className = "homepics"src={SecondPic}></img>

                </h4>

                

                <h4>
                    <div>
                    Public figures: choose your cause and list anything: 
                    from an autographed ball to a pair of shoes in the back of your closet
                    </div>
                <img className="homepics"src={ThirdPic}></img>

                </h4>

                <h4>
                    <div>
                        Fans: find something that strikes a chord and buy now or place a bid!
                    </div>
                <img className="homepics"src={LastPic}></img>

                </h4>

                

                <h4>
                    
                    Everyone: donating is just one of the endless ways to help the world around us. 
                    Be Kind, Spread Love, and Share More.

                </h4>

                
            </section>
            <Footer></Footer>
        </>
    )
}

export default Home;