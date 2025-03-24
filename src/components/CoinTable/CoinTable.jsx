import { useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
// import { CurrencyContext } from "../../context/CurrencyContext";
import currencyStore from '../../state/store'
import { useNavigate } from "react-router-dom";

function CoinTable(){

    // const { currency } = useContext(CurrencyContext);

    const { currency } = currencyStore();

    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const {data, isLoading, isError, error, isFetching} = useQuery({
        queryKey: ["coins", page, currency],  // queryKey must be an array inside an object
        queryFn: () => fetchCoinData(page, currency),  // queryFn inside the object
        retry : 2,
        retryDelay : 1000,
        cacheTime : 1000 * 60 * 2,                  /* This will keep the data in cache memory to retrice the 
                                                       data at high speed as an optimistic update for a better 
                                                       user experience. */
        staleTime : 1000 * 60 * 2,                  /* We use this property to keep the data fresh for the
                                                       given time, by doing this we will not make the API call 
                                                       again and again for the same cached data. */
    });

    if(isError)
    {
        return <div>Error : {error.message}</div>
    }
    if(isFetching)
    {
        return <div>Fetching data</div>
    }

    function handleCoinRedirect(id){
        navigate(`/details/${id}`)
    }

    return (
        <>
            <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
                <div className="flex items-center justify-center w-full px-2 py-4 font-semibold text-black bg-yellow-400">
                    {/* Header of the table */}
                    <div className="basis-[35%]">
                        Coin
                    </div>
                    <div className="basis-[25%]">
                        Price
                    </div>
                    <div className="basis-[20%]">
                        24h change
                    </div>
                    <div className="basis-[20%]">
                        Market Cap
                    </div>
                </div>
                <div className="flex flex-col w-[80vw] mx-auto">
                    {isLoading && <div>Loading...</div>}
                    {data && data.map((coin) => {
                        return(
                            <div onClick={() => handleCoinRedirect(coin.id)} key={coin.id} className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent cursor-pointer">
                                <div className="flex items-center justify-start gap-3 basis-[35%]">
                                    
                                    <div className="h-[5rem] w-[5rem]">
                                        <img src={coin.image} className="w-full h-full" />
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="text-3xl">
                                            {coin.name}
                                        </div>
                                        <div className="text-xl">
                                            {coin.symbol}
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="basis-[25%]">
                                    {coin.current_price}
                                </div>

                                <div className="basis-[20%]">
                                    {coin.high_24h}
                                </div>

                                <div className="basis-[20%]">
                                    {coin.market_cap}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex items-center justify-center gap-6 m-3">
                <button 
                    disabled = {page===1}
                    onClick={() => setPage(page - 1)}
                    className="text-2xl text-white btn btn-primary btn-wide"
                >
                    Prev
                </button>
                
                <button 
                    onClick={() => setPage(page + 1)}
                    className="text-2xl text-white btn btn-secondary btn-wide"
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default CoinTable;