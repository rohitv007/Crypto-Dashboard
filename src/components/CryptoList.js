import React from 'react'
import { Link } from 'react-router-dom'
import '../css/cryptolist.css'


function CryptoList({ id, name, image, symbol, price, percentChange, marketCap }) {

    return (
        <div className='crypto_container'>
            <div className='crypto_row'>
                <Link to={id}>
                    <div className="crypto">
                        <div className="crypto_name">
                            <img className='crypto_img' src={image} alt={name} height={40} width={40} />
                            &nbsp;
                            <h4 className='crypto_curr'>{name} ({symbol.toUpperCase()})</h4>
                        </div>
                        <div className='crypto_price'>
                            <h4>${price.toLocaleString()}</h4>
                        </div>
                        <div className="crypto_percent">
                            {
                                (percentChange < 0 ? <h4 className="red">{percentChange.toFixed(2)}%&nbsp;&#9660;</h4> : <h4 className="green">{percentChange.toFixed(2)}%&nbsp;&#9650;</h4>)
                            }
                        </div>
                        <div className='crypto_cap'>
                            <h4>${marketCap.toLocaleString()}</h4>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CryptoList
