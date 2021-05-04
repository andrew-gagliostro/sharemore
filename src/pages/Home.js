import React from "react";
import HomeHead from "../components/HomeHead";
import Dunk from "../assets/dunk.png";
import Money from "../assets/money.png";
import PutInBox from "../assets/putinbox.png";
import Plane from "../assets/plane.png";
import Handoff from "../assets/handoff.png";
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
                    ShareMore is the only mission-based online marketplace working to connect celebrities 
                    with their fans
                    </div>

                    
                </h4>
                <img className="homepics" alt ="" src={Dunk}></img>

                <h4>
                    <div>
                    Our goal is to monitize the fandom industry: allowing true fans to get the merchandise 
                    they want while distributing profits to worthy causes that buyers and sellers may choose!
                    </div>
                    

                </h4>
                
                    <img alt="" className="homeMoneyPics" src={Money}></img>
                

                

                <h4>
                    <div>
                    Public figures: choose your cause and list anything: 
                    from an autographed ball to a pair of shoes in the back of your closet
                    </div>

                </h4>
                <h4>

                    <img alt="" className="homepics"src={PutInBox}></img>
                    <img alt="" className="homepics"src={Plane}></img>
                    <img alt="" className="homepics"src={Handoff}></img>

                </h4>

                <h4>
                    <div>
                        Fans: find something that strikes a chord and buy now or place a bid!
                    </div>

                </h4>

                <h4>

                    <img alt="" id="sharePic" className="homepics"src={LastPic}></img>

                </h4>

                

                <h4>
                    <div>
                    Everyone: donating is just one of the endless ways to help the world around us. 
                    Be Kind, Show Love, and Share More.
                    </div>

                </h4>

                
            </section>
            <Footer></Footer>
        </>
    )
}

export default Home;