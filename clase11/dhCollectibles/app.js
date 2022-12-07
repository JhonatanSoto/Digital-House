const figuras = require("./collectibles.js")

const figura1 = figuras("Hot Toys"),
    figura2 = figuras("Bandai"),
    figura3 = figuras("Start Wars");

const unifiedCollectibles = [...figura1 , ...figura2, ...figura3]
const collectibles = {
    figuras : unifiedCollectibles,
    listFifures(){
        for( let valor of this.figuras){
            console.log(valor)
        }
    },
    figuresByBrand(marcaDeFigura){
        let marca = this.figuras.filter(figura =>{
            return figura.marca === marcaDeFigura
        })
        return marca

    }
}
console.log(collectibles.figuresByBrand("Bandai"))







