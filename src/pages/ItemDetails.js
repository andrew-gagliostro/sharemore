import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ItemContext } from "../context/items";
import { Link } from 'react-router-dom';


const ItemDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { items } = useContext(ItemContext);
  

  const item = items.find((item) => {
    return item.id === id;
  });
  if (!item) {
    return <h3>Loading...</h3>;
  }

  const { image: url, itemSeller, itemName, description, endDate, curPrice } = item;

  return (


    
    <section className="item-details">
        <img alt="" className="detail-image" src={url}/>
      
      <div className="detail-description">
        <h2>{itemName}</h2>
        <p>{description}</p>
        <h3>{itemSeller}</h3>
        <p>{endDate}</p>
        <h4>Current Price - $ {curPrice}</h4>
        <button
          className="btn"
          onClick={() => {
            history.push("/shop");
          }}
        >
          Continue Shopping
        </button>
        <Link to={`/bids/${id}`}className="btn item-link">Place Bid</Link>
      </div>
    </section>
  );
};

export default ItemDetails;