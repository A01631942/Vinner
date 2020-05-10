var mongoose=require("mongoose");

var fundadorSchema = new mongoose.Schema({
    namelg: String,
    namesm: String,
    img: String,
    prof: String,
    description: String,
    quote: String,
    linkedin: String
})

module.exports = mongoose.model("Fundador", fundadorSchema);