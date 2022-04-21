// element selection from dom
const city = document.querySelector("input.cityInput")
const button = document.querySelector("input.button")
const form = document.querySelector("form")

const time = document.getElementById("time");
const date = document.getElementById("date")
const detailedDay = document.getElementById("day")



const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const yearMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

// weather app api key
const apiKey = `28d519b791ec96557c38884a192d1bc7`;

document.addEventListener("DOMContentLoaded", () => {
  dateDetails();
})

// button functionality - event listener
button.addEventListener("click", (e) => {
  e.preventDefault();
  getCoordinates(city.value);
  document.querySelector(".display").classList.remove("display")
  document.querySelector(".details").classList.remove("details")
  document.querySelector(".hideheight").classList.remove("hideheight")


})


// date function
function dateDetails() {
  const today = new Date();
  const day = today.getDay();
  const dateNow = today.getDate();
  const monthNow = today.getMonth();
  const timeNow = today.getHours() + ":" + today.getMinutes();
  time.innerHTML = `${timeNow} hrs`
  date.innerHTML = weekDays[day] + ", " + dateNow + " " + yearMonths[monthNow]
  detailedDay.innerHTML = today

}


// Fetch weather data
function getCoordinates(cityName) {
  fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiKey)
    .then(resp => resp.json())
    .then(locationInfo => {
      // console.log(locationInfo)
      const lat = locationInfo[0].lat
      const lon = locationInfo[0].lon

      fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + apiKey + "&units=metric")
        .then(resp => resp.json())
        .then(weatherInfo => {
          console.log(weatherInfo)
          displayWeather(weatherInfo)
          form.reset();
          document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" + weatherInfo.current.weather[0].main + ")"
        })
        .catch((err) => alert(err.message))
    })
    .catch(err => alert(err.message))
};


// display weather
function displayWeather(weatherInfo) {
  console.log(weatherInfo.daily)
  console.log(weatherInfo.current.weather[0].main)

  document.getElementById("displayToday").innerHTML = `
    <h1 class="name text-center">${city.value}</h1>
    <div class="d-flex align-items-center">
      <img src="${"https://openweathermap.org/img/wn/" + weatherInfo.current.weather[0].icon + "@2x.png"}" alt="" class="weather-icon">
      <h1 class="desc">${weatherInfo.current.weather[0].main}</h1>
    </div>
    <h1 class="temp">${weatherInfo.current.temp} °C</h1>`



  document.querySelector("#desc").innerHTML = `${weatherInfo.current.weather[0].description}`
  document.querySelector("#temp").innerHTML = `${weatherInfo.current.temp} °C`
  document.querySelector("#humidity").innerHTML = `Humidity: ${weatherInfo.current.humidity}%`
  document.querySelector("#pressure").innerHTML = `Pressure: ${weatherInfo.current.pressure}`
  document.querySelector("#wind").innerHTML = `Wind: ${weatherInfo.current.wind_speed}km/h`
}



















