const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "90d51e36ad5db68e3df8a20f48308642";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        const name = data.name;
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
        temp.innerText = `${Math.floor(data.main.temp)}˚C`;})
}
function onGeoError() {
  alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
