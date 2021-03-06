import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import axios from 'axios'
import '../css/cryptodata.css'
import CryptoChart from './CryptoChart'
import { Puff } from '@agney/react-loading';
import CryptoDetails from './CryptoDetails'


function CryptoData() {

    let { id } = useParams();
    let market_url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd`;
    let details_url = `https://api.coingecko.com/api/v3/coins/markets`
    const [timeprice, setTimePrice] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    const formatTimePrice = data => {
        return data.map(el => {
            return {
                x: el[0],
                y: el[1].toFixed(2)
            }
        })
    }

    useEffect(() => {
        
        const dataApiCall = async () => {

            setIsLoading(true);

            const [ day, week, month, year, details ] = await Promise.all([
                axios.get(market_url, {
                    params: {
                        days: "1"
                    }
                }),
                axios.get(market_url, {
                    params: {
                        days: "7"
                    }
                }),
                axios.get(market_url, {
                    params: {
                        days: "30"
                    }
                }),
                axios.get(market_url, {
                    params: {
                        days: "365"
                    }
                }),
                axios.get(details_url, {
                    params: {
                        ids: id,
                        vs_currency: "usd"
                    }
                })
            ])
            
            setTimePrice({
                day: formatTimePrice(day.data.prices),
                week: formatTimePrice(week.data.prices),
                month: formatTimePrice(month.data.prices),
                year: formatTimePrice(year.data.prices),
                details: details.data[0]
            })
            setIsLoading(false)
        }

        dataApiCall()

        return () => {
            setTimePrice({}); 
            // to resolve console red warning 'Can't perform a React state update...' 
            // by using a CLEANUP FUNCTION i.e. setting back initial states which were used inside Promise
            // "To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function"
        };

    }, [market_url, details_url, id])

    // console.log(timeprice);

    return (  
        <div>
            {
                isLoading ? (
                    <div className="page_loader">
                        <Puff width="80"/>
                    </div>
                ) : (
                    <div className="singlecrypto_container">
                        <div className="top">
                            <Link to="/" className="back-btn">
                                <IoIosArrowBack size={30} style={{fill: 'rgb(218, 165, 32)'}} />
                                <h3>HOME</h3>
                            </Link>
                        </div>
                        <div className="singlecrypto">
                            <CryptoChart cryptoData={timeprice} />
                            <CryptoDetails cryptoData={timeprice} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CryptoData
