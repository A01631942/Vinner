var mongoose=require("mongoose");

var informacionSchema = new mongoose.Schema({
    nombreEmpresa: String,
    nombre: String,
    telefono: String,
    extension: String,
    correo: String,
    modalidad: String,
    motivo: String,
    comentarios: String

})

module.exports = mongoose.model("Info", informacionSchema);