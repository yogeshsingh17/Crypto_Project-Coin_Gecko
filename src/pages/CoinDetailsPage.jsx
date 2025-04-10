import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import MyLoader from "../components/PageLoader/PageLoader";
import CoinInfoContainer from "../components/CoinInfo/CoinInfoContainer";
import useFetchCoin from "../hooks/useFetchCoin";

function CoinDetailsPage(){

    const { coinId } = useParams();

    const {isLoading, isError, coin, currency} = useFetchCoin(coinId);

    if(isLoading){
        return <MyLoader/>
    }
    if(isError){
        return <div>Error : console.error(error)</div>
    }

    return (
        <>
            <div className="flex flex-col md:flex-row">        {/* Here we are designing mobibe first design */}
                <div className="flex flex-col items-center w-full mt-6 border-r-2 border-gray-500 md:w-1/3 md:mt-0">
                    <img 
                        src={coin?.image.large} 
                        alt={coin?.name}
                        className="mb-5 h-52"
                    />
                    <h1 className="mb-5 text-4xl font-bold">
                        {coin?.name}
                    </h1>
                    <p className="w-full px-6 py-4 text-justify">
                        {parse(coin?.description?.en)}
                    </p>
                    <div className="flex flex-col w-full md:flex-row md:justify-around">
                        <div className="flex items-center mb-4 md:mb-0">
                            <h2 className="text-xl font-bold">
                                Rank
                            </h2>
                            <span className="ml-3 text-xl">
                                {coin?.market_cap_rank}
                            </span>
                        </div>
                        
                        <div className="flex items-center mb-4 md:mb-0">
                            <h2 className="text-xl font-bold text-yellow-400">
                                Current Price
                            </h2>
                            <span className="ml-3 text-xl">
                                {coin?.market_data?.current_price[currency]}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3">
                    <h1>
                        <CoinInfoContainer coinId={coinId}/>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default CoinDetailsPage;