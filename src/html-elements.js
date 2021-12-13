const card = function (element) {
  return `
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
};

const weatherConditions = function (data) {
  const temperature = data.current.temp - 273.15;

  return `
    <p>Temperature: ${temperature.toFixed(0)}°C</p>
  `;
};

export { card, weatherConditions };
