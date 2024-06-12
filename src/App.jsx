import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TableData from './components/TableData'
import Constants from './components/Constants'
import Loader from './components/Loader'
import Card from './components/Card'

const App = () => {
  const [loader, setLoader] = useState(false)
  const [cardData, setData] = useState({})
  const [tableData, setTableData] = useState([])
  const [message, setMessage] = useState('')
  const search_api = params => {
    params.length == 0
      ? setMessage('Enter Search Query')
      : api_call_current(params)
  }

  const search_api_5 = params => {
    params.length == 0 ? setMessage('Enter Search Query') : api_call_5(params)
  }

  const callbackSet = data => {
    if ('error' in data) {
      setData({})
      setMessage(data.error.message)
      setLoader(false)
    } else {
      setData(data)
      setMessage('')
      setLoader(false)
    }
  }

  const callbackSet5 = data => {
    if ('error' in data) {
      setTableData([])
      setMessage(data.error.message)
      setLoader(false)
    } else if (Object.keys(data).length === 0) {
      setTableData([])
      setMessage('Try Again Something Went Wrong')
      setLoader(false)
    } else {
      setTableData([data.forecast.forecastday, data.location])
      setMessage('')
      setLoader(false)
    }
  }

  const api_call_current = params => {
    setTableData([])
    setLoader(true)
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${Constants.API_KEY}&q=${params}&aqi=no`
    ).then(data => {
      let currentData = data.json()
      currentData.then(res => {
        callbackSet(res)
      })
    })
  }

  const api_call_5 = params => {
    setData({})
    setLoader(true)
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${Constants.API_KEY}&q=${params}&days=5&aqi=no`
    ).then(data => {
      let currentData = data.json()
      currentData.then(res => {
        callbackSet5(res)
      })
    })
  }

  return (
    <>
      <Header search_api={search_api} search_api_5={search_api_5} />
      <TableData tableData={tableData} />
      <Card cardData={cardData} />
      {loader === true ? <Loader /> : <Hero message={message} />}
    </>
  )
}

export default App
