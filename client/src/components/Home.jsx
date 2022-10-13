import '../style/Home.css';
import { useState } from "react";
import axios from 'axios';

function Home() {

    const [nasdaqPrice, setNasdaqPrice] = useState(1)

    let getNasdaqPrice = async () => {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/quote-short/AMD?apikey=b6aa9ba57728f879b363fd2c3c92cbdd').catch((err) => {
            console.log(err);
        })
        setNasdaqPrice(response.data[0].price)
    }

    return (
        <div className="Home">

            <section className='head'>
                <h1>NASDAQ Stock Price Prediction</h1>
            </section>

            <section className='body'>

                <h3>AMD Price Actual price : <span>{nasdaqPrice}</span> </h3>
                <button onClick={getNasdaqPrice}>Refresh</button>

                <form action="/" method='get'>
                    <h3>Search Form</h3>
                    <div id='searchbar'>
                        <input type="text" name="" id="search" />
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

