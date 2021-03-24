import React from 'react'
import CryptoList from './CryptoList'


function Crypto({ filteredCrypto }) {
    return (
        <>
            {filteredCrypto.map(crypto => {
                return (
                    <CryptoList
                        key = {crypto.id} 
                        id = {crypto.id}
                        name = {crypto.name}
                        image = {crypto.image}
                        symbol = {crypto.symbol}
                        price = {crypto.current_price}
                        percentChange = {crypto.price_change_percentage_24h}
                        marketCap = {crypto.market_cap}
                    />
                )
            })}
        </>
    )
}

export default Crypto
