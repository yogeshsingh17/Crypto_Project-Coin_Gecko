import { useState } from "react";
import { useEffect } from "react";

function CoinTable(){

    const [count, setCount] = useState(0);

    const [flag, setFlag] = useState(false);

    async function download(){
        const response = await fetch('https://api.coingecko.com/api/v3/ping');

        console.log(response);
        
        const result = await response.json();

        console.log(result);
    }

    useEffect(() => {
        /* Because the dependency array is empty, this effect will only run once when the component mounts. */
        download();
    }, [])

    useEffect(() => {
        /* Because the dependency array is count, this effect will only run when the count changes/re-renders. */
        download();
    }, [count])

    useEffect(() => {
        /* Because the dependency array is flag, this effect will only run when the flag changes/re-renders. */
        console.log("Flag changed");
    }, [flag])
    
    useEffect(() => {
        /* Because the dependency array is missing, this effect will run everytime any change/re-render happens in the component. */
        console.log("Everytime re-render happens this effect will be called.")
    })

    useEffect(() => {
        /* Because the dependency array is count and flag, this effect will only run when the count or flag changes/re-renders. */
        console.log("Effect to call both count and flag everytime re-render happens.");
    }, [count, flag])

    return (
        <>
            <div>CoinTable</div>
            {count}
            <br />
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br />
            {flag && <div>Flag is true</div>}
            <br />
            <button onClick={() => setFlag(!flag)}>Toggle</button>
        </>
    )
}

export default CoinTable;