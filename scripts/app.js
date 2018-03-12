var cryptoCompareAPI = "https://www.cryptocompare.com";
var coinMarketURL = "https://api.coinmarketcap.com";
var updateInterval = 60 * 1000;

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




setInterval(() =>{

  app.getCoinData();

}, updateInterval);

//click event for opening and creating a new DIV with inner elements
document.querySelector(".ion-plus-circled").addEventListener("click", function(){
  var mainBody = document.querySelector('body');
  //create div element with class
  var searchDiv = document.createElement("div");
  searchDiv.setAttribute('class', 'newCurrency');
  //creating H element
  var searchHeadLine = document.createElement("h6");
  searchHeadLine.textContent = "Select coin";
  //creating input element
  var searchInput = document.createElement("input");
  searchInput.setAttribute('class', 'coin-search');
  searchInput.setAttribute('type', 'search');
  searchInput.setAttribute('placeholder', 'search for coin');
  //creaing image element
  var searchImage = document.createElement('img');
  searchImage.setAttribute('src', 'img/search_pic.png');
  searchImage.setAttribute('class', 'searchImage');
  
  var nCurrency = document.querySelector('.newCurrency');
  //creating icon element
  var exitIcon = document.createElement("i");
  exitIcon.setAttribute('class', 'ion-close-round');
  //appending all the elements to the div element
  searchDiv.appendChild(searchHeadLine);
  searchDiv.appendChild(searchInput);
  searchDiv.appendChild(exitIcon);
  searchDiv.appendChild(searchImage);
  mainBody.appendChild(searchDiv); 
  //click event for closing the new div
  document.querySelector(".ion-close-round").addEventListener("click", function(){
    mainBody.removeChild(searchDiv);
  });
});
//END


=======
// total value = holdings * price 
// store 
