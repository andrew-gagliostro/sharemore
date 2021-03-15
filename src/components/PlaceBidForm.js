import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ItemContext } from "../context/items";





const PlaceBidForm = () => {

  const { id } = useParams();
  const { placeBid } = useContext(ItemContext);
  const [BidDetails, setBidDetails] = useState({ item_id: id, bid_price: "", address: "", confirmed:false});
  const history = useHistory();



  // Handle real-time validation errors from the card Element.


  // Handle form submission.
  const handleSubmit = async (event) => {
      if(BidDetails.confirmed && !(BidDetails.address === "") && !(BidDetails.item_id === "") && !(BidDetails.bid_price === "")) {
          placeBid(BidDetails);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout-form">
        <label htmlFor="bid-adress">Confirm Your Email Address</label>
        <input
          id="bid-address"
          type="text"
          onChange={(e) => setBidDetails({ ...BidDetails, address: e.target.value })}
        />
        <div className="price-form">
            <p><label htmlFor="price">Bid Price ($)</label>
                <input
                    name="price"
                    type="text"
                    placeholder="What is the starting price of the Item (USD)"
                    onChange={(e) => setBidDetails({ ...BidDetails, bid_price: e.target.value })}
                    required
                /></p>
        </div>
        <div className="featured-form">
            <p><label>Confirm Your Bid?</label>
                <input type="checkbox"
                    className="featured-checkbox"
                    checked={bookDetails.featured}
                    onChange={() => setBidDetails({ ...BidDetails, confirmed: !bookDetails.featured })}
                />
            </p>
        </div>  
      </div>
      <button type="submit" className="btn">
        Submit Bid
      </button>
    </form>
  );
};

export default CheckoutForm;
