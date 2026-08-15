const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo", function(req, res) {

});

app.get("/get-todos", function(req, res) {

});

app.post("todos-completed", function(req, res) {

});