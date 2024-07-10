import "./styles/main.css";
import getWeatherData from "./api/weatherAPI.js";

const data = await getWeatherData();
renderContent(data);

const form = document.getElementById("user-input-form");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  let userInput = document.getElementById("user-input").value.toLowerCase();
  userInput = userInput.replace(/\s+/g, "-");
  const newData = await getWeatherData(userInput);
  renderContent(newData);
}

function renderContent(data) {
  document.getElementById("city-name").textContent = data.cityName;
  document.getElementById("country-name").textContent = data.countryName;
  document.getElementById("temperature").textContent =
    data.temperatureCelsius + "C";
  document.getElementById("condition-text").textContent = data.conditionText;
  document.getElementById("condition-icon").src = data.conditionIcon;
}
