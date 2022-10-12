import '../style/Home.css';
import { useState } from "react";

function Home() {

    const [nasdaqPrice, setNasdaqPrice] = useState(1)

    return (
        <div className="Home">

            <section className='head'>
                <h1>NASDAQ Stock Price Prediction</h1>
            </section>

            <section className='body'>

                <h3>Nasdaq Price Actual price : <span>{nasdaqPrice}</span> </h3>

                <form action="/search">
                    <h3>Search Form</h3>
                    <div id='searchbar'>
                        <input type="text" name="search" id="search" />
                        <button><img src="src\assets\search.png" alt="" /></button>
                    </div>

                    <div>

                    </div>

                </form>
            </section>

        </div>
    )
}

export default Home

