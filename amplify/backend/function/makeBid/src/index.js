const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();
const ITEMBID_TABLE = "ItemBid-lnleozrryfhm3o4tgwvtwnll4y-smdev";
const ITEMBID_TYPE = "ItemBid";


const createItemBid = async (payload) => {
    const { id, item_id, bid_price, userEmail} = payload;

    var params = {
      TableName: ITEMBID_TABLE,
      Item: {
        id: id,
        __typename: ITEMBID_TYPE,
        item_id: item_id,
        userEmail: userEmail,
        bid_price: bid_price,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString()
      }
    };
    console.log("params_final " + params);
    await documentClient.put(params).promise();
  };


exports.handler = async (event) => {
    try {

        let payload = event.arguments.input;
      
        await createItemBid(payload);

        return "SUCCESS"
    } catch (err) {
      throw new Error(err);

    }
  };
