// Custom hook for writing logic of CoinDetailsPage.jsx file.

import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import currencyStore from '../state/store'

function useFetchCoin(coinId){

    const { currency } = currencyStore();   /*Using curencyStore from store to get the updated currency in the UI*/

    const {isError, isLoading, data: coin} = useQuery({
        queryKey: ["coin", coinId],
        queryFn: () => fetchCoinDetails(coinId),
        cacheTime: 1000*60*2,
        staleTime: 1000*60*2,
    }); 

    return {
        currency,
        isError,
        isLoading,
        coin
    }
}

export default useFetchCoin;