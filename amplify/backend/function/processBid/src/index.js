const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const ITEM_TABLE = "Item-lnleozrryfhm3o4tgwvtwnll4y-smdev";
const ITEM_TYPE = "Item";



const getUserEmail = async (event) => {
    const params = {
      UserPoolId: USER_POOL_ID,
      Username: event.identity.claims.username
    };
    const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
    const { Value: email } = user.UserAttributes.find((attr) => {
      if (attr.Name === "email") {
        return attr.Value;
      }
    });
    return email;
};


const createProcessedBid = async (payload) => {
  
    const { id, item_id, bid_price, address, confirmed } = payload;

    var params = {
        TableName: BID_TABLE,
        Item: {
          id: id,
          __typename: BID_TYPE,
          item_id = item_id,
          bid_price: bid_price,
          address: address,
          confirmed: confirmed,
          updatedAt: new Date().toISOString(),
          createdAt: new Date().toISOString()
        }
      };
      console.log(params);
      await documentClient.put(params).promise();

};

/*
 * Get order details from processPayment lambda
 * Create an order
 * Link books to the order - Users can see the past orders and admins can view orders by user
 * Email the invoice (Will be added later)
 */
exports.handler = async (event) => {
    try {
      await createProcessedBid(event.payload);
      return "SUCCESS";
    } catch (err) {
      throw new Error(err);
    }
  };
