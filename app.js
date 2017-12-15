// Required modules
const 	express = require("express"),
		app		= express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("index");
});

app.get("/shoppingcard", function(req, res){
	res.render("shoppingcard");
});

app.get("/mountaintravel", function(req, res){
	res.render("mountaintravel");
});

app.get("/mountaintravel/example", function(req, res){
	res.render("mountaintravel_example");
});

app.listen(app.get('port'), function(){
	console.log("Server started on port" + app.get('port'));
});


