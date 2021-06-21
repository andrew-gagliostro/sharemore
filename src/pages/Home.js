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
                    ShareMore is a mission-based fundraising platform working to connect celebrities 
                    with their fans
                    </div>

                    
                </h4>
                <img className="homepics" alt ="" src={Dunk}></img>

                <h4>
                    <div>
                    Our goal is to monitize the fandom industry: giving true fans a chance to get the merchandise 
                    they want while redistributing 100% of raffle donations to the worthy causes that celebrities choose!
                    </div>
                    

                </h4>
                
                    <img alt="" className="homeMoneyPics" src={Money}></img>
                

                

                <h4>
                    <div>
                    Public figures: choose your cause and list anything: 
                    from an autographed ball to a pair of shoes in the back of your closet. Then choose 
                    a ticket price for your item, post a link on your social media, and watch the donations roll in!
                    </div>

                </h4>
                <h4>

                    <img alt="" className="homepics"src={PutInBox}></img>
                    <img alt="" className="homepics"src={Plane}></img>
                    <img alt="" className="homepics"src={Handoff}></img>

                </h4>

                <h4>
                    <div>
                        Fans: find something that strikes a chord and buy a ticket: 100% of your purchase will 
                        be donated to the nonprofit or charity displayed on the listing!
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