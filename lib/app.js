"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _board = require("./board");

var _cell = require("./cell");

var _validation = require("./validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
var board = (0, _board.createBoard)();
(0, _board.setCellValue)(0, _cell.cell.o, board);

server.get("/", function (request, response) {
  response.send("Czesc");
});

server.get("/newgame", function (request, response) {
  board = (0, _board.createBoard)();
  response.json({ message: "new game created" });
});

server.get("/makemove/:cellvalue/:cellnumber", function (request, response) {
  if ((0, _validation.isOorX)(request.params.cellvalue) && (0, _validation.isOnBoard)(request.params.cellnumber, board) && (0, _board.isEmptyCell)(request.params.cellnumber, board)) {
    (0, _board.setCellValue)(request.params.cellnumber, request.params.cellvalue, board);
  }
  response.json(board);
});

server.get("/getboard", function (request, response) {
  response.json(board);
});

server.listen(3000, function () {
  console.log("OX");
});