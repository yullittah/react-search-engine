import React, { useState } from "react";
import axios from "axios";

export default function NewForm() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function displayWeather(response) {
    setResult(true);
    setTemperature(response.data.main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f8df69650e7862f41c9077b3babedf21";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (result) {
    return Math.round(temperature);
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter city..."
            onChange={updateCity}
          />
          <button type="submit"> search</button>
        </form>
      </div>
    );
  }
}
