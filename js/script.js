// element selection from dom
const city = document.querySelector("input.cityInput")
const button = document.querySelector("input.button")
const form = document.querySelector("form")

const time = document.getElementById("time");
const date = document.getElementById("date")

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
  // fetchWeatherData(city.value, apiKey)
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
}


// using One Call api
// get latitude and longitude

function getCoordinates(cityName) {
  fetch("http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&appid="+apiKey)
    .then(resp => resp.json())
    .then(locationInfo => {
      console.log(locationInfo)
      const latitude = locationInfo[0].lat
      const longitude = locationInfo[0].lon      
    })
    .catch(err=>alert(err.message))

  

};



// const fetchWeatherData = (city, apiKey) => {
//   fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=" + apiKey + "&units=metric")
//     .then(resp => resp.json())
//     .then(weatherInfo => {
//       displayWeather(weatherInfo)
//       form.reset();

//       document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" + weatherInfo.weather[0].main + ")"
//     })
//     .catch((err) => alert(err.message))
// }




















// // fetch data functions
// const fetchWeatherData = (city, apiKey) => {
//   fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric")
//     .then(resp => resp.json())
//     .then(weatherInfo => {     
//       displayWeather(weatherInfo)
//       // document.querySelector(".display").classList.add("display:after")
//       // document.querySelector(".display").classList.remove("display")
//       form.reset();

//       document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?"+weatherInfo.weather[0].main+")"
//     })
//     .catch((err) => alert(err.message))    
// }

// // display weather
// function displayWeather(weatherInfo){
//   document.querySelector(".name").innerHTML = ` ${weatherInfo.name}`;
//   document.querySelector(".desc").innerHTML = `${weatherInfo.weather[0].main}`;
//   document.querySelector(".temp").innerHTML = `${weatherInfo.main.temp}°C`;
//   document.querySelector(".weather-icon").src ="https://openweathermap.org/img/wn/"+weatherInfo.weather[0].icon+"@2x.png";
//   document.querySelector(".humidity").innerHTML = `Humidity: ${weatherInfo.main.humidity}%`
//   document.querySelector(".pressure").innerHTML = `Pressure: ${weatherInfo.main.pressure}`
//   document.querySelector(".wind").innerHTML = `Wind: ${weatherInfo.wind.speed}km/h`
// }

// // hide on search
