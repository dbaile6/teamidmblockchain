
var holdingsNode = document.querySelector('#holdings');
var holdingInputs = holdingsNode.querySelectorAll('input');
var all = [];

var getList = JSON.parse(localStorage.getItem('all'));
console.log(getList);

for(var i = 0; i < holdingInputs.length; i++){
    if(getList !== null){
        if(Object.values(Object.values(getList)[0])[i] >= 0){
            holdingInputs[i].value = Object.values(Object.values(getList)[0])[i];
        }
    }
}

document.querySelector('#holdings').addEventListener('input',function(){
    var portfolioArray = {};
    for(var i = 0; i < holdingInputs.length; i++){
        portfolioArray['input'+String(i)] = holdingInputs[i].value;
    }
    console.log(portfolioArray)
    all =[];
    all.push(portfolioArray)
    console.log(all)
    localStorage.setItem('all', JSON.stringify(all))
    
});


var priceAjax = function(){
    $.ajax({
        url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,LTC,ADA,NEO,XLM,EOS,XMR,XEM,DASH,IOT,TRX,USDT,ETC,VEN&tsyms=USD',
        type: 'GET',
        success: function(cryptoValues) {
            for(var i = 0; i < Object.keys(cryptoValues).length; i++){
                var divPrice = document.querySelector('#price');
                divPrice.querySelectorAll('p')[i].textContent = Object.values(cryptoValues)[i].USD;
            }
        }  
    })
}
setInterval(priceAjax, 10000);

var totalValue = function(){
    var total = 0;
    var sum = 0;
    for(var i = 0; i < document.querySelector('#holdings').querySelectorAll('input').length; i++){    
        total = Number(document.querySelectorAll('.holdingAmount')[i].value) * Number(document.querySelector('#price').querySelectorAll('p')[i].textContent);
        sum += total;
    }
    document.querySelector('#totalPortfolioValue').textContent = "$"+(sum.toFixed(2));
}
setInterval(totalValue, 1000);


var updateChange =function(cryptoChanges){
    var apiKeys = Object.keys(cryptoChanges).length;
    for(var i = 0; i < apiKeys; i++){
        var divChange = document.querySelector('#change');
        var valueWentUp = Object.values(cryptoChanges)[i].percent_change_1h > 0;
        var valueWentDown = Object.values(cryptoChanges)[i].percent_change_1h < 0;
        var nodeList = divChange.querySelectorAll('p');
        var color = "grey";
        if(valueWentUp){
            color = "green";
        }else if(valueWentDown){
            color = "red";
        }
        nodeList[i].style.color = color;
        nodeList[i].innerHTML = Object.values(cryptoChanges)[i].percent_change_1h + "%";
    }
}


var dailyChangeAjax = function(){
    $.ajax({
        url: 'https://api.coinmarketcap.com/v1/ticker/?limit=17',
        type: 'GET',
        success: function(cryptoChanges) {
            updateChange(cryptoChanges);
        }
    })
}
setInterval(dailyChangeAjax, 1800000);
  
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

dailyChangeAjax();
priceAjax();
totalValue();

    
  
  
  