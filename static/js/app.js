var cryptoCompareAPI = "https://www.cryptocompare.com";
var coinMarketURL = "https://api.coinmarketcap.com";
var updateInterval = 6 * 1000;

var app = new Vue({
  el: "#app",
  data: {
    coins: [],
    coinData: {}
  },
  methods: {

    getCoinData: function() {
      var self = this;

      
      axios.get(cryptoCompareAPI + "/api/data/coinlist")
        .then((resp) => {
          this.coinData = resp.data.Data;
          this.getCoins();
        })
        .catch((err) => {
          this.getCoins();
          console.log(err);
        });
    },

    getCoins: function() {
      var self = this;
      axios.get(coinMarketURL + "/v1/ticker/?limit=10")
        .then((resp) => {
          this.coins = resp.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    getCoinImage: function(symbol) {
      symbol = (symbol === "MIOTA" ? "IOT" : symbol);
      symbol = (symbol === "VERI" ? "VRM" : symbol);
    },

    getColor: (num) => {
      return num > 0 ? "color:green;" : "color:red;";
    },
  },
  created: function() {
    this.getCoinData();
  }
});

console.log(document.querySelectorAll('holdings')[0].value)


setInterval(() =>{

  app.getCoinData();

}, updateInterval);
