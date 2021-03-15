import React, { useState, useContext } from "react";
import { useHistory , useParams} from "react-router-dom";
import { ItemContext } from "../context/items";





const PlaceBidForm = () => {

  const { id } = useParams();
  const { placeBid } = useContext(ItemContext);
  const [BidDetails, setBidDetails] = useState({ item_id: id, bid_price: "", address: "", confirmed:false});
  const history = useHistory();

  const { items } = useContext(ItemContext);
    

    const item = items.find((item) => {
        return item.id === BidDetails.item_id;
    });
    if (!item) {
        return <h3>Loading...</h3>;
    }

    const url = item.img;



  // Handle real-time validation errors from the card Element.


  // Handle form submission.
  const handleSubmit = async (event) => {
      if(BidDetails.confirmed && !(BidDetails.address === "") && !(BidDetails.item_id === "") && !(BidDetails.bid_price === "")) {
          placeBid(BidDetails);
    }
  };

  return (

    <>
    <section className="item-details">
        <img alt="" className="detail-image" src={url}/>
      
      <div className="detail-description">
        <h2>{item.itemName}</h2>
        <p>{item.description}</p>
        <h3>{item.itemSeller}</h3>
        <p>{item.endDate}</p>
        <h4>Current Price - $ {item.curPrice}</h4>
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
                    checked={BidDetails.confirmed}
                    onChange={() => setBidDetails({ ...BidDetails, confirmed: !BidDetails.featured })}
                />
            </p>
        </div>  
      </div>
      <button type="submit" className="btn">
        Submit Bid
      </button>
    </form>
    </>
  );
};

export default PlaceBidForm;
