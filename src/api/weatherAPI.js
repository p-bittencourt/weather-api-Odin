export default async function fetchWeatherData(city = "london") {
  const forecast = `http://api.weatherapi.com/v1/forecast.json?key=311546e1392e4de8a36214436240807&q=${city}`;
  try {
    const response = await fetch(forecast);
    const data = await response.json();
    console.log(data.forecast.forecastday[0].day.mintemp_c);
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

  return {
    cityName,
    countryName,
    temperatureCelsius,
    conditionText,
    conditionIcon,
    maxTemp,
    minTemp,
  };
}
