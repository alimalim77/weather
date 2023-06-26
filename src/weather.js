export default function getWeatherIcon(temp) {
  if (temp < 10) {
    return "snow.png"; // Path to snow icon image
  } else if (temp < 20) {
    return "cold.png"; // Path to rain icon image
  } else if (temp < 30) {
    return "sunny.png"; // Path to sun icon image
  } else {
    return "hot.png"; // Path to sun icon image
  }
}
