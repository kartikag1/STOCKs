var express = require("express");
var yahooFinance = require("yahoo-finance");
var engines = require("body-parser");
var app = express();
app.set("view engine", "ejs");
var date = [];
var datee = [];
var month = [];
var year = [];
var open = [];
var close = [];
var high = [];

var appusername;
var START_DATE;
var END_DATE;
var SHARE_NAME;
app.use(express.urlencoded());
app.use(express.json());
app.get("/", function(req, res) {
  res.render("index");
  app.post("/", function(req, res) {
    appusername = req.body.kartikk;
    //console.log(appusername);
    SHARE_NAME = appusername;
    SHARE_NAME = appusername;
    console.log(SHARE_NAME);
    START_DATE = "2018-01-01";
    END_DATE = "2019-07-10";

    var begin = new Date(START_DATE);
    var end = new Date(END_DATE);
    console.log(begin);
    console.log(end);
    var startTime = begin.getTime(),
      endTime = end.getTime();
    yahooFinance.historical(
      {
        symbol: SHARE_NAME,
        from: START_DATE,
        to: END_DATE
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      },
      function(err, quotes) {
        if (err) {
          app.get("/aa", function(req, res) {
            res.render("error");
          });
          res.redirect("/aa");
        } else {
          for (i in quotes) {
            var dat = JSON.stringify(quotes[i].date);
            console.log(dat.substring(1, 5));
            console.log(dat.substring(6, 8));
            console.log(dat.substring(9, 11));
            datee.push(dat.substring(9, 11));
            month.push(dat.substring(6, 8));
            year.push(dat.substring(1, 5));
            console.log(quotes[i].open);
            console.log(quotes[i].high);
            console.log(quotes[i].low);
            console.log(quotes[i].close);
            console.log(quotes[i].volume);
            date.push(quotes[i].date);
            open.push(quotes[i].open);
            close.push(quotes[i].close);
            high.push(Math.round(quotes[i].high));
          }

          app.get("/aa", function(req, res) {
            res.render("xyz", {
              nme: SHARE_NAME,
              datae: JSON.stringify(datee),
              open: JSON.stringify(open),
              close: JSON.stringify(close),
              month: JSON.stringify(month),
              year: JSON.stringify(year),
              high: JSON.stringify(high)
            });
          });
          res.redirect("/aa");
        }
      }
    );
  });
});

console.log("app is running on 3k");
app.listen(process.env.PORT || 3000);
