import React, { useState } from "react";
import axios from "axios";

export default function OtherForm() {
  const [city, setCity] = useState("");

  function displayWeather(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f8df69650e7862f41c9077b3babedf21";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter city..." onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
