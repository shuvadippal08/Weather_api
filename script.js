document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'ec662f1d62f04d7c99842106252202';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tempC = data.current.temp_c;
            const condition = data.current.condition.text;
            const locationName = data.location.name;
            const iconUrl = data.current.condition.icon;

            document.getElementById('weatherResult').innerHTML = `
                <h2>Weather in ${locationName}</h2>
                <img src="${iconUrl}" alt="${condition}" class="weather-icon">
                <p>Temperature: ${tempC} °C</p>
                <p>Condition: ${condition}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
            console.error('Error:', error);
        });
});