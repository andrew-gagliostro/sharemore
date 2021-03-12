import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeHead from "../components/HomeHead";
import '../index.css';

import { ItemContext } from "../context/items";

const Shop = () => {

    const {featured} = useContext(ItemContext);

    if (!featured.length) {
        return <h3>No Featured Items</h3>
    }


    return (
        <>
        <HomeHead/>
        <section className="shop-head">
            <h3>
                Shop ShareMore
            </h3>
        </section>
        <section className="shop-back">
        <div className="items featured-list">
            {featured.map(({ id, image, itemSeller, itemName, curPrice, endDate}) => (
                <article key={id} className="item featured-item">
                    <div className="item-image">
                        <img src={image} alt={itemName} />
                    </div>
                    <div className = "shop-info">
                    <h4> {itemSeller}</h4>
                    <div>{itemName}</div>
                    <div> Current Price: ${curPrice} USD </div>
                    <div> Bidding Ends: {endDate}</div>
                    </div>
                    <Link to={`items/${id}`} className="btn item-link">details</Link>
                </article>
            ))}
        </div>
        </section>
        </>
    )
}

export default Shop;