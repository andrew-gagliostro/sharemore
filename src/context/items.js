import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listItems } from "../api/queries";

const ItemContext = React.createContext();

const ItemProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchItems();
      }, []);
    
    

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
        <ItemContext.Provider value={{ items, featured, loading}}>
          {children}
        </ItemContext.Provider>
      );
};

export {ItemContext, ItemProvider}