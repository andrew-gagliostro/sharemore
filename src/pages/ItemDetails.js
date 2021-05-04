import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ItemContext } from "../context/items";
import {ItemBidContext} from "../context/itemBids";
import { Link } from 'react-router-dom';
import OtherHead from "../components/OtherHead";
import Footer from "../components/Footer";


const ItemDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { items } = useContext(ItemContext);
  /*const { maxItemBid } = useContext(ItemBidContext)*/
  

  const item = items.find((item) => {
    return item.id === id;
  });
  if (!item) {
    return <h3>Loading...</h3>;
  }

  /*
  if(maxItemBid(id) != -1) {
    item.curPrice = maxItemBid(id);
  }
  */



  const { image: url, itemSeller, itemName, description, endDate, curPrice } = item;

  return (
    <>
    <section className="details">
    <OtherHead></OtherHead>
    <section className="item-details">
      <div className ="side-details">
        <div className="itemDetails-image">
            <img alt=" " src={url}/>
        </div>
        <div className="detail-description">

          <h2>{itemName}</h2>
          <p>{description}</p>
          <h3>{itemSeller}</h3>
          <p>Auction End: {endDate} @ 12am</p>
          <h4>Current Winning Bid (USD): ${curPrice}</h4>
          <button
            className="btn"
            onClick={() => {
              history.push("/shop");
            }}
          >
            Continue Shopping
          </button>
          <Link to={`/bids/${id}`}className="btn">Place Bid</Link>
        </div>
      </div>
    
    </section>
    </section>
    <Footer></Footer>
    </>
  );
};

export default ItemDetails;