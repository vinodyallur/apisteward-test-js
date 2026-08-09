const { PayClient } = require("./demo-pay");

const c1 = new PayClient();

async function pay(amount) {
  return c1.charges.create({
    amount,
    currency: "usd",
    source: "tok_visa",
  });
}

module.exports = { pay };
