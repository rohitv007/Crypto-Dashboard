import React from 'react'

function CryptoDetails({cryptoData}) {

    const { details } = cryptoData;
    var flag_details = false;

    if (details) {
        flag_details = !flag_details
        var {name, current_price, high_24h, low_24h, market_cap, total_volume, price_change_percentage_24h } = details;
    }
    // console.log(details)

    return (
        <div>
            {
                (flag_details) ? (
                    <div className="crypto_details">
                        <ul style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center'}}>
                            <li>{name}</li>
                            <li>${current_price.toLocaleString()}</li>
                            <li>${high_24h.toLocaleString()}</li>
                            <li>${low_24h.toLocaleString()}</li>
                            <li>${market_cap.toLocaleString()}</li>
                            <li>{total_volume.toLocaleString()}</li>
                            <li>{price_change_percentage_24h.toFixed(2)}%</li>
                        </ul>
                    </div>
                ) : (
                    <h1>No data to display</h1>
                )

            }
        </div>
    )
}

export default CryptoDetails
