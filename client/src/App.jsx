import './App.css';
import { useState } from "react";

function App() {

  const [nasdaqPrice, setNasdaqPrice] = useState(1)

  return (
    <div className="App">

      <section className='head'>
        <h1>NASDAQ Stock Price Prediction</h1>
      </section>

      <section className='body'>

        <h3>Nasdaq Price Actual price : <span>{nasdaqPrice}</span> </h3>

        <form action="">
          <h3>Search Form</h3>
          <div id='searchbar'>
            <input type="search" name="stock" id="search" />
            <button><img src="src\assets\search.png" alt="" /></button>
          </div>



        </form>
      </section>

    </div>
  )
}

export default App

