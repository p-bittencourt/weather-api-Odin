export default async function fetchWeatherData(city = "london") {
  const forecast = `https://api.weatherapi.com/v1/forecast.json?key=311546e1392e4de8a36214436240807&q=${city}&days=2`;
  try {
    const response = await fetch(forecast);
    const data = await response.json();
    console.log(data);
    if (data.error) {
      alert("City not found. Reseting to London.");
      throw new Error(data.error.message);
    }
    return processWeatherData(data);
  } catch (e) {
    document.getElementById("user-input").value = "";
    return fetchWeatherData();
  }
}

function processWeatherData(data) {
  const cityName = data.location.name;
  const countryName = data.location.country;
  const temperatureCelsius = data.current.temp_c;
  const conditionText = data.current.condition.text;
  const conditionIcon = data.current.condition.icon;
  const maxTemp = data.forecast.forecastday[0].day.maxtemp_c;
  const minTemp = data.forecast.forecastday[0].day.mintemp_c;
  const tomorrowMax = data.forecast.forecastday[1].day.maxtemp_c;
  const tomorrowMin = data.forecast.forecastday[1].day.mintemp_c;
  const forecastText = data.forecast.forecastday[1].day.condition.text;
  const forecastIcon = data.forecast.forecastday[1].day.condition.icon;

  return {
    cityName,
    countryName,
    temperatureCelsius,
    conditionText,
    conditionIcon,
    maxTemp,
    minTemp,
    tomorrowMax,
    tomorrowMin,
    forecastText,
    forecastIcon,
  };
}
