// Index routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");
var fundadores = require("../js/fundadores");
var colaboradores = require("../js/colaboradores");
var aliados = require("../js/aliados");
var consultores = require("../js/consultores");
var seed = require("../seed");

//HOME
router.get("/", function(req, res){
	res.render("home", {title:"Vinner mx"});
})

// APP VINNER
router.get("/app", function(req,res){
	res.render("appVinner",{title:"App Vinner"});
})

//NOSOTROS
router.get("/vinner", function(req, res){
	res.render("quien", {title:"Nosotros"});
})

//CONTACTO
router.get("/contacto", function(req, res){
	res.render("contacto", {title:"Contacto"});
})

// EQUIPO
router.get("/equipo", function(req, res){
	res.render("equipo", {title:"Equipo", fundadores:fundadores, consultores:consultores, aliados:aliados, colaboradores:colaboradores});
});

// CERTIFICACIONES
router.get("/certificaciones", function(req,res){
	res.render("certificaciones", {title:"Vinner Empresarial"});
})

module.exports = router;