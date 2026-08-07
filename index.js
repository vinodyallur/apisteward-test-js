const { PayClient } = require("demo-pay");

const p1 = new PayClient();

async function pay(p2) {
  return p1.charges.create({
    amount: p2,
    currency: "usd",
    source: "tok_visa",
  });
}

module.exports = { pay };