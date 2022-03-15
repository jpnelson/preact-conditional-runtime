if (process.env.PREACT) {
  module.exports = require("preact");
} else {
  module.exports = require("react");
}
