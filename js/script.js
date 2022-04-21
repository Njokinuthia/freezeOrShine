// element selection from dom
const city = document.querySelector("input.cityInput")
const button = document.querySelector("input.button")
const form = document.querySelector("form")


// weather app api key
const apiKey = `28d519b791ec96557c38884a192d1bc7`;

// button functionality - event listener
button.addEventListener("click", (e) => {
  e.preventDefault();  
 
  fetchWeatherData(city.value, apiKey)
})

// fetch data functions
const fetchWeatherData = (city, apiKey) => {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric")
    .then(resp => resp.json())
    .then(weatherInfo => {     
      displayWeather(weatherInfo)
      // document.querySelector(".display").classList.add("display:after")
      // document.querySelector(".display").classList.remove("display")
      form.reset();

      document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?"+weatherInfo.weather[0].main+")"
    })
    .catch((err) => alert(err.message))    
}
// display weather
function displayWeather(weatherInfo){
  document.querySelector(".name").innerHTML = ` ${weatherInfo.name}`;
  document.querySelector(".desc").innerHTML = `${weatherInfo.weather[0].main}`;
  document.querySelector(".temp").innerHTML = `${weatherInfo.main.temp}°C`;
  document.querySelector(".weather-icon").src ="https://openweathermap.org/img/wn/"+weatherInfo.weather[0].icon+"@2x.png";
  document.querySelector(".humidity").innerHTML = `Humidity: ${weatherInfo.main.humidity}%`
  document.querySelector(".pressure").innerHTML = `Pressure: ${weatherInfo.main.pressure}`
  document.querySelector(".wind").innerHTML = `Wind: ${weatherInfo.wind.speed}km/h`
}

// hide on search
