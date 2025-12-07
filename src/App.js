import { useEffect, useState } from "react";
import { getGlobalQuote } from './componentes/services/alphaService.js';
import CategoriasTickers from "./componentes/categorias/tickers.js";
import kirito_image from "./kirito_image.jpg";

import './index.css';

function App() {

  useEffect(async () => {

    /*
      async function testarAPI() {
      const resultado = await getGlobalQuote("IBM", 5);
      console.log("Resultado da API:", resultado);

      const series = resultado["Time Series (5min)"];
      const resultados = Object.keys(series);           // pega todas as resultados
      const ultimaresultado = resultados[0];                 // primeira é a mais recente
      const ultimaCotacao = series[ultimaresultado];

      console.log("Última atualização:", ultimaresultado);
      console.log("Abertura", ultimaCotacao["1. open"]);
      console.log("Fechamento", ultimaCotacao["4. close"]);
      console.log("Máxima", ultimaCotacao["2. high"]);
      console.log("Mínima", ultimaCotacao["3. low"]);
      console.log("Volume", ultimaCotacao["5. volume"]);
      
    }

    testarAPI();*/
  }, []);

  return (
    <>
      <header> 
        <img src={kirito_image} id="logo" /> 
        <h1>Kirito Money</h1>
      </header>
      <p>Abra o console para ver os dados recebidos.</p>
      <CategoriasTickers />
      <section className="containerOpenCategoriaTickers">
        <ul id="listaOpenCategTickers"></ul>
      </section>
    </>
  );
}

export default App;
