import Chart from 'chart.js';
import React, { useEffect, useRef, useState } from 'react'
import { chartOptions } from './chartOptions';

function CryptoChart({cryptoData}) {

    const chartRef = useRef();
    const {day, week, month, year, details} = cryptoData;
    const [timeFormat, setTimeFormat] = useState("24h");

    const determineTimeFormat = () => {
        switch (timeFormat) {
            case "24h":
                return day;
            case "7d":
                return week;
            case "30d":
                return month;
            case "365d":
                return year;  
            default:
                return day;
        }
    };

    useEffect(() => {
        if (chartRef && chartRef.current && details){
            new Chart(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: `${details.name} Price (in $)`,
                        backgroundColor: 'rgb(85, 85, 85)',
                        borderColor: 'rgb(218, 165, 32)',
                        data: determineTimeFormat(),
                        borderWidth: 1.5, 
                        pointRadius: 0
                    }]
                },
                options: {
                    ...chartOptions
                }
            });
        }
    })


    return (
        <div>
            <div className="chart_canvas">
                <canvas ref={chartRef} id="myChart" width="250" height="250"></canvas>
            </div>
            <div className="chart-button mt-1">
                <button onClick={() => setTimeFormat("24h")} className="btn btn-outline-secondary btn-sm">24h</button>
                <button onClick={() => setTimeFormat("7d")} className="btn btn-outline-secondary btn-sm mx-1">7d</button>
                <button onClick={() => setTimeFormat("30d")} className="btn btn-outline-secondary btn-sm">30d</button>
                <button onClick={() => setTimeFormat("365d")} className="btn btn-outline-secondary btn-sm">1y</button>
            </div>
        </div>
    )
}

export default CryptoChart
