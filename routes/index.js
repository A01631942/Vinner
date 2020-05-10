// Index routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");
var Fundador   = require("../models/fundador");
var Colaborador   = require("../models/colaborador");
var Consultor   = require("../models/consultor");
var Aliado     = require("../models/aliado");
var fundadores = require("../js/fundadores");
var colaboradores = require("../js/colaboradores");
var aliados = require("../js/aliados");
var consultores = require("../js/consultores");
var seed = require("../seed");

//HOME
router.get("/", function(req, res){
	res.render("home", {title:"Vinner"});
})

// APP VINNER
router.get("/app", function(req,res){
	res.render("appVinner",{title:"App Vinner"});
})

//NOSOTROS
router.get("/vinner", function(req, res){
	res.render("quien", {title:"Nosotros"});
})

router.get("/test", function(req,res){
	res.send("todo bien");
})

//CONTACTO
router.get("/contacto", function(req, res){
	res.render("contacto", {title:"Contacto"});
})

//EQUIPO
router.get("/equipo2", function(req, res){
	Fundador.find({},function(err,fundadores){
		if(err){
			res.redirect("back");
		}
		Consultor.find({},function(err,consultores){
			if(err){
				res.redirect("back");
			}
			Colaborador.find({},function(err, colaboradores){
				if(err){
					res.redirect("back");
				}
				Aliado.find({},function(err, aliados){
					if(err){
						res.redirect("back");
					}
					// res.send(fundadores + consultores + colaboradores + aliados,);
					res.render("equipo", {title:"Equipo", fundadores:fundadores, consultores:consultores, colaboradores:colaboradores, aliados:aliados});
				})
			})
		})
	});
})

// EQUIPO
router.get("/equipo", function(req, res){
	res.render("equipo", {title:"Equipo2", fundadores:fundadores, consultores:consultores, aliados:aliados, colaboradores:colaboradores});
});

// CERTIFICACIONES
router.get("/certificaciones", function(req,res){
	res.render("certificaciones", {title:"Vinner Empresarial"});
})

module.exports = router;