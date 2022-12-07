
const { isArrayBufferView } = require("util/types")
const datosBici = require("./datosBici.js")

const bici = {
    bicicletas : datosBici,
    buscarBici(idBici){
        let bicisId = this.bicicletas.filter(bicicleta =>{
            return bicicleta.id === idBici
        })
        return bicisId.length > 0 ? bicisId[0] : null 
    },
    venderBici(idBici){
        let biciVendida = this.buscarBici(idBici)
        if(biciVendida && biciVendida.vendida  == "No"){
            biciVendida.vendida = "Si"
            return biciVendida
        }
        return "Bicicleta no encontrada"
    },
    biciParaVender(){
        let bicisId = this.bicicletas.filter(bicicleta =>{
            return bicicleta.vendida == 'No'
        })
        return bicisId
    },
    totalDeVentas(){
        let bicisVendidas = this.bicicletas.filter(bicicleta =>{
            return bicicleta.vendida == "si"
        })
        let montototal = bicisVendidas.reduce((acc, id) =>{
            return acc + id.precio 
        },0)
        return `Total de ventas de las bicicletas: $${montototal}`
    },      
    aumentoBici(porcentajeDeAumento){
        //100 --- precio
        //200 ---
        let mapeo = this.bicicletas.map((valor)=>{
            valor.precio += (porcentajeDeAumento * valor.precio) / 100;
            return valor;
        });
        return this.bicicletas;
    },
    rodadoBici(NumeroDeRodado){
        let bicisId = this.bicicletas.filter(bicicleta =>{
            return bicicleta.rodado == NumeroDeRodado
        })
        return bicisId.length > 0? bicisId : "Rodado no disponible"
    },
    listarTodasLasBicis(){
        let bicisId = this.bicicletas.forEach(element => {
            console.log(element)   
        });
        return bicisId
    }
}
console.log(bici.aumentoBici(1))
// bici.venderBici(3)
// bici.listarTodasLasBicis()

