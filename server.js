const TradingView = require('./TradingView-API/main');
const http = require('http');
const { db } = require('./firebase-config');

console.log('Starting Forex API Server...');

let client = null;
let charts = {};

const pairs = [
  'FX_IDC:EURUSD', 'FX_IDC:GBPUSD', 'FX_IDC:USDJPY', 'FX_IDC:AUDUSD',
  'FX_IDC:USDCAD', 'FX_IDC:USDCHF', 'FX_IDC:NZDUSD', 'FX_IDC:EURGBP',
  'FX_IDC:EURJPY', 'FX_IDC:GBPJPY', 'FX_IDC:XAUUSD', 'FX_IDC:XAGUSD',
  'BINANCE:BTCUSDT', 'BINANCE:ETHUSDT', 'BINANCE:BNBUSDT', 'BINANCE:ADAUSDT',
  'BINANCE:XRPUSDT', 'BINANCE:SOLUSDT', 'BINANCE:DOGEUSDT', 'BINANCE:MATICUSDT',
  'BINANCE:LTCUSDT', 'BINANCE:LINKUSDT', 'NASDAQ:AAPL', 'NASDAQ:MSFT',
  'NASDAQ:GOOGL', 'NASDAQ:AMZN', 'NASDAQ:TSLA', 'NASDAQ:META',
  'NASDAQ:NVDA', 'NASDAQ:NFLX', 'TVC:SPX500', 'TVC:DJI', 'TVC:IXIC'
];

function startStreaming() {
  client = new TradingView.Client();
  let connectedPairs = 0;

  // Error handler for client
  client.onError = (err) => {
    console.log('Client error:', err.message);
  };

  pairs.forEach((pair) => {
    try {
      const chart = new client.Session.Chart();
      chart.setMarket(pair, { timeframe: '1' });

      chart.onUpdate(() => {
        try {
          if (chart.periods && chart.periods[0]) {
            const pairName = pair.replace(/^(FX_IDC:|BINANCE:|NASDAQ:|NYSE:|TVC:|COMEX:|COINBASE:|KRAKEN:)/, '');
            const period = chart.periods[0];
            
            const data = {
              pair: pairName,
              price: period.close || 0,
              open: period.open || 0,
              high: period.high || 0,
              low: period.low || 0,
              time: new Date().toISOString()
            };
            
            if (data.price && data.open && data.high && data.low) {
              db.ref(`prices/${pairName}`).set(data).catch(err => 
                console.log(`Firebase error for ${pairName}:`, err.message)
              );
            }
          }
        } catch (err) {
          console.log(`Update error for ${pair}:`, err.message);
        }
      });

      chart.onError((err) => {
        console.log(`Error with ${pair}:`, err);
      });

      charts[pair] = chart;
      connectedPairs++;
      console.log(`Connected to ${pair} (${connectedPairs}/${pairs.length})`);
      
    } catch (error) {
      console.log(`Failed to connect to ${pair}:`, error.message);
    }
  });

  console.log(`Successfully connected to ${connectedPairs} pairs`);
}

// Restart on crash
process.on('uncaughtException', (err) => {
  console.log('Uncaught exception:', err.message);
  console.log('Restarting in 5 seconds...');
  setTimeout(() => {
    if (client) {
      Object.values(charts).forEach(chart => {
        try { chart.delete(); } catch(e) {}
      });
      try { client.end(); } catch(e) {}
    }
    charts = {};
    startStreaming();
  }, 5000);
});

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.url === '/' || req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      status: 'running',
      pairs: pairs.length,
      message: 'Forex API Server is running'
    }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on port ${process.env.PORT || 3001}`);
  startStreaming();
});

setInterval(() => {
  console.log(`Server alive - streaming data...`);
}, 300000);
