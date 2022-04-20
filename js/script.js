// element selection from dom
const cityInput = document.querySelector("input.cityInput")
const button = document.querySelector("input.button")
const name = document.querySelector(".name")
const description = document.querySelector(".desc")
const temperature = document.querySelector(".temp")

// weather app api key
const apiKey = `28d519b791ec96557c38884a192d1bc7`;

// button functionality - event listener
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(cityInput.value)
  fetchWeatherData(cityInput.value , apiKey)
  // geoLocation(cityInput.value)

})

// fetch data functions
function fetchWeatherData(city,apiKey) {  
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey)
    .then(resp => resp.json())
    .then(weatherInfo => console.log(weatherInfo))
    .catch((err) => alert(err.message))
}





