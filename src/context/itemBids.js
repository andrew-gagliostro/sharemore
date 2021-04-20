import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listItems } from "../api/queries";
import { createItemBid } from "../api/mutations";
import {listItemBids} from "../api/queries";

const { v4: uuidv4 } = require("uuid");

const ItemBidContext = React.createContext();

const ItemBidProvider = ({children}) => {
    const [itemBids, setItemBids] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        fetchItemBids();
      }, []);


    const maxItemBid = async (BidID) => {
      try {
        
      const thisItemsBids = itemBids.filter((bid) => {
        return bid.item_id === BidID;
      });

      let i = 0; 
      let max = 0;

      if(thisItemsBids.length === 0) {
        return -1;
      }

      while(i < thisItemsBids.length) {
        if(thisItemsBids[i].bid_price > max) {
          max = thisItemsBids[i].bid_price;
        }
        i++;
      }

      return max;


        
        
      } catch (err) {
        console.log(err);
      }
    };
    
      

    

    const fetchItemBids = async () => {
    try {
        setLoading(true);
        // Switch authMode to API_KEY for public access
        /*
        const { data } = await API.graphql({
        query: listItemBids,
        authMode: "API_KEY"
        });*/
        let data = await API.graphql(graphqlOperation(listItemBids));
        const itemBids = data.listItemBids.items;

        setItemBids(itemBids);
        setLoading(false);
    } catch (err) {
        console.log(err);
    }
    };

    return (
        <ItemBidContext.Provider value={{ itemBids,loading}}>
          {children}
        </ItemBidContext.Provider>
      );
};

export {ItemBidContext, ItemBidProvider}