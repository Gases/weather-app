import cities from 'cities.json';
import { card } from './html-elements';
import displayWeather from './weather';

function showCities(city) {
  const countryList = document.querySelector('.country-list');
  countryList.innerHTML = '';

  const citiesToShow = cities
    .filter((each) => each.name.toLowerCase() === city.toLowerCase());

  if (citiesToShow.length) {
    citiesToShow.forEach((element) => {
      const cityCard = document.createElement('div');
      cityCard.classList.add('city-card');
      cityCard.innerHTML = card(element);
      countryList.appendChild(cityCard);
      cityCard.addEventListener('click', () => {
        displayWeather(element.lat, element.lng, element.name, element.country);
      });
    });
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.innerHTML = "<p>We couldn't find that city</p>";
    countryList.appendChild(errorMessage);
  }
}

export default showCities;
