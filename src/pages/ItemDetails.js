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
    <OtherHead></OtherHead>
    <section className="details">
    <section className="item-details">
      <div className ="side-details">
        <div className="itemDetails-image">
            <img alt=" " src={url}/>
        </div>
        <div className="detail-description">

          <h2>{itemName}</h2>
          <p>{description}</p>
          <h3>{itemSeller}</h3>
          <p>Raffle End: {endDate} @ 12:00 AM EST</p>
          <h4>Ticket Price (USD): ${curPrice}</h4>
          <Link to={"/shop"} className="btn"> Continue Shopping</Link>
          <Link to={`/bids/${id}`}className="btn">Purchase Tickets</Link>
        </div>
      </div>
    
    </section>
    </section>
    <Footer></Footer>
    </>
  );
};

export default ItemDetails;