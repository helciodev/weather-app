export const tempElement = document.querySelector('.temperature');
const locationElement = document.querySelector('.location');
const description = document.getElementById('description');
const pressure = document.getElementById('pressure');
export const feelLike = document.getElementById('feel-like');
const humidity = document.getElementById('humidity');
export const celsius = document.getElementById('celsius');
export const fahrenheit = document.getElementById('fahrenheit');
const icon = document.getElementById('icon');
const alert = document.getElementById('alert');
export const searchCity = document.getElementById('search-city');
export const cityInput = document.getElementById('city-input');

export const renderWeather = (item) => {
  icon.innerHTML = `<img src='./icons/${item.weather[0].icon}.png'>`;
  tempElement.textContent = `${Math.floor(item.main.temp)} °`;
  locationElement.textContent = `${item.name}, ${item.sys.country}`;
  description.textContent = `${item.weather[0].description}`;
  pressure.textContent = `Pressure: ${item.main.pressure}`;
  feelLike.textContent = `Feels like: ${Math.floor(item.main.feels_like)} °C`;
  humidity.textContent = `Humidity: ${item.main.humidity}`;
  celsius.textContent = 'C';
  fahrenheit.textContent = 'F';
};

export const showError = (err) => {
  alert.innerHTML = `<p>${err.message}</p>`;
  alert.classList.remove('hidden');
};

export const geoError = () => {
  alert.innerHTML = '<p>User browser does not support geolocation</p>';
  alert.classList.remove('hidden');
};