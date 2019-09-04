var googleStocks = require("google-stocks");

googleStocks(["AAPL"], function(error, data) {
  console.log(data);
});

googleStocks(["TSE:WJA", "NASDAQ:GOOG", "AAPL"], function(error, data) {
  console.log(data);
});
