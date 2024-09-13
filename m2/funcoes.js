const olaMundo = () => {
    console.log("Olá mundo");
}

olaMundo();
console.log("🚀 ~ olaMundo:", olaMundo());


const calculaIdadeEmMeses = (idade = 0) => {
    return idade * 12;
}

console.log("🚀 ~ calculaIdadeEmMeses", calculaIdadeEmMeses(10));
console.log("🚀 ~ calculaIdadeEmMeses", calculaIdadeEmMeses());

//arrow function
const testArrow = () => {
    console.log("Usando arrow functions");
}

//modo antigo
function testFunction(){
    console.log("Usando functions modelo antigo");
}

testArrow();
testFunction();