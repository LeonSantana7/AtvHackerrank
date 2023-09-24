const carrosel = [1, 2, 3, 4, 5, 6, 7];
let direcao = "<"; // Aqui você pode especificar a direção desejada

let imagem = carrosel[0]; // Começamos com a primeira imagem

for (let i = 0; i < direcao.length; i++) {
    const sinal = direcao[i];
    if (sinal === ">") {
        imagem = carrosel[(carrosel.indexOf(imagem) + 1) % carrosel.length]; // Avança para a próxima imagem
    } else if (sinal === "<") {
        imagem = carrosel[(carrosel.indexOf(imagem) - 1 + carrosel.length) % carrosel.length]; // Retrocede para a imagem anterior
    } else {
        console.log("Direção inválida");
        break; // Encerra o loop se a direção for inválida
    }
}

console.log(imagem);


