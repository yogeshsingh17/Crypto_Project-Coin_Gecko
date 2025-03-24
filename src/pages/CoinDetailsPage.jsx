import { useParams } from "react-router-dom";

function CoinDetailsPage(){

    const {coinId} = useParams();           /*useParam is a hook provided by react router to allow us to access
                                              the dynamic URL. */

    return (
        <>
            <div>
                <h1>Coin Details Page {coinId}</h1>
            </div>
        </>
    )
}

export default CoinDetailsPage;