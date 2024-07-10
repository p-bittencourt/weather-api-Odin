import "./styles/main.css";
import getWeatherData from "./api/weatherAPI.js";

let searchedCity = "london";
const data = await getWeatherData(searchedCity);
console.log(data);

const cityName = document.getElementById("city-name");
const countryName = document.getElementById("country-name");
const temperature = document.getElementById("temperature");
const conditionText = document.getElementById("condition-text");
const conditionIcon = document.getElementById("condition-icon");

cityName.textContent = data.cityName;
countryName.textContent = data.countryName;
temperature.textContent = data.temperatureCelsius;
conditionText.textContent = data.conditionText;
conditionIcon.src = data.conditionIcon;
