// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// ####################################################################
// ## OBS: Não existe fonte de dados disponível na plataforma (item a)
// ## Foi usado um array gerado usando Math.random com valores "null"
// ## para dias que não serão contabilizados.
// ####################################################################

const vetorFaturamento = require("./dados.json");

const calculaFatMax = (arr) => {
    let maximo = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].valor > maximo) maximo = arr[i].valor;
    }

    return maximo;
};

const calculaFatMin = (arr) => {
    let minimo = 9999999999999;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].valor !== 0 && arr[i].valor < minimo) minimo = arr[i].valor;
    }

    return minimo !== 9999999999999 ? minimo : 0;
};

const mediaMensalFaturamento = (arr) => {
    let diasNaoValidos = 0;
    const tam = arr.length;
    let soma = 0;
    for (let i = 0; i < tam; i++) {
        if (arr[i].valor !== 0) soma += arr[i].valor;
        else diasNaoValidos += 1;
    }
    return tam > diasNaoValidos ? soma / (tam - diasNaoValidos) : 0;
};

const diasFatAcimaMedia = (arr) => {
    const media = mediaMensalFaturamento(arr);
    let diasAcimaMedia = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].valor > media) diasAcimaMedia += 1;
    }
    return diasAcimaMedia;
};

console.log(
    `Menor valor de faturamento/dia no mês: R$ ${calculaFatMin(
        vetorFaturamento
    ).toFixed(2)}`
);
console.log(
    `Maior valor de faturamento/dia no mês: R$ ${calculaFatMax(
        vetorFaturamento
    ).toFixed(2)}`
);

console.log(
    `N° de dias acima da média do mês:         ${diasFatAcimaMedia(
        vetorFaturamento
    )}`
);

console.log(
    `\nMédia de faturamento/dia no mês:       R$ ${mediaMensalFaturamento(
        vetorFaturamento
    ).toFixed(2)}`
);

// console.table(vetorFaturamento); // Exibe a tabela de dados
