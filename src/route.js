const express = require("express");
const questionController = require("./controllers/questionController");
const RoomController = require("./controllers/RoomController");

const route = express.Router();

route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/create-pass", (req, res) =>
  res.render("index", { page: "create-pass" })
);

route.get("/room/:room", RoomController.open);
route.post("/enterroom", RoomController.enter);

route.post("/create-room", RoomController.create);

route.post("/question/create/:room", questionController.create);
route.post("/question/:room/:question/:action", questionController.index);

module.exports = route;
