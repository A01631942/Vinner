// Index routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");
var fundadores = require("../js/fundadores");
var colaboradores = require("../js/colaboradores");
var aliados = require("../js/aliados");
var consultores = require("../js/consultores");
var fundadoresEnglish = require("../js/fundadoresEnglish");
var colaboradoresEnglish = require("../js/colaboradoresEnglish");
var aliadosEnglish = require("../js/aliadosEnglish");
var consultoresEnglish = require("../js/consultoresEnglish");
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

// =================================

// ENGLISH
//HOME
router.get("/english", function(req, res){
	res.render("homeEnglish", {title:"Vinner mx"});
})

// VINNER APP
router.get("/english/app", function(req,res){
	res.render("appVinnerEnglish",{title:"Vinner App"});
})

//ABOUT US
router.get("/english/vinner", function(req, res){
	res.render("quienEnglish", {title:"About Us"});
})

//CONTACT
router.get("/english/contact", function(req, res){
	res.render("contactoEnglish", {title:"Contact"});
})

// TEAM
router.get("/english/team", function(req, res){
	res.render("equipoEnglish", {title:"Team", fundadores:fundadoresEnglish, consultores:consultoresEnglish, aliados:aliadosEnglish, colaboradores:colaboradoresEnglish});
});

// CERTIFICATIONS
router.get("/english/certifications", function(req,res){
	res.render("certificacionesEnglish", {title:"Vinner Business"});
})

module.exports = router;