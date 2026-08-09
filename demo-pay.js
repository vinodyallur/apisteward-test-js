class PayClient {
  constructor() {
    this.charges = { create: (opts) => ({ id: "ch_1", ...opts }) };
    this.customers = { create: (opts) => ({ id: "cus_1", ...opts }) };
  }
}
module.exports = { PayClient };
