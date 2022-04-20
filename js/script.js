// element selection from dom
const city = document.querySelector("input.cityInput")
const button = document.querySelector("input.button")
const form = document.querySelector("form")


// weather app api key
const apiKey = `28d519b791ec96557c38884a192d1bc7`;

// button functionality - event listener
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(city.value)
  fetchWeatherData(city.value, apiKey)
})

// fetch data functions
const fetchWeatherData = (city, apiKey) => {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric")
    .then(resp => resp.json())
    .then(weatherInfo => {
      console.log(weatherInfo)
      console.log(weatherInfo.weather[0].main)
      console.log(weatherInfo.weather[0].description)
      console.log(weatherInfo.main.temp)
      displayWeather(weatherInfo)
      form.reset();
    })
    .catch((err) => alert(err.message))
    
}
function displayWeather(weatherInfo){
  document.querySelector(".name").innerHTML = `City: ${weatherInfo.name}`;
  document.querySelector(".desc").innerHTML = `Weather: ${weatherInfo.weather[0].main}`;
  document.querySelector(".temp").innerHTML = `Temp: ${weatherInfo.main.temp}`
}
