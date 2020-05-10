var mongoose=require("mongoose");

var aliadoSchema = new mongoose.Schema({
    namelg: String,
    namesm: String,
    img: String,
    prof: String,
    description: String,
    pagina: String
})

module.exports = mongoose.model("Aliado", aliadoSchema);