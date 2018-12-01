
//ORIGINAL
var express = require("express"); // This line calls the express module
var app = express(); //invoke express application

//read and write over the jason file
var fs = require('fs');

var products = require("./model/products.json") // Allow access to contact json file

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// we need some way for the app to know where to look
app.use(express.static("views"));
app.use(express.static("scripts"));
app.use(express.static("images"));
app.use(express.static("model"));



app.set("view engine", "ejs");//this line sets the default view engine

// Route ro render index page 
app.get("/", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("index.ejs");
    console.log("Index/home page is working")
    
});


// root to render products page  
app.get("/products", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("products.ejs", {products});
    console.log("products is working")
    
});


// route to render contact info page 
app.get("/createproduct", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("createproduct.ejs");
    console.log("on contacts page!")
    
});




// route to render products info page//////////////////////THIS IS THE CREATE PRODUCTS CODE/////////////////////
app.post("/createproduct", function(req, res){
    
    // function to find the max id
    
  	function getMax(products , id) {
		var max
		for (var i=0; i<products.length; i++) {
			if(!max || parseInt(products[i][id]) > parseInt(max[id]))
				max = products[i];
			
		}
		return max;
	}
	
	
	var maxPpg = getMax(products, "id"); // This calls the function above and passes the result as a variable called maxPpg.
	newId = maxPpg.id + 1;  // this creates a nwe variable called newID which is the max Id + 1
	console.log(newId); // We console log the new id for show reasons only
    
	// create a new product based on what we have in our form on the add page 
	
	var productsx = {
    name: req.body.name,
    id: newId,
    brand: req.body.brand,
    price: req.body.price,
    image: req.body.image
   
    
  };
    
     console.log(productsx);
  var json = JSON.stringify(products); // Convert our json data to a string
  
  // The following function reads the new data and pushes it into our JSON file
  
  fs.readFile('./model/products.json', 'utf8', function readFileCallback(err, data){
    if(err){
     throw(err);
         
    } else {
      
      products.push(productsx); // add the data to the json file based on the declared variable above
      json = JSON.stringify(products, null, 4); // converts the data to a json file and the null and 4 represent how it is structuere. 4 is indententation 
      fs.writeFile('./model/products.json', json, 'utf8')
    }
    
  })
  res.redirect("/products");

});



// url to delete JSON

app.get("/deleteproduct/:id", function(req, res){
    
  var json = JSON.stringify(products); // Convert our json data to a string
  
  var keyToFind = parseInt(req.params.id) // Getes the id from the URL
  var data = products; // Tell the application what the data is
  var index = data.map(function(d) {return d.id;}).indexOf(keyToFind)
  console.log("variable Index is : " + index)
  console.log("The Key you ar looking for is : " + keyToFind);
  
  products.splice(index, 1);
  json = JSON.stringify(products, null, 4); // converts the data to a json file and the null and 4 represent how it is structuere. 4 is indententation 
      fs.writeFile('./model/products.json', json, 'utf8')
  res.redirect("/products");
    
});



// root to edit products page  
app.get("/update/:id", function(req, res){
    
    
     function chooseContact(indOne){
   return indOne.id === parseInt(req.params.id)
  
     }
 
  var indOne = products.filter(chooseContact);
  
  //res.send(indOne)
  res.render("update.ejs", {indOne});
    
    
    
 
    
});




// Create post request to edit the individual review
app.post('/update/:id', function(req, res){
 var json = JSON.stringify(products);
 var keyToFind = parseInt(req.params.id); // Id passed through the url
 //var data = contact; // declare data as the reviews json file
  var index = products.map(function(contact) {return contact.id;}).indexOf(keyToFind)
 

 products.splice(index, 1, {name: req.body.name, Comment: req.body.price, id: parseInt(req.params.id), brand: req.body.brand, image: req.body.image});
 json = JSON.stringify(products, null, 4);
 fs.writeFile('./model/products.json', json, 'utf8'); // Write the file back
 res.redirect("/products");
});



// root to render FAQS page  
app.get("/faqs", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("faqs.ejs");
    console.log("Faqs is working")
    
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




// Now we need to tell the application where to run


app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Off we go again");
  
})




