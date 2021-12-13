import cities from 'cities.json';

function showCities(city) {
  const countryList = document.querySelector('.country-list');
  countryList.innerHTML = '';
  const citiesToShow = cities
    .filter((each) => each.name.toLowerCase() === city.toLowerCase());

  if (citiesToShow.length) {
    citiesToShow.forEach((element) => {
      const cityCard = document.createElement('div');
      cityCard.classList.add('city-card');
      cityCard.innerHTML = `
      <div class="country-details">
        <p>${element.name}, ${element.country} 
          <span>
            <img class="flag" src="https://flagcdn.com/${element.country.toLowerCase()}.svg" width="30">
          </span>
        </p>
      </div>
      <div class="lat-and-long">
        <p>Latitude: ${element.lat}</p>
        <p>Longitude: ${element.lng}</p>
      </div>
      `;
      countryList.appendChild(cityCard);
    });
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.innerHTML = "<p>We couldn't find that city</p>";
    countryList.appendChild(errorMessage);
  }
}

export default showCities;
