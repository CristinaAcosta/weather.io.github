




$(document).ready(function() {
    $("#form-sub").submit(function(event) { 
        performSearch(event); });
  });

  function performSearch(event) {
    var request;
    event.preventDefault();
    $("#city-name").text("Searching ...");
    $("#city-temp").text("");
    $("#city-weather").text("");
  
    // Send the request
    request = $.ajax({
        url: 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={a7d5b1be6d4e6c114b7127c477b641fe}',
        type: "GET",
        data: { q: $("#city").val(), 
                appid: 'a7d5b1be6d4e6c114b7127c477b641fe', 
                units: 'metric'}
    });

  
    // Callback handler for success
    request.done(function (response){
        formatSearchResults(response);
    });
    
    // Callback handler for failure
    request.fail(function (){
        $("#city-name").text("try again");
        $("#city-temp").text("");
        $("#city-weather").text("");
    });
  
  }
    
  function formatSearchResults(jsonObject) {
    
    var city_name = jsonObject.name;
    city_name = city_name + ", " + jsonObject.sys.country;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;
    $("#city-name").text(city_name);
    $("#city-weather").text(city_weather);
    $("#city-temp").text(city_temp+" Celsius");  
  }