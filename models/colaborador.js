var mongoose=require("mongoose");

var colaboradorSchema = new mongoose.Schema({
    namelg: String,
    namesm: String,
    img: String,
    prof: String,
    description: String,
})

module.exports = mongoose.model("Colaborador", colaboradorSchema);