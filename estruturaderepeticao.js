const listadeCompras = ["arroz","feijao","macarrao","iogurte","acucar","sal"];

console.log("Fui ao mecardo e comprei:");

for (const compra of listadeCompras){
    if(compra === "sal"){
        console.log("Esqueci de comprar o", compra);
    } else {
        console.log(compra);
    }
}