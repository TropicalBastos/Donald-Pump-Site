var express = require("express");
var PORT = 8001;

var app = express();

app.use(express.static(__dirname+"/public"));
app.set("views",__dirname+"/views");
app.engine("html",require("ejs").renderFile);
app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.render("index.html");
});

app.listen(PORT,()=>{
  console.log("Donald Pump webserver running on port "+PORT+"...");
});
