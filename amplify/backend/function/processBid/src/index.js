const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();
const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "us-east-1_P7DrWOJBo";
const ITEMBID_TABLE = "ItemBid-lnleozrryfhm3o4tgwvtwnll4y-smdev";
const ITEMBID_TYPE = "ItemBid";




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
        TableName: ITEMBID_TABLE,
        Item: {
          id: id,
          __typename: ITEMBID_TYPE,
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
      await createProcessedBid(event.arguments.input);
      return "SUCCESS";
    } catch (err) {
      throw new Error(err);
    }
};