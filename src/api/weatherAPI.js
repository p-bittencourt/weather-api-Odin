export default async function fetchWeatherData(city = "london") {
  const url = `http://api.weatherapi.com/v1/current.json?key=311546e1392e4de8a36214436240807&q=${city}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return processWeatherData(data);
  } catch (e) {
    console.log(e);
  }
}

function processWeatherData(data) {
  const cityName = data.location.name;
  const countryName = data.location.country;
  const temperatureCelsius = data.current.temp_c;
  const conditionText = data.current.condition.text;
  const conditionIcon = data.current.condition.icon;

  return {
    cityName,
    countryName,
    temperatureCelsius,
    conditionText,
    conditionIcon,
  };
}
