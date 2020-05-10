var mongoose=require("mongoose");

var opinionSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    celular: String,
    correo: String,
    utilizar: String,
    falta: String,
    sugerencia: String

})

module.exports = mongoose.model("Opinion", opinionSchema);