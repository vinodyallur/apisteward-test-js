const { PayClient } = require("demo-pay");

const client = new PayClient();

async function pay(amount) {
  return client.charges.create({
    amount,
    currency: "usd",
    payment_method: "tok_visa",
  });
}

module.exports = { pay };