import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getItem, listItems } from "../api/queries";
import { createItemBid, updateItem } from "../api/mutations";
import { placeBidMut } from "../api/mutations";

const { v4: uuidv4 } = require("uuid");

const ItemContext = React.createContext();

const ItemProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        fetchItems();
      }, []);
    

    const placeBid = async (BidDetails) => {
      const payload = {
        id: uuidv4(),
        ...BidDetails
      };
      try {
        
        console.log(payload);

        /*await API.graphql(graphqlOperation( processBid, { input: payload }));*/

        

        console.log(BidDetails)

        var item = items.find((item) => {
          return item.id === BidDetails.item_id;
        });
        
        /*let temp = await API.graphql(graphqlOperation( getItem , {input: a } ));*/
        /*
        temp.curPrice = BidDetails.bid_price;

        await API.graphql(graphqlOperation( updateItem, { input: temp }));
        */


        if(item !== null && BidDetails.bid_price > item.curPrice) {
          item.curPrice = BidDetails.bid_price;
          await API.graphql(graphqlOperation( placeBidMut, { input: payload }));
          const itemIn = { id: item.id, itemSeller: item.itemSeller, curPrice: BidDetails.bid_price};
          await API.graphql(graphqlOperation( updateItem, {input: itemIn }));
          console.log("worked");
          console.log("Order is successful");
        }

        else {
          console.log("Bid price is not enough");
        }

        

        
        
        
      } catch (err) {
        console.log(err);
      }
    };

    

    const fetchItems = async () => {
    try {
        setLoading(true);
        // Switch authMode to API_KEY for public access
        const { data } = await API.graphql({
        query: listItems,
        authMode: "API_KEY"
        });
        const items = data.listItems.items;
        const featured = items.filter((item) => {
        return !!item.featured;
        });
        setItems(items);
        setFeatured(featured);
        setLoading(false);
    } catch (err) {
        console.log(err);
    }
    };

    return (
        <ItemContext.Provider value={{ items, featured, loading, placeBid}}>
          {children}
        </ItemContext.Provider>
      );
};

export {ItemContext, ItemProvider}