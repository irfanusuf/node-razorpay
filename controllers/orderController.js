const Razorpay = require("razorpay");

const createOrder = async (req, res) => {
  try {


    const {amount , currency} = req.body

    var instance = new Razorpay({
      key_id: "rzp_test_RgG9AwfnysizZu",
      key_secret: "1CaqfrrZdfeKKOIdPypjADfr",
    });

    var options = {
      amount: amount*100, // amount in the smallest currency unit
      currency: currency,
      receipt: "order_rcptid_11",
    };
    instance.orders.create(options, function (err, order) {

      res.json({order})
      console.log(order);
    });
  } catch (error) {
    console.log(error);
  }
};


module.exports = {createOrder}
