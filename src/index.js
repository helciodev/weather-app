const tempElement = document.querySelector('.temperature');
const locationElement = document.querySelector('.location');
const description = document.getElementById('description');
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
          tempElement.textContent = `${Math.floor(data.main.temp)} °`;
          locationElement.textContent = `${data.name}, ${data.sys.country}`;
          description.textContent = `${data.weather[0].description}`
        } catch (error) {
          console.log(error);
        }
      };

      showData();
    });
  }
});