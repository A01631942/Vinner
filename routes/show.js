// Show routes
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");
var fundadores = require("../js/fundadores");
var consultores = require("../js/consultores");
var colaboradores = require("../js/colaboradores");
var aliados = require("../js/aliados");

//find an element in an array
function findObject(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

// SHOW FUNDADORES
router.get("/equipo/fundadores/:show",function(req,res){	
    var fundador = findObject(fundadores, "show", req.params.show);
    res.render("show/fundador", {title:fundador.namesm, fundador:fundador, fundadores:fundadores});
});
// SHOW CONSULTORES
router.get("/equipo/consultores/:show",function(req,res){	
    var consultor = findObject(consultores, "show", req.params.show);
    res.render("show/consultor", {title:consultor.namesm, consultor:consultor, consultores:consultores});
});
// SHOW COLABORADORES
router.get("/equipo/colaboradores/:show",function(req,res){	
    var colaborador = findObject(colaboradores, "show", req.params.show);
    res.render("show/colaborador", {title:colaborador.namesm, colaborador:colaborador, colaboradores:colaboradores});
});
// SHOW ALIADOS
router.get("/equipo/aliados/:show",function(req,res){	
    var aliado = findObject(aliados, "show", req.params.show);
    res.render("show/aliado", {title:aliado.namesm, aliado:aliado, aliados:aliados});
});

module.exports = router;