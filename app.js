var express = require("express"); // The app needs the express module so it will work
var app = express();//invoke express application


app.use(express.static("views"));




app.get("/", function(req, res){
    
    
    res.render("index.html");
    console.log("Its true u know!")
    
});


app.get("/faqs", function(req, res){
    
    res.render("faqs.html");

    console.log("Its true u know!")
    
});



// Now we need to tell the application where to run 

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("READY to go.....probably");
    
});






