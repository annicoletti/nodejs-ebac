const avaliacoes = [
    {
        nome: 'Rafael',
        nota: 8
    },
    {
        nome: 'Claudia',
        nota: 10,
    },
    {
        nome: 'Pedro',
        nota: 6,
    }
];

avaliacoes.forEach((item) => {
    console.log('O aluno', item.nome, 'fez a prova');
});

const novaLista = avaliacoes.map((item) => {
    return item.nota
});

console.log("🚀 ~ avaliacoes:", avaliacoes)
console.log("🚀 ~ novaLista:", novaLista)

const listaOrdenada = avaliacoes.sort((item1, item2) => {
    return item1.nota - item2.nota;
})

console.log("🚀 ~ avaliacoes:", avaliacoes) //o sort altera a lista original
console.log("🚀 ~ listaOrdenada:", listaOrdenada)

const listaFiltrada = avaliacoes.filter(item => {
    return item.nota > 9;
});

const listaFiltradaUmItem = avaliacoes.find(item => {
    return item.nota > 9;
}); // retorna o primeiro item que deu match na busca

console.log("🚀 ~ listaFiltrada:", listaFiltrada);
console.log("🚀 ~ listaFiltradaUmItem:", listaFiltradaUmItem); // não retorna lista apenas um objeto

// Percorre todos os itens verificando a condição se algum NÃO DER match ele retorna false
const todosItensDaoMatch = avaliacoes.every(item => {
    return item.nota > 9;
});
console.log("🚀 ~ todosItensDaoMatch:", todosItensDaoMatch)

// Percorre todos os itens verificando a condição se algum DER match ele retorna false
const algumItemDeuMatch = avaliacoes.some(item => {
    return item.nota > 9;
});
console.log("🚀 ~ algumItemDeuMatch:", algumItemDeuMatch)