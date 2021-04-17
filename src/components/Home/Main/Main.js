import React from 'react';
import api from '../../../api/Main/api';
import Amazon from '../HeroCards/amazon';
import Facebook from '../HeroCards/facebook';
import Google from '../HeroCards/google';
import './Main.css';
import Draggable from 'react-draggable'; 

/**
* @author
* @function View
**/

const Main = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    let [ticker, setTicker] = React.useState('')
    let [message, setMessage] = React.useState('')
    let [companyname,setCompanyname] = React.useState('')
    let [symbol,setSymbol] = React.useState('')
    let [marketcap,setMarketcap] = React.useState('')
    let [currentprice,setCurrentprice] = React.useState('')
    let [isSent,setIsSent] = React.useState('')
    // fetches stock data based on parameters
    const fetchData = (e) => {
        e.preventDefault()
        setMessage('Loading...')
        api.stockOverview(ticker)               
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
    const savedata = e => {
        e.preventDefault()
        fetch(`http://localhost:7800/savedata`, {
          method: 'POST',
          body: JSON.stringify({companyname,symbol,marketcap,currentprice }),
        }).then(()=>setIsSent(true))
        .catch(() => alert("There was an error, please try again"))
      }
    return (
        <div
            style={{
                //background: '#EEE',
                
                padding: '5%',
                fontFamily: '"Lucida Console", Monaco, monospace'
            }}>
            <h1
                style={{
                    background: 'black',
                    color: 'white',
                    padding: '1rem',
                    display: 'inline-block'
                }}>Stock Market App</h1>
                <br/>
                <div className="row">
                    <Draggable>
                        <div className="card col-md-4">
                            <Google />
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="card col-md-4">
                            <Facebook />
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="card col-md-4">
                            <Amazon />
                        </div>    
                    </Draggable>
                   
                    
                </div>
            
            <h2 style={{background:"#EEE",width:"350px"}}>Analyze Stock Data</h2>
            <form onSubmit={fetchData}>
                <fieldset>
                    <legend style={{background:"#EEE",width:"300px"}}>Search Stock Market</legend>
                    <label htmlFor="ticker" style={{background:"#EEE",width:"200px"}}>Enter stock ticker
                    &nbsp;&nbsp;&nbsp;&nbsp; <input
                            required
                            name="ticker"
                            id="ticker"
                            type='text'
                            placeholder='SPY'
                            value={ticker}
                            onChange={(e) => setTicker(e.target.value)}
                        />
                    </label>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
            <p style={{background:"#EEE"}}>{message}</p>
            <h3 style={{background:"#EEE",width:"180px"}}>Symbol: {responseData ? responseData.symbol : ''}</h3>
            <p style={{background:"#EEE",width:'200px'}}>Search Company Details</p>
            <div className="panel-body" style={{background:"#EEE",width:"600px"}}>
               <table onSubmit={savedata}>
                   <thead>
                        <tr>
                            <th>Company Name</th>&nbsp;&nbsp;&nbsp;&nbsp;
                            <th>Stock Symbol</th>&nbsp;&nbsp;&nbsp;&nbsp;
                            <th >Market Cap</th>&nbsp;&nbsp;&nbsp;&nbsp;
                            <th >Current Price</th>&nbsp;&nbsp;&nbsp;&nbsp;
                            
                            
                        </tr>
                   </thead>
                   <tbody>
                        <tr>
                            <td name="companyname" value={responseData.companyname} onChange={e => setCompanyname(e.target.value)}>{responseData.companyname}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td name="symbol" value={responseData.symbol} onChange={e => setSymbol(e.target.value)}>{responseData.symbol}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td name="marketcap" value={responseData.marketcap} onChange={e => setMarketcap(e.target.value)}>{responseData.marketcap}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td name="currentprice" value={responseData.currentprice} onChange={e => setCurrentprice(e.target.value)}>${responseData.currentprice}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><button>Save Data</button></td>
                        </tr>
                   </tbody>
                   
               </table>
            </div>
        </div>
        
    )
}
export default Main