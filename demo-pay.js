class PayClient {
  constructor() {
    this.charges = { createPayment: (opts) => ({ id: "ch_1", ...opts }) };
    this.customers = { createPayment: (opts) => ({ id: "cus_1", ...opts }) };
  }
}
module.exports = { PayClient };
