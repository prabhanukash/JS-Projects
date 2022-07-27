const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.latitude, weatherLocation.longitude);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const lat = document.getElementById("lat").value;
  const log = document.getElementById("log").value;

  weather.changeLocation(lat, log);
  storage.setLocationData(lat, log);
  getWeather();
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((response) => ui.paint(response))
    .catch((err) => console.error(err));
}
