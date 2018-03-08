


// $.ajax({
//     url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,&tsyms=USD',
//     type: 'GET',
//     success: function(orders2) {
//         console.log(); 
//     }
// });



document.querySelector('.plus').addEventListener('click',function(){
    var hide = document.querySelector('.hide');
    var iconPlus = document.querySelector(".hide1");
    var iconHide = document.querySelector(".hide2");

    if(hide.style.display == "none"){
        hide.style.display = "block";
        iconHide.style.display = "block";
        iconPlus.style.display = "none";
    } else{
        hide.style.display = "none";
        iconHide.style.display = "none";
        iconPlus.style.display = "block";
    }  
});