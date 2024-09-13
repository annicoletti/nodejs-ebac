// 1. Faça uma função que receba como parâmetro o dia da semana (como um número, de 0 a 6) 
// e retorne a lista de veículos que possuem rodízio naquele dia 

// OBS: O rodízio de veículos segue a seguinte regra:
// Segunda feira: finais de placa 1 e 2 
// Terça feira: finais de placa 3 e 4 
// Quarta feira: finais de placa 5 e 6 
// Quinta feira: finais de placa 7 e 8 
// Sexta feira: finais de placa 9 e 0 
// Sábado e Domingos: Não tem rodízio 

// 2. Faça um laço (while) que, com a ajuda de um contador, 
// vá imprima a mensagem na tela: 
// No dia X da semana, os veículos de rodízio são: [...] 

// Utilize a função do exercício anterior dentro desse looping

const { listaCarros } = require('./exercicio01');

const getFinaisDelacaParaRodizio = (dia) => {
    if (dia === 0) {
        // Segunda feira: finais de placa 1 e 2 
        return [1, 2];
    } else if (dia === 1) {
        // Terça feira: finais de placa 3 e 4 
        return [3, 4];
    } else if (dia === 2) {
        // Quarta feira: finais de placa 5 e 6 
        return [5, 6];
    } else if (dia === 3) {
        // Quinta feira: finais de placa 7 e 8 
        return [7, 8];
    } else if (dia === 4) {
        // Sexta feira: finais de placa 9 e 0 
        return [9, 0];
    } else {
        // Sábado e Domingos: Não tem rodízio 
        return []
    }
}


const verificaRodizio = (diaSemana) => {
    const finalPlacas = getFinaisDelacaParaRodizio(diaSemana);

    const listaCarrosNoRodizio = listaCarros.filter(carro => {
        const ehRodizio = finalPlacas.some(numeroFinal => {
            return carro.placa.endsWith(numeroFinal)
        })

        if (ehRodizio) {
            return carro
        }
    });
    // console.log("🚀 ~ listaCarrosNoRodizio ~ listaCarrosNoRodizio:", listaCarrosNoRodizio)
    return listaCarrosNoRodizio;
}

const report = () => {
    let i = 0;
    while (i <= 6) {
        // console.log(`No dia ${i} da semana, os veículos de rodízio são: ${verificaRodizio(i)}`);
        console.log('No dia', i, 'da semana, os veículos de rodízio são:', verificaRodizio(i));
        i += 1;
    }
}

report();