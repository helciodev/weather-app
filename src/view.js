/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
export const tempElement = document.querySelector('.temperature');
const locationElement = document.querySelector('.location');
const description = document.getElementById('description');
const pressure = document.getElementById('pressure');
export const feelLike = document.getElementById('feel-like');
const humidity = document.getElementById('humidity');
const icon = document.getElementById('icon');
const alert = document.getElementById('alert');
export const searchCity = document.getElementById('search-city');
export const cityInput = document.getElementById('city-input');
const body = document.getElementById('body');
export const slide = document.getElementById('slide');
export const renderWeather = (item, unt) => {
  icon.innerHTML = `<img src='./icons/${item.weather[0].icon}.png'>`;
  tempElement.textContent = `${Math.floor(item.main.temp)} °`;
  locationElement.textContent = `${item.name}, ${item.sys.country}`;
  description.textContent = `${item.weather[0].description}`;
  pressure.textContent = `Pressure: ${item.main.pressure}`;
  feelLike.textContent = `Feels like: ${Math.floor(item.main.feels_like)} ${unt === 'imperial' ? '°F' : '°C'}`;
  humidity.textContent = `Humidity: ${item.main.humidity}%`;
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

// export const changeUnitRender = (data, uni) => {
//   if (uni === 'imperial'){
//     tempElement.textContent = `${Math.floor((data.main.temp - 32) / (5 / 9) )} °`;
//     celsius.classList.remove('font-extrabold');
//     fahrenheit.classList.add('font-extrabold');
//     feelLike.textContent = `Feels Like: ${Math.floor((data.main.feels_like - 32) / (5/9) )} °C`;
//   }else {
//     tempElement.textContent = `${Math.floor(data.main.temp * 1.8 + 32)} °`;
//     feelLike.textContent = `Feels Like: ${Math.floor(data.main.feels_like * 1.8 + 32)} °F`;
//     fahrenheit.classList.remove('font-extrabold');
//     celsius.classList.add('font-extrabold');
//   }
// }

export const showError = (err) => {
  alert.innerHTML = `<p>${err.message}</p>`;
  alert.classList.remove('hidden');
};

export const geoError = () => {
  alert.innerHTML = '<p>User browser does not support geolocation</p>';
  alert.classList.remove('hidden');
};