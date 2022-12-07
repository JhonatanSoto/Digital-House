const fs = require("fs")
const { dirname } = require("path")
const importar = (marca) =>{
    switch (marca){
        case "Hot Toys":
            return JSON.parse(fs.readFileSync(__dirname + "/datos/figuras1.json", "utf-8"));
        case "Bandai":
            return JSON.parse(fs.readFileSync(__dirname + "/datos/figuras2.json", "utf-8"));
        case "Start Wars":
            return JSON.parse(fs.readFileSync(__dirname + "/datos/figuras3.json", "utf-8"))
        default: 
        return "Marca incorecta"
    }
}
module.exports = importar