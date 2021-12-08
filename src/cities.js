import cities from 'cities.json';

function showCities(city) {
  const countryList = document.querySelector('.country-list');
  countryList.innerHTML = '';
  const citiesToShow = cities.filter((each) => each.name.toLowerCase() === city.toLowerCase());
  citiesToShow.forEach((element) => {
    const cityCard = document.createElement('div');
    cityCard.classList.add('city-card');
    cityCard.innerHTML = `
    <p>${element.name}, ${element.country} <span><img src="https://flagcdn.com/${element.country.toLowerCase()}.svg" width="30"></span></p>
    `;
    countryList.appendChild(cityCard);
  });
}

export default showCities;
