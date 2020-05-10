// Show routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");
var Fundador   = require("../models/fundador");
var Colaborador   = require("../models/colaborador");
var Consultor   = require("../models/consultor");
var Aliado     = require("../models/aliado");

// SHOW FUNDADORES
router.get("/equipo/fundadores/:id",function(req,res){	
    Fundador.findById(req.params.id, function(err,fundador){
        if(err){
            res.redirect("back");
        }
        Fundador.find({}, function(err, fundadores){
            res.render("show/fundador", {title:fundador.namelg, fundador:fundador, fundadores:fundadores});
        })
    });
});
// SHOW CONSULTORES
router.get("/equipo/consultores/:id",function(req,res){	
    Consultor.findById(req.params.id, function(err,consultor){
        if(err){
            res.redirect("back");
        }
        Consultor.find({}, function(err, consultores){
            console.log(consultores);
            res.render("show/consultor", {title:consultor.namelg, consultor:consultor, consultores:consultores});
        })
    });
});
// SHOW COLABORADORES
router.get("/equipo/colaboradores/:id",function(req,res){	
    Colaborador.findById(req.params.id, function(err,colaborador){
        if(err){
            res.redirect("back");
        }
        Colaborador.find({}, function(err, colaboradores){
            res.render("show/colaborador", {title:colaborador.namelg, colaborador:colaborador, colaboradores:colaboradores});
        })
    });
});
// SHOW ALIADOS
router.get("/equipo/aliados/:id",function(req,res){	
    Aliado.findById(req.params.id, function(err,aliado){
        if(err){
            res.redirect("back");
        }
        Aliado.find({}, function(err, aliados){
            res.render("show/aliado", {title:aliado.namelg, aliado:aliado, aliados:aliados});
        })
    });
});

module.exports = router;