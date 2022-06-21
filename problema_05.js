// Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU

const frase1 = "apos a sopa";
const frase2 = "Brenno";

const inverte_strings = (str) => {
    let revertido = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revertido += str[i];
    }
    return revertido;
};

console.log("Frase 1 normal:    " + frase1);
console.log("Frase 1 invertida: " + inverte_strings(frase1));

console.log("\nFrase 2 normal:    " + frase2);
console.log("Frase 2 invertida: " + inverte_strings(frase2));
