//Presenter layer

import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto"
import { chartDays } from "../../helpers/constants";

Chart.register(CategoryScale);

function CoinInfo({ historicData, setDays, setCoinInterval, days, currency }){
    
    if(!historicData){
        return <Alert message="No historic data available" type="info"/>
    }

    function handleDayChange(e){
        console.log(Number(e.target.value));
        const daysSelected = e.target.value;
        if(daysSelected == 1){  
            setCoinInterval?.('');
        }
        else{
            setCoinInterval?.('daily');
        }
        setDays?.(Number(e.target.value));
    }
    
    return (
        <div 
         className="flex flex-col items-center justify-center w-full p-6 mt-6"
        >
            <div className="h-[400px] w-full">
                <Line 
                    data={{
                        labels: historicData.prices.map(coinPrice => {
                            let date = new Date(coinPrice[0]);       //Converting UNIX timestamp to date.
                            let time = date?.getHours() > 12 ? `${date?.getHours() - 12}:${date?.getMinutes()} PM` : 
                            `${date?.getHours()}:${date?.getMinutes()} AM`;
                            return days === 1 ? time : date.toLocaleDateString();
                        }),
                        datasets: [                     //The dataset array takes an object.
                            {
                                label: `Price (Past ${days} ${days === 1 ? 'Day' : 'Days'}) in ${currency?.toUpperCase()}`,
                                data: historicData.prices.map(coinPrice => coinPrice[1])
                            }
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        elements: {
                            point: {
                                radius: 0,
                            }
                        }
                    }}
                />
            </div>
            <div className="flex justify-center w-full mt-5">
                <select 
                    defaultValue={days} 
                    className="select select-primary"
                    onChange={handleDayChange}
                >
                    {chartDays.map((day, index) => {
                        return (
                            <option selected={days == day.value} key={index} value={day.value} > {day.label} </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default CoinInfo;