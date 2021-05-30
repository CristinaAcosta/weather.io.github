var APIKEY = "a7d5b1be6d4e6c114b7127c477b641fe";
var requestUrl = ('https://api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={a7d5b1be6d4e6c114b7127c477b641fe}');
var city = $("#city");
var date = $("#date");
var temp = $("#temp");
var air = $("#air");
var water = $("#water");
var fire = $("#fire");

//click submit to make api function
$("form").submit( e => {
  e.preventDefault()
 weather(city.val());
})


// Calling the search function
$(document).ready(function () {
  $("#search").on("click", function () {
    var searchResults = $('#search').value();
    console.log(('#search').value());
  })});


  
  function weather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=imperial`)
    .then(function(resp) { 
      return resp.json() 
    })
    .then(function(Data) {

      const weeklyWeatherElement = $("#weeklyWeather")
      
      let fiveDayWeatherDict = {}
      
      for ( let i = 0; i <Data.list.length; i+=8 ) {
        const index = i/8
        fiveDayWeatherDict[ index ] = Data.list[ i + 5]
        const date = new Date(fiveDayWeatherDict[index].dt_txt)
        if (index ===0) {
          $("#dayData").append(`
          <li class="list-group-item"id="date"> 
          Date: ${date}
          </li>
          <li class="list-group-item" id="fire">
          ${fiveDayWeatherDict[index].weather[0].description}
          </li>
            <li class="list-group-item"id="temp" units=imperial>
            Temperature: ${fiveDayWeatherDict[index].main.temp}
            </li>
            <li class="list-group-item" id="water">
            Humidity: ${fiveDayWeatherDict[index].main.humidity}
            </li>
            <li class="list-group-item" id="air" >
            Wind Speed: ${fiveDayWeatherDict[index].wind.speed}
            </li>
          `)
        }
      
      weeklyWeatherElement.append(`<div class="lead" id="weeklyWeather ${index}"> 
       ${date}
       <p>
          Temp: ${fiveDayWeatherDict[index].main.temp}
          Humdity: ${fiveDayWeatherDict[index].main.humidity}</p>
       </div>`)
      }
      console.log(weeklyWeatherElement)
    })
    .catch(function(e) {
      console.log(e)
    });
  }


 let previous = localStorage.getItem(weather);
 console.log(previous);