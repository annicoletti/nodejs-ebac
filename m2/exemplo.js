// lista: estrutura de dados que representa uma coleção

const montadoras = ['volksvagen', 'ford', 'mercedes'];

// consulta pelo indice
montadoras[1];
console.log("🚀 ~ montadoras:", montadoras)

// adiciona no final da lista
montadoras.push('fiat');
console.log("🚀 ~ montadoras:", montadoras)

// remove o ultimo item
montadoras.pop(montadoras);
console.log("🚀 ~ montadoras:", montadoras)

console.log("🚀 ~ montadoras:", montadoras.join(' - '));
console.log("🚀 ~ montadoras:", montadoras.sort());

const novasMontadores = ['citroen', 'honda'];
const novaLista = montadoras.concat(novasMontadores);
console.log("🚀 ~ montadoras:", novaLista);

// Objeto ou dicionario
const veiculo = {
    fabricante: 'volkswagen',
    modelo: 't-cross',
    ano: 2022,
};
console.log("🚀 ~ veiculo:", veiculo)
console.log("🚀 ~ veiculo.ano:", veiculo.ano)

delete veiculo.fabricante;
console.log("🚀 ~ veiculo:", veiculo)

veiculo.cor = 'preto';
console.log("🚀 ~ veiculo:", veiculo)

console.log(Object.keys(veiculo));
console.log(Object.values(veiculo));
console.log(Object.entries(veiculo));

