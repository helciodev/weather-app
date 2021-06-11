/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
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
const body = document.getElementById('body');
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

export const weatherBg = (weather) => {
  if (weather === 'Clear') {
    body.style.background = 'linear-gradient(to bottom right, rgb(53, 114, 149), rgb(125, 207, 235))';
  } else if (weather === 'Rain') {
    body.style.background = 'linear-gradient(to top left, rgb(70, 96, 85), rgb(31, 172, 216))';
  } else if (weather === 'Snow') {
    body.style.background = 'linear-gradient(to top left, rgb(217, 227, 223), rgb(103, 141, 153))';
  } else if (weather === 'Thunderstorm') {
    body.style.background = 'linear-gradient(to top left, rgb(31, 33, 32), rgb(14, 92, 117))';
  } else if (weather === 'Drizzle') {
    body.style.background = 'linear-gradient(to top left, rgb(146, 183, 167), rgb(26, 71, 86))';
  } else if (weather === 'Clouds') {
    body.style.background = 'linear-gradient(to top left, rgb(217, 227, 223), rgb(47, 62, 67))';
  } else {
    body.style.background = 'linear-gradient(to bottom right, rgb(53, 114, 149), rgb(125, 207, 235))';
  }
};

export const showError = (err) => {
  alert.innerHTML = `<p>${err.message}</p>`;
  alert.classList.remove('hidden');
};

export const geoError = () => {
  alert.innerHTML = '<p>User browser does not support geolocation</p>';
  alert.classList.remove('hidden');
};