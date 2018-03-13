
var portfolioObj = [];
console.log(portfolioObj);

var savePortfolio = function(){
    localStorage.setItem('portfolioObj', JSON.stringify(portfolioObj))
}

var retrievePortfolio = function(){
    JSON.parse(localStorage.getItem('portfolioObj'));
}

retrievePortfolio();

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
setInterval(priceAjax, 1500);
    
var totalValue = function(){
    var total = 0;
    var sum = 0;
    for(var i = 0; i < document.querySelector('#holdings').querySelectorAll('input').length; i++){    
        total = Number(document.querySelectorAll('.holdingAmount')[i].value) * Number(document.querySelector('#price').querySelectorAll('p')[i].textContent);
        sum += total;
    }
    document.querySelector('#totalPortfolioValue').textContent = "$"+(sum.toFixed(2));
    var porValue = {nowValue: Number(document.querySelector('#totalPortfolioValue').textContent.slice(1,-1))}
    portfolioObj.push(porValue);
    savePortfolio();
}
setInterval(totalValue, 1500);

var dailyChangeAjax = function(){
    $.ajax({
        url: 'https://api.coinmarketcap.com/v1/ticker/?limit=1000',
        type: 'GET',
        success: function(cryptoChanges) {
            for(var i = 0; i < Object.keys(cryptoChanges).length; i++){
                var divChange = document.querySelector('#change');
                // if(document.querySelector('#currency').querySelector('a').innerText == Object.keys(cryptoChanges)[i].symbol){
                    if(Object.values(cryptoChanges)[i].percent_change_1h > 0){
                        divChange.querySelectorAll('p')[i].innerHTML = Object.values(cryptoChanges)[i].percent_change_1h + "%";
                        divChange.querySelectorAll('p')[i].style.color = "green";
                    }else{
                        divChange.querySelectorAll('p')[i].innerHTML = Object.values(cryptoChanges)[i].percent_change_1h + "%";
                        divChange.querySelectorAll('p')[i].style.color = "red";
                    }
                // }
            }
        }
    })
}
setInterval(dailyChangeAjax, 1500);





// var x = function(){
//     // Put the object into storage
//     localStorage.setItem('portfolioObj', JSON.stringify(portfolioObj));

//     // Retrieve the object from storage
//     var retrievedObject = localStorage.getItem('portfolioObj');

//     console.log('retrievedObject: ', JSON.parse(retrievedObject));
//     return totalMoney;
// }

// setInterval(x,3000);



// document.querySelector('#totalPortfolioValue').textContent

// document.querySelector('#totalDailyChange').textContent =

var now = Number(document.querySelector('#totalPortfolioValue').textContent.slice(1,-1));
if(now !== Number(document.querySelector('#totalPortfolioValue').textContent.slice(1,-1))){
    document.querySelector('#totalDailyChange').textContent = Number(document.querySelector('#totalPortfolioValue').textContent.slice(1,-1)) / now;
}


  
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


     
  
  
  