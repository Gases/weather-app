import { weatherConditions } from './html-elements';

async function displayWeather(latitude, longitude, city, country) {
  const countryList = document.querySelector('.country-list');
  countryList.innerHTML = '';

  const currentWeather = await fetch(`
  https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=e0d044ff61ae79235e63c6f02de4fd2a
  `, { mode: 'cors' });
  const weatherData = await currentWeather.json();
  console.log(weatherData);

  const weatherDisplay = document.createElement('div');
  weatherDisplay.classList.add('current-weather');
  weatherDisplay.innerHTML = weatherConditions(weatherData, city, country);
  countryList.appendChild(weatherDisplay);
}

export default displayWeather;
