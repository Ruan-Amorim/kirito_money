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
                    <li key={ticker}>{ticker}</li>
                ))}
            </ul>
        </section>
    );
}

export default CategoriasTickers;
