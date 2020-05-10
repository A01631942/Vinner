//FAQs /preguntas-frecuentes /FAQ
app.get("/FAQ", function(req, res){
	res.render("FAQ/FAQ", {title:"FAQ"});
})

app.get("/FAQ-mujeres", function(req,res){
	res.render("FAQ/FAQMujer", {title:"Mujeres"})
})
//FAQs Empresas
app.get("/FAQ-empresas", function(req, res){
	res.render("FAQ/FAQEmpresa", {title:"FAQ Empresas"});
})


// POST ROUTES NOT USED
// new user
router.get("/nuevo-usuario", function(req,res){
	res.render("forms/nuevoUsuario", {title: "Nuevo Usuario"});
})
router.post("/nuevo-usuario",function(req,res){
	res.send("post route for new user");
})

// saber cuando la app esté lista
router.get("/app-lista", function(req,res){
	res.render("forms/appLista", {title:"Avísame"});
})
router.post("/app-lista", function(req,res){
	res.send("post route for app lista");
})

// Obtener acceso
router.get("/acceso", function(req,res){
	res.render("forms/acceso", {title: "Código de Acceso"});
})
router.post("/acceso", function(req,res){
	res.send("acceso post route");
})