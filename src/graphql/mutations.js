/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processBid = /* GraphQL */ `
  mutation ProcessBid($input: ProcessBidInput!) {
    processBid(input: $input)
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createItemBid = /* GraphQL */ `
  mutation CreateItemBid(
    $input: CreateItemBidInput!
    $condition: ModelItemBidConditionInput
  ) {
    createItemBid(input: $input, condition: $condition) {
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
export const updateItemBid = /* GraphQL */ `
  mutation UpdateItemBid(
    $input: UpdateItemBidInput!
    $condition: ModelItemBidConditionInput
  ) {
    updateItemBid(input: $input, condition: $condition) {
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
export const deleteItemBid = /* GraphQL */ `
  mutation DeleteItemBid(
    $input: DeleteItemBidInput!
    $condition: ModelItemBidConditionInput
  ) {
    deleteItemBid(input: $input, condition: $condition) {
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
