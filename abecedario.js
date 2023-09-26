const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];
let letra = "M";
let contador = 0;
let contador2 = 0;
for (const palavra of palavras) {
    if(palavra.toLocaleLowerCase().startsWith(letra.toLocaleLowerCase())){
        contador = contador +1;
    }else{
        contador2 = contador2 + 1;
    }
}
console.log(contador2);