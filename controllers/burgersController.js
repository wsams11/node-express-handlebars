// require express, express route, burgers model file
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// get route for home 

router.get("/", function(req,res){
    res.redirect("/burgers");
})


// get route for localhost/burgers
router.get("/burgers", function(req,res){
    burger.all(function(burgerData){
        res.render("index", { burger_data: burgerData});
    })
})

// post route for /burgers/create

router.post("/burgers/create", function(req,res){
   burger.create(req.body.burger_name, function(result){
       res.redirect("/");
   })
})


// put route for /burgers/:id
router.put("/burgers/:id", function(req,res){
    burger.update(req.params.id, function(result){
        res.sendStatus(200);
    })
 })


// export router

module.exports = router;


