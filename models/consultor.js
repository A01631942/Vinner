var mongoose=require("mongoose");

var consultorSchema = new mongoose.Schema({
    namelg: String,
    namesm: String,
    img: String,
    prof: String,
    description: String,
})

module.exports = mongoose.model("Consultor", consultorSchema);