var APIKEY = "a7d5b1be6d4e6c114b7127c477b641fe";
var requestUrl = ('https://api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={a7d5b1be6d4e6c114b7127c477b641fe}');
var city = $("");
var date = $("");
var temp = $("temp");
var air = $("air");
var water = $("water");
var fire = $("fire");

// Calling the search function
$(document).ready(function() {
  $("#search").on("click", function() {
    var searchResults = $('#search').value();
    console.log(('#search').value());
  }};

  function weather(city) {
    var APIKEY = '{a7d5b1be6d4e6c114b7127c477b641fe}';
    fetch('https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?' + city+ '&appid=' + APIKEY)  
    .then(function(resp) { 
      return resp.json() 
    })
    .then(function(data) {
    })
    .catch(function() {
    });