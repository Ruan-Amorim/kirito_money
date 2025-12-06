
 export async function TickersB3() {

    try {
        let resposta = await fetch("https://cvscarlos.github.io/b3-api-dados-historicos/api/v1/tickers-cash-market.json");
        let dataB3 = await resposta.json();
        let data = Object.values(dataB3.data);
        return data; // retorno bruto para analisarmos depois.
    } catch (erro) {
        console.error("Erro ao buscar dados da B3", erro);
        return null;
    }
 }

// A função tratarTickersB3, pega o total de tickers da B3 e trata os dados, retornando uma lista com os nomes de todas as ações que tem tickers na B3.
export async function tratarTickersB3(type) {
    const dadosB3 = await TickersB3();
    switch (type) {
        case "name":
            var lista = new Set(dadosB3.map(e => e.nomeCurto));
            return [...lista];
        case "code":
            var lista = new Set(dadosB3.map(e => e.codNeg));
            return [...lista];
        case "symbol":
            var lista = new Set(dadosB3.map(e => e.especPapel));
            return [...lista];
        default:
            break;
    }
}