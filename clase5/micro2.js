const tipoDeHamburgesa = (menu,jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla) =>{

    let hamburguesa = 0;
    switch(menu){
        case "carne a la parrila":
            hamburguesa =  1800
            break;
        case "pollo":
            hamburguesa = 1600
            break;
        case "vegetariana":
            hamburguesa =  1200
            break;
    }

    let ingJamon = 30 ;
    let ingQueso = 25 ;
    let ingSalsaDeTomate = 5 ;
    let ingMayonesa = 5 ;
    let ingMostaza = 5 ;
    let ingTomate = 15 ;
    let ingLechuga = 10 ;
    let ingCebolla = 10 ;

    if(jamon){
        hamburguesa += ingJamon
    }
    if(queso){
        hamburguesa += ingQueso
    }
    if(salsaDeTomate){
        hamburguesa += ingSalsaDeTomate
    }
    if(mayonesa){
        hamburguesa += ingMayonesa
    }
    if(mostaza){
        hamburguesa += ingMostaza
    }
    if(tomate){
        hamburguesa += ingTomate
    }
    if(lechuga){
        hamburguesa += ingLechuga
    }
    if(cebolla){
        hamburguesa += ingCebolla
    }
    return hamburguesa
}
const msjParaElUsuario = (nombre, apellido, menu,jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla,callback)=>{
    return `Estimado ${nombre} ${apellido}, el monto total a pagar es de: ${callback(menu,jamon,queso,salsaDeTomate,mayonesa,mostaza,tomate,lechuga,cebolla)}`

}


console.log(msjParaElUsuario("xen","boy","pollo", true,false,true,false,false,true,false,true,tipoDeHamburgesa))
