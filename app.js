// required modules
var 	express = require("express"),
		app		= express();

// configuration
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname + "/public"));

// homepage
app.get("/", function(req, res){
	res.redirect("/index");
});

app.get("/index", function(req, res){
	res.render("index");
});

// project pages
app.get("/upnext", function(req, res){
	res.render("upnext");
});

app.get("/mountaintravel", function(req, res){
	res.render("mountaintravel");
});

app.get("/shoppingcard", function(req, res){
	res.render("shoppingcard");
});

app.get("/burgerbuilder", function(req, res){
	res.render("burgerbuilder");
});

app.get("/otherwork", function(req, res){
	res.render("other_work");
});

// external website
app.get("/mountaintravel/example", function(req, res){
	res.render("mountaintravel_example");
});

// server setup
app.listen(app.get('port'), function(){
	console.log("Server started on port" + app.get('port'));
});


