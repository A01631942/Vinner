// Index routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");
var Opinion = require("../models/opinion");
var Info = require ("../models/informacion");

// APP FORM: DANOS TU OPINIÓN
router.post("/opinion", function(req,res){
    Opinion.create(req.body.opinion, function(err,opinion){
        if(err){
            console.log(err);
            res.redirect("back");
        }else{
            opinion.save();
        }
    res.redirect("back");
    })
})

// CERTIFICACIONES POST: MÁS INFORMACIÓN
router.post("/informacion", function(req,res){
    Info.create(req.body.ifno, function(err,info){
        if(err){
            console.log(err);
            res.redirect("back");
        }else{
            info.save();
        }
    res.redirect("back");
    })
})

module.exports=router;