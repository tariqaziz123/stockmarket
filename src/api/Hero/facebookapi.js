import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://alpha-vantage.p.rapidapi.com',
    headers: {
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': '65842600b4msh5c4c168fb5861b2p158c78jsn639b1bcfdc6b'
    },
     transformResponse: [function (data) {
            // Do whatever you want to transform the data
            console.log('Transforming data...')
            const json = JSON.parse(data)
            //const dates = Object.keys(json['Time Series (Daily)']).reverse()
            // Construct response data for chart input
            /*const closePrices = dates.map(date => date = {
                date,
                close: Number(json['Time Series (Daily)'][date]['4. close'])
            })*/
            const companyname = json['Name']
            const symbol = json['Symbol']
            const marketcap = json["MarketCapitalization"]
            const currentprice = json['AnalystTargetPrice']
           // const refreshed = json['Meta Data']['3. Last Refreshed']
            data = {
                companyname,
                symbol,
                marketcap,
                currentprice
            }
            return data;
        }],
});

export default {
    facebookOverview: (symbol) =>
    instance({
        'method':'GET',
        'url':'/query',
        'params': {
            'outputsize':'compact',
            'datatype':'json',
            'function':'OVERVIEW',
            'symbol':'FB',
        },
    })
}