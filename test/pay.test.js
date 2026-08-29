const test = require("node:test");
const assert = require("node:assert");
const { pay } = require("../index.js");

test("charge uses the current payment_method field", async () => {
  const charge = await pay(1000);
  assert.strictEqual(charge.payment_method, "tok_visa");
});

test("the old 'payment_method' field is no longer sent", async () => {
  const charge = await pay(1000);
  assert.strictEqual(charge.payment_method, undefined);
});

test("amount is passed through", async () => {
  const charge = await pay(2500);
  assert.strictEqual(charge.amount, 2500);
});

test("currency is usd", async () => {
  const charge = await pay(1000);
  assert.strictEqual(charge.currency, "usd");
});
