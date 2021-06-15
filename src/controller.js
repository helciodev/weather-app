import * as view from './view';

const init = () => {
  // let temperature = 'celsius';
  const TEMP_UNIT = 'metric.imperial';
  const CHECKED_OR_NOT = 'checked.or.not';
  const checked = JSON.parse(localStorage.getItem(CHECKED_OR_NOT));
  let unit = JSON.parse(localStorage.getItem(TEMP_UNIT)) || 'imperial';
  let currentWeather;
  // let currentFeelsLike;
  const apiKey = 'f7c2cc6f11db4a4873f18ec881fd1be0';
  const https = 'https://';

  const saveUnit = () => {
    localStorage.setItem(TEMP_UNIT, JSON.stringify(unit));
    localStorage.setItem(CHECKED_OR_NOT, JSON.stringify(view.slide.checked));
  };

  window.addEventListener('load', () => {
    let lat;
    let lon;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        const api = `${https}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
        const showData = async () => {
          try {
            const response = await fetch(api);
            const data = await response.json();
            currentWeather = data.main.temp;
            view.weatherBg(data.weather[0].main);
            view.renderWeather(data, unit);
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

  view.slide.checked = checked;
  // console.log(unit);
  view.slide.addEventListener('click', () => {
    if (!view.slide.checked && unit === 'imperial') {
      //  °F = (°C × 9/5) + 32
      view.tempElement.textContent = `${Math.floor((currentWeather - 32) * (5 / 9))}`;
      unit = 'metric';
      saveUnit();
    } else {
      view.tempElement.textContent = `${Math.floor(currentWeather)}`;
    }
  });

  view.searchCity.addEventListener('submit', (e) => {
    e.preventDefault();

    if (view.cityInput.value === '' || view.cityInput === null) return;

    const city = view.cityInput.value;
    view.cityInput.value = null;

    const anotherCityApi = `${https}api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

    const showAnotherCityData = async () => {
      try {
        const anotherCityResponse = await fetch(anotherCityApi);
        const anotherCityData = await anotherCityResponse.json();
        view.weatherBg(anotherCityData.weather[0].main);
        view.renderWeather(anotherCityData);
      } catch (error) {
        view.showError(error);
      }
    };
    showAnotherCityData();
  });
};

export default init;