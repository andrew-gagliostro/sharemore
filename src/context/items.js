import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listItems } from "../api/queries";
import { createItemBid } from "../api/mutations";
import { processBid } from "../api/mutations";

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

        await API.graphql(graphqlOperation( createItemBid, { input: payload }));
        console.log("Order is successful");
        
        
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