var express = require("express");
var bodyParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
var PORT = 8080;
var app = express();

//## Mongo connection settings ##################
const url = "mongodb://localhost";
const dbName = "donaldpump";
const subscriptions = "subscriptions";
//###############################################


//## Middlewares ################################
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/node_modules/particles.js/"));
app.use(bodyParser.json());
//###############################################


//## View engine ################################
app.set("views",__dirname+"/views");
app.engine("html",require("ejs").renderFile);
app.set("view engine","ejs");
//###############################################


// ## Routes ####################################
app.get("/",(req,res)=>{
  res.render("index.html");
});

app.post("/subscribe", (req, res) => {
  var email = req.body.email;
  res.setHeader("Content-Type", "application/json");

  if(!validateEmail(email)){
    console.log("Invalid Email");
    return res.send({error: "Invalid email"});
  }

  mongoClient.connect(url, (error, client) => {
    if(error)
      console.log(error);
    
    const db = client.db(dbName);
    db.collection(subscriptions).count({email: email}, (error, num) => {
      if(num > 0){
        return res.send({error: "Email exists"});
      }
      db.collection(subscriptions).insertOne({email: email}, (err, r) => {
        if(err){
          return console.log(err);
        }else{
          console.log(email + " inserted succesfully into db");
        }
        res.send({message: "Thank you!"});
      });
    });
  });

});

app.listen(PORT,()=>{
  console.log("Donald Pump webserver running on port "+PORT+"...");
});
//#################################################

//## Helpers ######################################

function validateEmail(email){
  var emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return email.match(emailPattern);
}

//#################################################
