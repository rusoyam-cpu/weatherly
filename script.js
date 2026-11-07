const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const statusMsg = document.getElementById("statusMsg");

async function getWeather(city) {
    if (!city) return;
    statusMsg.style.display = "none";

    try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=tr&format=json`);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            statusMsg.style.display = "block";
            return;
        }

        const location = geoData.results[0];
        const lat = location.latitude;
        const lon = location.longitude;

        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure`);
        const weatherData = await weatherRes.json();
        const cur = weatherData.current;

        document.getElementById("cityName").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${location.name}, ${location.country_code ? location.country_code.toUpperCase() : ''}`;
        document.getElementById("temp").textContent = `${Math.round(cur.temperature_2m)}°`;
        document.getElementById("humidity").textContent = `${cur.relative_humidity_2m}%`;
        document.getElementById("wind").textContent = `${Math.round(cur.wind_speed_10m)} km/s`;
        document.getElementById("feelsLike").textContent = `${Math.round(cur.apparent_temperature)}°`;
        document.getElementById("pressure").textContent = `${Math.round(cur.surface_pressure)} hPa`;

        updateIcon(cur.weather_code);

    } catch (err) {
        console.error(err);
        statusMsg.style.display = "block";
    }
}

function updateIcon(code) {
    const icon = document.getElementById("weatherIcon");
    const desc = document.getElementById("description");

    if (code === 0) {
        icon.className = "fa-solid fa-sun";
        icon.style.color = "#fbbf24";
        desc.textContent = "Güneşli";
    } else if (code >= 1 && code <= 3) {
        icon.className = "fa-solid fa-cloud-sun";
        icon.style.color = "#fcd34d";
        desc.textContent = "Parçalı Bulutlu";
    } else if (code >= 51 && code <= 67) {
        icon.className = "fa-solid fa-cloud-rain";
        icon.style.color = "#38bdf8";
        desc.textContent = "Yağmurlu";
    } else if (code >= 71) {
        icon.className = "fa-solid fa-snowflake";
        icon.style.color = "#e2e8f0";
        desc.textContent = "Kar Yağışlı";
    } else {
        icon.className = "fa-solid fa-cloud";
        icon.style.color = "#94a3b8";
        desc.textContent = "Bulutlu";
    }
}

searchBtn.onclick = () => getWeather(cityInput.value.trim());
cityInput.onkeyup = (e) => {
    if (e.key === "Enter") getWeather(cityInput.value.trim());
};

// Sayfa açıldığında otomatik Baku yüklesin
getWeather("Baku");