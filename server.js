// require express, handlebars, routes
const express = require ("express");
const app = express();
const routes = require ("./controllers/burgersController.js");

// create port variable
const PORT = process.env.PORT || 3001;

// create app using express


const expressHandlebars = require ("express-handlebars");

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function(){
    console.log("Listen on port: " + PORT);
})







