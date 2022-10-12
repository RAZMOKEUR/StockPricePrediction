import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Stock_Page = () => {

    const { ticker } = useParams();
    const [priceHistory, setPriceHistory] = useState(1)
    // const [pricePrediction, setPricePrediction] = useState(null)

    const getPriceHistory = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/prices/${ticker}`).catch((error) => {
            console.log(error);
        });
        console.log(res.data);
        setPriceHistory(res.data)

    }

    useEffect(() => {
        getPriceHistory()

    }, [])

    const labels = []
    const data = []



    return (

        <div>
            <h1>Stock Page for {ticker}</h1>
            <button onClick={getPriceHistory}>get price </button>

            {/* <h2> price : {priceHistory}</h2>
            <button onClick={getPrediction}>get prediction </button>
            <h2> Prediction : {pricePrediction}</h2> */}


        </div>
    );
};

export default Stock_Page;