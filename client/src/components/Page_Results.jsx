import React from 'react';
import { useParams } from "react-router-dom";

const Page_Results = () => {

    // const { ticker } = useParams(ticker)
    const url = window.location.search;
    const sp = new URLSearchParams(url)
    const ticker = sp.get('search/ticker')

    return (
        <div>
            <h1> results for {ticker} </h1>
        </div>
    );
};

export default Page_Results;