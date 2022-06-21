// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$ 67.836,43
// RJ – R$ 36.678,66
// MG – R$ 29.229,88
// ES – R$ 27.165,48
// Outros – R$19.849,53
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

const calculaFaturamentoTotal = (arr) => {
    let somatorio = 0;
    for (let chave in arr) {
        somatorio += arr[chave];
    }
    return somatorio;
};

const calculaPercentuais = (arr) => {
    const porcentuaisEstados = {};
    const faturamentoTotal = calculaFaturamentoTotal(arr);
    for (let chave in arr) {
        porcentuaisEstados[chave] = (arr[chave] * 100) / faturamentoTotal;
    }
    return porcentuaisEstados;
};

// Saída dos valores calculados
console.log(`Faturamento dos estados em R$:`);
console.log(faturamentoEstados);

console.log(
    `\nFaturamento total: R$${calculaFaturamentoTotal(faturamentoEstados)}\n`
);
console.log(`Porcentagens de faturamento por estado:`);
const porcentuaisEstados = calculaPercentuais(faturamentoEstados);
for (let chave in porcentuaisEstados) {
    console.log(`${chave}: ${porcentuaisEstados[chave].toFixed(2)}%`);
}
