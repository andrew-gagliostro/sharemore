import React, { useContext } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import HomeHead from "../components/HomeHead";

import { ItemContext } from "../context/items";

const Shop = () => {

    const {featured} = useContext(ItemContext);

    if (!featured.length) {
        return <h3>No Featured Items</h3>
    }


    return (
        <section>
        <Header/>
        <section className="shop-head">
            <h3>
                Happy Shopping!
            </h3>
        </section>
        <div className="items featured-list">
            {featured.map(({ id, image, itemSeller, itemName, curPrice, endDate}) => (
                <article key={id} className="item featured-item">
                    <div className="item-image">
                        <img src={image} alt={itemName} />
                    </div>
                    <h4> {itemSeller}</h4>
                    <div>{itemName}</div>
                    <div> Current Price: ${curPrice} USD </div>
                    <div> Bidding Ends: {endDate}</div>
                    <Link to={`items/${id}`} className="btn item-link">details</Link>
                </article>
            ))}
        </div>
        </section>
    )
}

export default Shop;