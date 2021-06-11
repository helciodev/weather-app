import * as view from './view';

const init = () => {
  let temperature = 'celsius';
  const apiKey = 'f7c2cc6f11db4a4873f18ec881fd1be0';
  const https = 'https://';
  window.addEventListener('load', () => {
    let lat;
    let lon;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        const api = `${https}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        const showData = async () => {
          try {
            const response = await fetch(api);
            const data = await response.json();
            console.log(response, data);
            view.renderWeather(data);
            view.fahrenheit.addEventListener('click', () => {
              if (temperature === 'celsius') {
                view.tempElement.textContent = `${Math.floor(data.main.temp * 1.8 + 32)} °`;
                view.feelLike.textContent = `${Math.floor(data.main.feels_like * 1.8 + 32)} °F`;
                temperature = 'kelvin';
                view.celsius.classList.remove('font-extrabold');
                view.fahrenheit.classList.add('font-extrabold');
              }
            });

            view.celsius.addEventListener('click', () => {
              if (temperature === 'kelvin') {
                view.tempElement.textContent = `${Math.floor(data.main.temp)} °`;
                temperature = 'celsius';
                view.fahrenheit.classList.remove('font-extrabold');
                view.celsius.classList.add('font-extrabold');
                view.feelLike.textContent = `${Math.floor(data.main.feels_like)} °C`;
              }
            });
          } catch (error) {
            view.showError(error);
          }
        };

        showData();
      });
    } else {
      view.geoError();
    }
  });

  view.searchCity.addEventListener('submit', (e) => {
    e.preventDefault();

    if (view.cityInput.value === '' || view.cityInput === null) return;

    const city = view.cityInput.value;
    view.cityInput.value = null;

    const anotherCityApi = `${https}api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const showAnotherCityData = async () => {
      try {
        const anotherCityResponse = await fetch(anotherCityApi);
        const anotherCityData = await anotherCityResponse.json();
        view.renderWeather(anotherCityData);
      } catch (error) {
        view.showError(error);
      }
    };
    showAnotherCityData();
  });
};

export default init;