import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css'
import Crypto from './components/Crypto'
import HeadSection from './components/HeadSection'
import CryptoData from './components/CryptoData'


function App() {

  const [currencies, setCurrencies] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    const apiCall = async () => {

      setIsLoading(true);

      await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
      .then(response => setCurrencies(response.data))
      .catch(err => console.error(err))

      setIsLoading(false)
    }

    apiCall()

  },[])

  const allCrypto = currencies.filter(crypto => crypto.name.toLowerCase().startsWith(search.toLowerCase())) 

  const handleSearch = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  }

  // const handleSort = () => { 

  //   currencies.sort((a, b) => {
  //     if (a.id < b.id) {
  //       return -1;
  //       }
  //     if (a.id > b.id) {
  //       return 1;
  //       }
  //     return 0;
  //   });
  // }

  return (
    <div>
      { 
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <Router>
            <div className="App">
              <Switch>
                <Route path="/:id" exact component = {CryptoData} />
                <Route path="/">
                  <HeadSection type="text" placeholder="Search" onChange={handleSearch} />
                  { search.valueOf().trim() !== "" ? <Crypto filteredCrypto={allCrypto} /> : <Crypto filteredCrypto={currencies} />}
                </Route>
              </Switch>
            </div>
          </Router>
        )
      }
    </div>
  );
}

export default App;
