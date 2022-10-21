'use strict';

var mysql = require("mysql");

var con = mysql.createConnection ({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crm",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!");
});



