//varrer todas as possibilidades de compra e venda
//ver para cada uma se é prejuizo
//se for , anotar valor

//dps ver qual foi o menor prejuizo
let menorPrejuizo = 999999999999;
precos = [20, 15, 8, 2, 12];

for(let i = 0; i < precos.length; i++){
    for(let j = i + 1; j < precos.length; j++ ){
        const compra = precos[i];
        const venda = precos[j];
        const prejuizo = compra - venda;

        if(prejuizo > 0){
            //realmente é prejuizo
            if(prejuizo < menorPrejuizo){
                menorPrejuizo = prejuizo;
            }
        }
    }
    console.log(menorPrejuizo);
}