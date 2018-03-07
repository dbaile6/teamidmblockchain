var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

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