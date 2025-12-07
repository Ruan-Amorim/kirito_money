import { useEffect, useState } from "react";
import { tratarTickersB3 } from "../services/B3_data.js";

const CategoriasTickers = () => {

    const [listTickers, setListTickers] = useState([]);

    useEffect(() => {
        async function load() {
            const dados = await tratarTickersB3("symbol"); // << agora funciona
            setListTickers(dados);
        }
        load();
    }, []);

    return (
        <section className="containerCategriasTikcers">
            <h2>Categorias de Tickers</h2>

            <ul className="CategriasTikcers">
                {listTickers.length === 0 && <li>Carregando...</li>} {/* opcional */}

                {listTickers.map(ticker => (
                    <li key={ticker} onClick={() => clickTicker(ticker)}>{ticker}</li>
                ))}
            </ul>
        </section>
    );
}

export async function clickTicker(symbol) {
    let tickersPorCategoria = awaitbuscaCategoriaTicker(symbol);

    return(
        <>
            <section className="containerOpenCategoriaTickers">
                <ul>
                    {tickersPorCategoria.length === 0 && <li>Carregando...</li>} {/* opcional */}

                    {tickersPorCategoria.map(ticker => (
                        <li key={ticker.code}>{ticker.name} & {ticker.code}</li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export async function buscaCategoriaTicker(nome) {
    let listaTickers = await TickersB3();
    let list = [];
    
    for (let x = 0; x < listaTickers.length; x++) {
        if (nome === listaTickers[x].especPapel) {
            list.push({
                "name": listaTickers[x].nomeCurto,
                "code": listaTickers[x].codNeg,
                "symbol": nome,
            });
        } else {

        }
        
    }
    return(list);
}

export default CategoriasTickers;