import React, { useState, useContext } from "react";
import { useHistory , useParams} from "react-router-dom";
import { ItemContext } from "../context/items";
import OtherHead from "../components/OtherHead";
import Footer from "../components/Footer";
import {withAuthenticator} from '@aws-amplify/ui-react';





const PlaceBidForm = () => {

  const { id } = useParams();
  const { placeBid } = useContext(ItemContext);
  const [BidDetails, setBidDetails] = useState({ item_id: id, bid_price: "", userEmail: ""});
  const [confirmed, setConfirmed] = useState({checked: false});
  const history = useHistory();

  const { items } = useContext(ItemContext);
    

    const item = items.find((item) => {
        return item.id === BidDetails.item_id;
    });
    if (!item) {
        return <h3>Loading...</h3>;
    }




  // Handle real-time validation errors from the card Element.


  // Handle form submission.
  const handleSubmit = async (event) => {
      if(confirmed.checked && !(BidDetails.userEmail === "") && !(BidDetails.item_id === "") && !(BidDetails.bid_price === "")) {
          console.log(BidDetails);
          placeBid(BidDetails);
          history.push("/");
    }
  };

  const { image: url, itemSeller, itemName, description, endDate, curPrice } = item;

  return (

    <section className="details">
    <OtherHead></OtherHead>
    <section className="placeBid-details">
      
      <div className="placeBid-description">
        <h2>{itemName}</h2>
        <p>{description}</p>
        <div className="placeBid-image">
          <img alt="" src={url}/>
        </div>
        <h3>{itemSeller}</h3>
        <p>{endDate} @ 12:00 AM EST</p>
        <h4>Current Winning Bid (USD): ${curPrice}</h4>
        <button
          className="btn"
          onClick={() => {
            history.push("/shop");
          }}
        >
          Continue Shopping
        </button>
      </div>
    </section>
    <form onSubmit={handleSubmit}>
      <div className="checkout-form">
        <div className="bidInfo">
        <label htmlFor="bid-adress">Confirm Your Email Address</label>
        <input
          id="bid-address"
          type="text"
          onChange={(e) => setBidDetails({ ...BidDetails, userEmail: e.target.value })}
        />
        </div>
        <div className="bidInfo">
            <p><label htmlFor="price">Bid Price ($)</label>
                <input
                    name="price"
                    type="text"
                    placeholder="How much would you like to bid?"
                    onChange={(e) => setBidDetails({ ...BidDetails, bid_price: e.target.value })}
                    required
                /></p>
        </div>
        <div className="featured-form">
            <p><label>Confirm Your Bid?</label>
                <input type="checkbox"
                    className="featured-checkbox"
                    checked={confirmed.checked}
                    onChange={() => setConfirmed({ ...confirmed, checked: !confirmed.checked}) }
                />
            </p>
        </div>  
      </div>
      <div className="checkout-form">
      <button type="submit" className="btn">
        Submit Bid
      </button></div>
    </form>
    <Footer></Footer>
    </section>
  );
};

export default withAuthenticator(PlaceBidForm);