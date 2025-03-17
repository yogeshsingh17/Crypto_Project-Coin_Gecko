import { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable(){

    const [page, setPage] = useState(1);
    const {data, isLoading, isError, error, isFetching} = useQuery({
        queryKey: ["coins", page],  // queryKey must be an array inside an object
        queryFn: () => fetchCoinData(page, "usd"),  // queryFn inside the object
        retry : 2,
        retryDelay : 1000,
        cacheTime : 1000 * 60 * 2,
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    if(isLoading)
    {
        return <div>Loading...</div>
    }
    if(isError)
    {
        return <div>Error : {error.message}</div>
    }

    return (
        <>
            <div>
                CoinTable
                
                <br />
                
                <button className="mt-2 mr-2" onClick={() => setPage(page + 1)}>Click</button>
                
                {page}
            </div>
        </>
    )
}

export default CoinTable;