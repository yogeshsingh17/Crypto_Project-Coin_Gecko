//Container layer

import MyLoader from '../PageLoader/PageLoader';
import Alert from "../Alert/Alert";
import CoinInfo from "./CoinInfo";
import useFetchCoinHistory from '../../hooks/useFetchCoinHistory';

function CoinInfoContainer( { coinId } ){

    const {historicData, isLoading, isError, days, setDays, setCoinInterval, currency} = useFetchCoinHistory(coinId);

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