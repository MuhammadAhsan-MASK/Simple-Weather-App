async function getWeather() {
    const apiKey = "fc28c340d31ae09807cd4b478cc4ebc7"; // replace with your actual key
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        const result = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weatherResult").innerHTML = result;
      } else {
        document.getElementById("weatherResult").innerHTML = `<p>City not found</p>`;
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      document.getElementById("weatherResult").innerHTML = `<p>Error getting weather data</p>`;
    }
  }
  