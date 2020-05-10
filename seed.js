var mongoose=require("mongoose");
var Fundador = require("./models/fundador");
var Aliado = require("./models/aliado");
var Consultor = require("./models/consultor");
var Colaborador = require("./models/colaborador");
var fundadores=require("./js/fundadores");
var aliados=require("./js/aliados");
var consultores =require("./js/consultores");
var colaboradores =require("./js/colaboradores");

function seed(){
    Fundador.deleteMany({},function(err){
        if(err){
            console.log(err);
        } else{
            Consultor.deleteMany({},function(err){
                if(err){
                    console.log(err);
                } else{
                    Aliado.deleteMany({}, function(err){
                        if(err){
                            console.log(err);
                        } else{
                            Colaborador.deleteMany({}, function(err){
                                if(err){
                                    console.log(err);
                                } else{
                                    Fundador.create(fundadores);
                                    Aliado.create(aliados);
                                    Consultor.create(consultores);
                                    Colaborador.create(colaboradores);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};

module.exports=seed();