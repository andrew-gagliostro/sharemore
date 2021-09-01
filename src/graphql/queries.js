/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItemBid = /* GraphQL */ `
  query GetItemBid($id: ID!) {
    getItemBid(id: $id) {
      id
      item_id
      userEmail
      bid_price
      createdAt
      updatedAt
      item {
        id
        itemSeller
        itemName
        description
        image
        featured
        curPrice
        endDate
        createdAt
        updatedAt
      }
    }
  }
`;
export const listItemBids = /* GraphQL */ `
  query ListItemBids(
    $filter: ModelItemBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemBids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        item_id
        userEmail
        bid_price
        createdAt
        updatedAt
        item {
          id
          itemSeller
          itemName
          description
          image
          featured
          curPrice
          endDate
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      itemSeller
      itemName
      description
      image
      featured
      curPrice
      endDate
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemSeller
        itemName
        description
        image
        featured
        curPrice
        endDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
