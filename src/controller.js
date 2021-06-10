const tempElement = document.querySelector('.temperature');
const locationElement = document.querySelector('.location');
const description = document.getElementById('description');
const pressure = document.getElementById('pressure');
const feelLike = document.getElementById('feel-like');
const humidity = document.getElementById('humidity');
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const icon = document.getElementById('icon');
const alert = document.getElementById('alert');
let temperature = 'celsius';
const searchCity = document.getElementById('search-city');
const cityInput = document.getElementById('city-input');
const proxy = 'http://cors-anywhere.herokuapp.com/';
const apiKey = 'f7c2cc6f11db4a4873f18ec881fd1be0';

const renderWeather = (item) => {
  icon.innerHTML = `<img src='./icons/${item.weather[0].icon}.png'>`;
  tempElement.textContent = `${Math.floor(item.main.temp)} °`;
  locationElement.textContent = `${item.name}, ${item.sys.country}`;
  description.textContent = `${item.weather[0].description}`;
  pressure.textContent = item.main.pressure;
  feelLike.textContent = `${Math.floor(item.main.feels_like)} °C`;
  humidity.textContent = item.main.humidity;
};

const showError = (err) => {
  alert.innerHTML = `<p>${err.message}</p>`;
  alert.classList.remove('hidden');
}

const geoError = () => {
  alert.innerHTML = '<p>User browser does not support geolocation</p>';
  alert.classList.remove('hidden');
}
window.addEventListener('load', () => {
  let lat;
  let lon;
  // API api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      console.log(`latitude ${lat}, longitude ${lon}`);

      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      const showData = async () => {
        try {
          const response = await fetch(api);
          const data = await response.json();
          renderWeather(data)
          fahrenheit.addEventListener('click', () => {
            if (temperature === 'celsius') {
              tempElement.textContent = `${Math.floor(data.main.temp * 1.8 + 32)} °`;
              feelLike.textContent = `${Math.floor(data.main.feels_like * 1.8 + 32)} °F`
              temperature = 'kelvin';
              celsius.classList.remove('font-extrabold');
              fahrenheit.classList.add('font-extrabold');

            }
          });

          celsius.addEventListener('click', () => {
            if (temperature === 'kelvin') {
              tempElement.textContent = `${Math.floor(data.main.temp)} °`;
              temperature = 'celsius';
              fahrenheit.classList.remove('font-extrabold');
              celsius.classList.add('font-extrabold');
              feelLike.textContent = `${Math.floor(data.main.feels_like)} °C`
            }
          });
        } catch (error) {
          showError(error)
        }
      };

      showData();
    });
  } else {
    geoError();
  }
});

searchCity.addEventListener('submit', (e) => {
  e.preventDefault();

  if (cityInput.value === '' || cityInput === null) return;

  const city = cityInput.value;
  cityInput.value = null;

  const anotherCityApi = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const showAnotherCityData = async () => {
    try {
      const anotherCityResponse = await fetch(anotherCityApi);
      const anotherCityData = await anotherCityResponse.json();
      renderWeather(anotherCityData)
    } catch {
      alert(error);
    }
  };
  showAnotherCityData();
});