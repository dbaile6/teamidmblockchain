function displayClock () {var d = new Date();
ap = "am";
h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();
da = d.getDate();
mo = d.getMonth();
y = d.getFullYear();
if (h > 11) { ap = "pm"; }
if (h > 12) { h = h - 12; }
if (h == 0) { h = 12; }
if (m < 10) { m = "0" + m; }
if (s < 10) { s = "0" + s; }
var myTime = document.getElementById('clock').innerHTML = + mo + "/" + da + "/" + y + "                           " + h + ":" + m + ":" + s + " " + ap;
}

setInterval(displayClock, 1000);

$(function () {

    $.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD", function (data) {
        $.each(data['DISPLAY'], function (index, value) {

            var spanPrice = $('<span/>')
                .attr('id', index + "price")
                .html(value['USD']['PRICE']);

            var spanMktcap = $('<span/>')
                .attr('id', index + "mktcap")
                .html(value['USD']['MKTCAP']);

            var $newDiv = $("<div/>")   // creates a div element
                .attr("id", index)  // adds the id
                .addClass("element")   // add a class
                .append(spanPrice)
                .append(spanMktcap)

            $("body").append($newDiv);
        });
    });

});
