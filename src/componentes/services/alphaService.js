import { API_KEY } from "../data/data.js";

export async function getGlobalQuote(symbol, interval) {

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}min&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data; // retorno bruto para analisarmos depois.
    } catch (erro) {
        console.error("Erro ao buscar GLOBAL_QHOTE", erro);
        return null;
    }

};

//==========================
// FUTURAS AÇÕES AQUI:
// getDailyData()
// getCrypto()
// getForex()
// getIndcators()
//==========================
/*
1) Lista de ações → clicar e abrir detalhes
2) Gráfico intraday com candles
3) Trazer overview fundamental (DY, P/L etc)
4) Todos juntos (dashboard completo)
*/