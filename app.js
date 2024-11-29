let pelis= require("./peliculas");
pelis.forEach(peli => {
    console.log(peli)
});

let fs = require("fs");
let mensaje = fs.readFileSync("./mensaje.txt","utf-8");
console.log(mensaje)

