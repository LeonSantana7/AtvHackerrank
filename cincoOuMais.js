const precos = [100,500, 100, 200, 50];
let menor = precos[0];
let soma = 0;

if (precos.length >= 5) {
    for (const valor of precos) {
        soma += valor; // Adiciona o valor atual à soma

        if (valor < menor) {
            menor = valor;
        }
    }

    // Calcula a soma sem o valor mais baixo
    const somaSemMenor = soma - menor;

    console.log(somaSemMenor);
} else {
    for (const valor of precos) {
        soma += valor; // Adiciona o valor atual à soma
    }

    console.log(soma);
}
