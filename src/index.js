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

window.addEventListener('load', () => {
  let lat;
  let lon;
  // API api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  const apiKey = 'f7c2cc6f11db4a4873f18ec881fd1be0';

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      console.log(`latitude ${lat}, longitude ${lon}`);
      const proxy = 'http://cors-anywhere.herokuapp.com/';

      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      const showData = async () => {
        try {
          const response = await fetch(api);
          const data = await response.json();
          console.log(response, data);
          icon.innerHTML = `<img src='./Weather-App-JavaScript-master/icons/${data.weather[0].icon}.png'>`;
          tempElement.textContent = `${Math.floor(data.main.temp)} °`;
          locationElement.textContent = `${data.name}, ${data.sys.country}`;
          description.textContent = `${data.weather[0].description}`;
          pressure.textContent = data.main.pressure;
          feelLike.textContent = `${Math.floor(data.main.feels_like)}`;
          humidity.textContent = data.main.humidity;

          fahrenheit.addEventListener('click', () => {
            if (temperature === 'celsius') {
              tempElement.textContent = `${Math.floor(data.main.temp * 1.8 + 32)} °`;
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
            }
          });
        } catch (error) {
          alert.innerHTML = `<p>${error.message}</p>`;
          alert.classList.remove('hidden');
        }
      };

      showData();
    });
  } else {
    alert.innerHTML = '<p>User browser does not support geolocation</p>';
    alert.classList.remove('hidden');
  }
});