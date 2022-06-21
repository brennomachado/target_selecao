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

//Config inicial
const vetorFaturamento = [];
const diasEmMes = 30;
const faturamentoMaxDiario = 100;

//Criando vetor onde cada posicão corresponde ao dia do faturamento no mês com seu respectivo valor dentro dos maximos estabelecidos.
for (let i = 0; i < diasEmMes; i++) {
    vetorFaturamento.push(Math.floor(Math.random() * faturamentoMaxDiario));
}

// Simulando dias sem faturamento com entrada null
vetorFaturamento[10] = null;
vetorFaturamento[11] = null;
vetorFaturamento[17] = null;
vetorFaturamento[18] = null;

//Impressão do vetor para conferência dos resultados no console
console.log(`Valores de entrada de faturamento num mês de 30 dias`);
console.table(vetorFaturamento);

const faturamentoMax = (vetor) => {
    let max = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] !== null && vetor[i] > max) max = vetor[i];
    }
    return max;
};

const faturamentoMin = (vetor) => {
    let min = faturamentoMaxDiario;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] !== null && vetor[i] < min) min = vetor[i];
    }
    return min;
};

const mediaMensalFaturamento = (vetor) => {
    let somatorio = 0;
    let diasValidos = 0;
    // console.log(vetor);
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] !== null) somatorio += vetor[i];
        else diasValidos += 1;
    }

    return diasEmMes > diasValidos ? somatorio / (diasEmMes - diasValidos) : 0;
};

const diasFaturamentoAcimaMedia = (vetor) => {
    let diasAcimaMedia = 0;
    const mediaMensal = mediaMensalFaturamento(vetor);
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] !== null && vetor[i] > mediaMensal) diasAcimaMedia += 1;
    }

    return diasAcimaMedia;
};

//Saídas pedidas
console.log(
    `Valor do dia com menor faturamento: ${faturamentoMin(vetorFaturamento)}`
);

console.log(
    `Valor do dia com maior faturamento: ${faturamentoMax(vetorFaturamento)}`
);

console.log(
    `N° de dias com valor maior que a media diária de faturamento: ${diasFaturamentoAcimaMedia(
        vetorFaturamento
    )}`
);

// Extra, achei legal expor a média diária mensal também.
console.log(
    `Media diária de faturamento: ${mediaMensalFaturamento(
        vetorFaturamento
    ).toFixed(2)}`
);
