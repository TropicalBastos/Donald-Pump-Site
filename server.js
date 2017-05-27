var express = require("express");
var PORT = 80;

var app = express();

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/node_modules/particles.js/"));
app.set("views",__dirname+"/views");
app.engine("html",require("ejs").renderFile);
app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.render("index.html");
});

app.listen(PORT,()=>{
  console.log("Donald Pump webserver running on port "+PORT+"...");
});
