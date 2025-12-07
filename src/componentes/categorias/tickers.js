import { useEffect, useState } from "react";
import { tratarTickersB3, TickersB3 } from "../services/B3_data.js";

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
    let tickersPorCategoria = await buscaCategoriaTicker(symbol);
    let ul = document.getElementById("listaOpenCategTickers");

    ul.innerHTML = ""; // limpa a lista
    ul.style.position = "absolute";

    for (let x = 0; x < tickersPorCategoria.length; x++) {
        let li = document.createElement("li");
        li.innerText = `${tickersPorCategoria[x].name} & ${tickersPorCategoria[x].code}`;
        li.id = tickersPorCategoria[x].code;
        ul.appendChild(li);
    } 
}


export async function buscaCategoriaTicker(nome) {
    let listaTickers = await TickersB3();

    return listaTickers
        .filter(x => x.especPapel === nome)
        .map(x => ({
            name: x.nomeCurto,
            code: x.codNeg,
            symbol: nome
        }));
}

export default CategoriasTickers;