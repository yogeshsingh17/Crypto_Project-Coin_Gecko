//Container layer

import { useQuery } from "@tanstack/react-query";
import currencyStore from '../../state/store'
import { useState } from "react";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import MyLoader from '../PageLoader/PageLoader';
import Alert from "../Alert/Alert";
import CoinInfo from "./CoinInfo";

function CoinInfoContainer( { coinId } ){
    
    const { currency } = currencyStore();

    const [days, setDays] = useState(7);

    const [interval, setCoinInterval] = useState('daily');

    const {data : historicData, isLoading, isError} = useQuery({
        queryKey : ['coinHistoricData', coinId, currency, days, interval],
        queryFn : () => fetchCoinHistoricData(coinId, interval, days, currency),
        catchTime : 1000*60*2,
        staleTime : 1000*60*2,
    });

    if(isLoading)
    {
        return <MyLoader />
    }
    if(isError)
    {
        <div>
            <Alert message="Error fetching data" type="error" />
        </div>
    }
    
    return (
        <>
            <CoinInfo 
                historicData = {historicData} 
                setDays={setDays} 
                setCoinInterval={setCoinInterval}
                days={days}
                currency={currency}
            />
        </>
    )
}

export default CoinInfoContainer;