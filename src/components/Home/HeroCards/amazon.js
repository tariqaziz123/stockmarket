import React from 'react'
import api from '../../../api/Hero/amazonapi'
import AmazonImg from '../../../Images/Amazon_icon.png';

/**
* @author
* @function 
**/

const Amazon = () => {
    let [responseData, setResponseData] = React.useState('')
    let [ticker, setTicker] = React.useState('')
    let [message, setMessage] = React.useState('')
    // fetches stock data based on parameters
    const fetchData = (e) => {
        e.preventDefault()
        setMessage('Loading...')
        api.amazonOverview(ticker)               
        .then((response)=>{
            setResponseData(response.data)
            setMessage('')
            console.log(response)
        })
        .catch((error) => {
            setMessage('Error')
            console.log(error)
        })
    }
  return(
    <div
            style={{
                background: '#EEE',
                padding: '5%',
                fontFamily: '"Lucida Console", Monaco, monospace'
            }}>
          <form onSubmit={fetchData}>
                <fieldset>
                    <img src={AmazonImg} type="img/jpg" style={{height:'60px'}}/>
                    <legend>Amazon Stock Market Details</legend>
                    <p>{message}</p>
                    <label htmlFor="ticker" name="ticker" id="ticker" value={ticker} onChange={(e) => setTicker(e.target.value)}>Amazon
                    </label>
                    &nbsp;<button className="btn btn-success">Fetch</button>
                    
                </fieldset>
            </form>
                <div>Company Name: {responseData.companyname}</div>
                <div>Stock Symbol: {responseData.symbol}</div>
                <div>Market Cap: {responseData.marketcap}</div>
                <div>Current Price: ${responseData.currentprice}</div>
           
           
    </div>
   )

 }

export default Amazon