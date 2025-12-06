import { useEffect, useState } from "react";
import { getGlobalQuote } from './componentes/services/alphaService.js';
import { TickersB3, tratarTickersB3 } from "./componentes/services/B3_data.js";
import CategoriasTickers from "./componentes/categorias/tickers.js";
import kirito_image from "./kirito_image.jpg";

import './index.css';

function App() {

  useEffect(async () => {
    console.log("ações da B3:");
    let dadosB3 = await TickersB3();

    for (let index = 0; index < 5; index++) {
      console.log(`Nome: ${dadosB3[index]["nomeCurto"]} e codigo: ${dadosB3[index]["codNeg"]}`);
    }
    console.log(dadosB3.length)
    let empresasListadasB3 = await tratarTickersB3("name");
    console.log(empresasListadasB3.length);
    


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
    </>
  );
}

export default App;
