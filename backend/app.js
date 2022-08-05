const EXPRESS = require("express"); //Set up express
const APP = EXPRESS();
let dataRooms;
let dataFaq;
let dataStats;
try {
  dataRooms = require("./json/rooms.json");
} catch (error) {
  dataRooms = undefined;
}
try {
  dataFaq = require("./json/faq.json");
} catch (error) {
  dataFaq = undefined;
}
try {
  dataStats = require("./json/stats.json");
} catch (error) {
  dataStats = undefined;
}
const PORT = 8080;
const ROUTER = EXPRESS.Router();
const BODYPARSER = require("body-parser");
let ip;
APP.use("/", ROUTER);
APP.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
ROUTER.get("/rooms", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(dataRooms);
});

ROUTER.get("/rooms/:max", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(dataRooms.slice(0, req.params.max));
});

ROUTER.get("/faq", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(dataFaq);
});

ROUTER.get("/stats", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(dataStats);
});

APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());

let server = APP.listen(PORT, () => {
  console.log(
    `data is fetchable on port: ${PORT}\nhttp://localhost:${PORT}/rooms`
  );
});
