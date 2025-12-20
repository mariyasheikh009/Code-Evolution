async function fetchWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const output = document.getElementById("output");

  if (city === "") {
    output.className = "inner-box error";
    output.textContent = "Please enter a city!";
    return;
  }

  output.className = "inner-box loading";
  output.textContent = "Fetching weather...";

  try {
    // STEP 1: Get latitude + longitude of city
    const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    const geoRes = await fetch(geoURL);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      output.className = "inner-box error";
      output.textContent = "City not found!";
      return;
    }

    const lat = geoData.results[0].latitude;
    const lon = geoData.results[0].longitude;

    // STEP 2: Fetch weather for that location
    const weatherURL =
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    const weatherRes = await fetch(weatherURL);
    const weatherData = await weatherRes.json();

    const temp = weatherData.current_weather.temperature;
    const wind = weatherData.current_weather.windspeed;
    const code = weatherData.current_weather.weathercode;

    // WEATHER EMOJI SYSTEM
    let emoji = "";

    if (code === 0) emoji = "☀️";                   // Sunny
    else if ([1, 2, 3].includes(code)) emoji = "🌤️"; // Partly cloudy
    else if ([45, 48].includes(code)) emoji = "🌫️"; // Fog
    else if ([51, 53, 55].includes(code)) emoji = "🌦️"; // Drizzle
    else if ([61, 63, 65].includes(code)) emoji = "🌧️"; // Rain
    else if ([71, 73, 75].includes(code)) emoji = "❄️"; // Snow
    else if ([95, 96, 99].includes(code)) emoji = "⛈️"; // Thunderstorm
    else emoji = "🌍";

    // FINAL OUTPUT
    output.className = "inner-box success";
    output.innerHTML = `
      <strong>${city.toUpperCase()}</strong> ${emoji}<br><br>
      <strong>Temperature:</strong> ${temp}°C <br>
      <strong>Wind Speed:</strong> ${wind} km/h
    `;
  } catch (err) {
    output.className = "inner-box error";
    output.textContent = "Error fetching data!";
  }
}
