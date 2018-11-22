var express = require("express"); // The app needs the express module so it will work
var app = express();//invoke express application

var fs = require('fs');

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

// we need some way for the app to know where to look(THESE ARE THE LINKS TO THE OTHER FOLDERS)///////////////////
app.use(express.static("views"));
app.use(express.static("model"));
app.use(express.static("scripts"));

var contact = require("./model/contacts.json")// Allows access to json file///Calls all content of the json file and declaring it as a var called contact//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Set up a page that just says something////////////////////////////////
app.get("/", function(req, res){
    
    res.render("index.ejs");
    console.log("Its true u know!")
    
});

//////////////////PRODUCTS////////////////////////////////////////
app.get("/products", function(req, res){
    
    res.render("products.ejs");

    console.log("Its true u know!")
    
});
////////////////////////////////////////////////////////////////
////////////////////Route to render contact info page///////////
app.get("/contacts", function(req, res){
    
    res.render("contacts.ejs", {contact});

    console.log("Its true u know!")
    
});

app.get("/addcontacts", function(req, res){
    
    res.render("addcontacts.ejs");

    console.log("Its true u know!")
    
});


app.post("/addcontacts", function(req, res){
    
    res.render("addcontacts.ejs");

    console.log("Its on the contacts page")
    
});



// Now we need to tell the application where to run 

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("READY to go.....probably");
    
});