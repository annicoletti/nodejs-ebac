// 1. Crie uma lista de dicionários que contenha pelo menos 4 carros. 
// Cada item da lista deve ser um dicionário representando um carro com as informações: 
// placa, modelo e ano

// 2. Utilizando manipulações de lista (push) adicione o seguinte dicionário a sua lista 
// de carros: { modelo: “t-cross”, ano: 2022, placa: “DFC3R43” }

// 3. Ordene a sua lista de carros pelo nome do modelo em ordem alfabética

const listaCarros = [
    {
        placa: 'KYH7808',
        modelo: 'Mobi',
        ano: 2016,
    },
    {
        placa: 'MMW1030',
        modelo: 'Corcel',
        ano: 1977,
    },
    {
        placa: 'CVN3537',
        modelo: 'HR-V',
        ano: 2015,
    },
    {
        placa: 'NEQ1409',
        modelo: 'Compass',
        ano: 2021,
    },
]

const novoCarro = { placa: 'DFC3R43', modelo: 'T-Cross', ano: 2022, };
listaCarros.push(novoCarro);

listaCarros.sort((a, b) => {
    if (a.modelo > b.modelo) {
        return 1;
    } else if (a.modelo < b.modelo) {
        return -1;
    }
    return 0;
});

console.log("🚀 ~ listaCarros:", listaCarros)

module.exports = { listaCarros };