$(document).ready(function() {
  document.getElementById("refreshBtn").style.display = "none";
  setInterval(showRefreshBtn, 30000);
});

function showRefreshBtn(){
  document.getElementById("refreshBtn").style.display = "inline";
}

var tempCS=" °C";
var tempFS=" °F";
var MetricFlag=0;

function refresh() {
  MetricFlag=0;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      //edw vres ti kairo exei ekei
        var api = "https://api.openweathermap.org/data/2.5/weather?";
        var coords = "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
        var appid = "&appid=061f24cf3cde2f60644a8240302983f2";
        var final=api + coords + appid;
        $.getJSON(final, function(json) {
          //Here we got json with the info about the weather. Now we just have to show these info simplified         
          var w=json;
          var place=w.name + ", "+ w.sys.country;
          var tempK=w.main.temp; //kELVIN
          var tempC=tempK-273.15; //Celcius
          var humidity=w.main.humidity+ " %"; //percent
          var windSpeed=w.wind.speed + " km/h";
          var wIconLink = "https://openweathermap.org/img/w/"+ w.weather[0].icon +".png";          
          var Icon=" <img class=\"img-responsive icon-weather\" src=\""+wIconLink+"\"></img>";
          $("#wicon").html(Icon);
          var Desc ="<b>Place: </b>" +place;
          Desc+= "<br><b>Humidity: </b>" + humidity;
          Desc+= "<b> Wind Speed: </b>" + windSpeed;
          var Temp= "<b>Temperature: </b>"+ tempC.toFixed(0) + tempCS;
           $("#wdesc1").html(Desc);
           $("#wdesc2").html(Temp);
        });        
    });
  }
  document.getElementById("refreshBtn").style.display = "none";
  setInterval(showRefreshBtn, 30000);
}


function changeMetrics() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      //edw vres ti kairo exei ekei
        var api = "https://api.openweathermap.org/data/2.5/weather?";
        var coords = "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
        var appid = "&appid=061f24cf3cde2f60644a8240302983f2";
        var final=api + coords + appid;
        $.getJSON(final, function(json) {
          //Here we got json with the info about the weather. Now we just have to show these info simplified         
          var w=json;
          var tempK=w.main.temp; //kELVIN
          var tempC=tempK-273.15; //Celcius
          var tempF=tempK * 9/5 - 459.67; //Fahrenheit
          if(MetricFlag%2!=0){
            var Temp= "<br><b>Temperature: </b>"+ tempC.toFixed(0) + tempCS;
          }
          else{
            var Temp= "<br><b>Temperature: </b>"+ tempF.toFixed(0) + tempFS;
          }
            
           $("#wdesc2").html(Temp);
          MetricFlag++;
        });        
    });
  }
}

