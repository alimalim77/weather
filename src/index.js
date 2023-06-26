import { keys } from "./config.js";
import getWeatherIcon from "./weather.js";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".btn");

async function checkWeather(city) {
  const response = await fetch(`${keys.API_URL}${city}&appid=${keys.API_KEY}`);
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;

  const weatherIcon = document.querySelector(".weather-icon");
  const iconPath = getWeatherIcon(data.main.temp);
  weatherIcon.style.backgroundImage = `url(${iconPath})`;
}
searchBtn.addEventListener("click", () => {
  if (!searchBox.value) return;
  checkWeather(searchBox.value);
});
