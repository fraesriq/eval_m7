import express from "express";
import { create } from "express-handlebars";

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let PORT = process.env.PORT || 3000;

const app = express();

const hbs = create({
	partialsDir: [
		"views/partials/",
	],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

app.listen(PORT, () => console.log("http://localhost:3000"));


//RUTAS DE VISTAS
app.get(["/", "/home"], (req, res) => {
    res.render("home");
})