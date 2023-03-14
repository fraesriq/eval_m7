import express from "express";
import { create } from "express-handlebars";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import {addPais} from './consultas.js';


let PORT = process.env.PORT || 3000;

const app = express();

//MIDDLEWARE

app.use(express.json())
app.use(express.urlencoded({extended:false}));

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
app.get(["/", "/home"], async (req, res) => {
    /* let consulta =`
        SELECT p.nombre, p.continente, p.poblacion, pp.pib_2019, pp.pib_2020 FROM paises p
        join paises_pib pp
        on p.nombre = pp.nombre
    `;

    let cliente = await pool.connect();
    if(cursor == null){
        cursor = cliente.query(new Cursor(consulta))
    }
    cursor.read(2, (error, rows) => {
        if(error) return res.send("ha ocurrido un error");
        if(rows.length == 0){
            cursor.close(() => {
                cliente.release();
            cursor = null;
            res.render("home", {
                final: "No hay más elementos por mostrar"
            })
            });
        }else {
            cliente.release();
            res.render("home", {
                paises: rows
            })
        }
        
    }) */

    res.render("home");
})


//RUTA AGREGAR PAIS
app.get("/add/pais", (req, res) => {
    res.render("addPais")
});

//RUTA RECIBE DATOS DE PAISES
app.post("/add/pais", async (req, res) => {
    let {nombre, continente, poblacion, pib_2019, pib_2020} = req.body;
    addPais(nombre, continente, poblacion, pib_2019, pib_2020).then(respuesta => {
        res.send("<p>Registro salío bien: <a href='http://localhost:3000'>Volver al inicio</a></p>")
    }).catch(error => {
        res.send("<p>no se pudo realizar el Registro: <a href='http://localhost:3000/add/pais'>Volver</a></p>")
    })
});

//RUTA AGREGAR PAIS
app.get("/delete/pais", async (req, res) => {
    res.render("deletePais");
});