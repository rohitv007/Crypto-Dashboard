import React from 'react'
import '../css/headsection.css'

function HeadSection({...rest}) {

    return (
        <div>
            <div className="search">
                <input className="searchBar" {...rest} />
            </div>
            <div className="header">
                <div className="head_row">
                <div className="head">
                    <h4 className="curr">Currency</h4>
                    <h4 className="price">Price (in&nbsp;$)</h4>
                    <h4 className="percent">Percent</h4>
                    <h4 className="mktcap">Mkt Cap (in&nbsp;$)</h4>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HeadSection
