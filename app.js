
//ORIGINAL
var express = require("express"); // This line calls the express module
var app = express(); //invoke express application

//read and write over the jason file
var fs = require('fs');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// we need some way for the app to know where to look
app.use(express.static("views"));
app.use(express.static("scripts"));
app.use(express.static("images"));

app.set("view engine", "ejs");//this line sets the default view engine

// Route ro render index page 
app.get("/", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("index.ejs");
    console.log("Index/home page")
    
});


// root to render products page  
app.get("/products", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("products.ejs");
    console.log("products is working")
    
});

// root to render FAQS page  
app.get("/faqs", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("faqs.ejs");
    console.log("FAAAAQQQSS")
    
});

// root to render contacts page  
app.get("/contacts", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("contacts.ejs");
    console.log("Contacts page!")
    
});

// root to render reviews page  
app.get("/reviews", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("reviews.ejs");
    console.log("reviews page working!")
    
});


// root to render adidas page  
app.get("/adidas", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("adidas.ejs");
    console.log("adidas page working!")
    
});

// root to render nike page  
app.get("/nike", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("nike.ejs");
    console.log("nike page working!")
    
});

// root to render vans page  
app.get("/vans", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("vans.ejs");
    console.log("vanspage working!")
    
});














// root to render products page  
app.get("/addcontact", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("addcontact.ejs", {contact});
    console.log("Contacts page!")
    
});

// root to render products page  
app.post("/addcontact", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("addcontact.ejs", {contact});
    console.log("Contacts page!")
    
});


// Now we need to tell the application where to run


app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Off we go again");
  
})




