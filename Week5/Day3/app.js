let APIkey = key;
let cityNameDisp = document.getElementById("cityName");
let topBox = document.getElementById("highLowIcon");
let lowBox = document.getElementById("low");
let weatherIcon = document.getElementById("weatherIcon");
let highBox = document.getElementById("high");
let weatherDescDisp = document.getElementById("weatherDesc");
let pressDisp = document.getElementById("press");
let humDisp = document.getElementById("hum");
let changeTempBtn = document.getElementById("changeTemp"); 
let changeTempImg = document.getElementById("changeTempImg")// display "change to celsius" if display is F and vice versa
let changeCityBox = document.getElementById("changeCityBox");
let changeCityBtn = document.getElementById("changeCityBtn");

function getWeather(cityName) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`)
        .then((response) => {
            return response.json();
        }).then((json) => {
            return formatWeather(json);
        }).then((formattedJSON) => {
            displayWeather(formattedJSON);
        }).catch((error) => {
            console.log(error);
        });
};

function formatWeather(json) {
    let weatherObject = {
    weather: json.weather[0].main,
    weatherDesc: json.weather[0].description,
    lowC: Math.trunc(json.main.temp_min - 273.15),
    lowF: Math.trunc((((json.main.temp_min - 273.15) * 9 / 5) + 32)), //convert to F
    highC: Math.trunc(json.main.temp_max - 273.15),
    highF: Math.trunc((((json.main.temp_max - 273.15) * 9 / 5) + 32)), //convert to F
    pressure: json.main.pressure,
    humidity: json.main.humidity,
    city: json.name
    };

    return weatherObject;
}

function displayWeather(formattedJSON) {
    cityNameDisp.innerHTML = formattedJSON.city;
    lowBox.innerHTML = `${formattedJSON.lowF}°F`;
    highBox.innerHTML = `${formattedJSON.highF}°F`;
    weatherDescDisp.innerHTML = formattedJSON.weatherDesc;
    pressDisp.innerHTML = `${formattedJSON.pressure} hPa`;
    humDisp.innerHTML = `${formattedJSON.humidity}%`;

    setWeatherIcon(formattedJSON);
    changeTemp(formattedJSON);
};

function setWeatherIcon(formattedJSON) {
    let weather = formattedJSON.weather;
    switch (weather) {
        case "Clear":
            weatherIcon.setAttribute("src", "icons/Clear.png");  
            weatherIcon.setAttribute("alt", "Clear");
            break;
        case "Clouds":
            weatherIcon.setAttribute("src", "icons/Clouds.png");
            weatherIcon.setAttribute("alt", "Clouds");
            break;
        case "Drizzle":
            weatherIcon.setAttribute("src", "icons/Drizzle.png");
            weatherIcon.setAttribute("alt", "Drizzle");
            break;
        case "Rain":
            weatherIcon.setAttribute("src", "icons/Rain.png");
            weatherIcon.setAttribute("alt", "Rain");
            break;
        case "Snow":
            weatherIcon.setAttribute("src", "icons/Snow.png");
            weatherIcon.setAttribute("alt", "Snow");
            break;
        case "Thunderstorm":
            weatherIcon.setAttribute("src", "icons/Thunderstorm.png");
            weatherIcon.setAttribute("alt", "Thunderstorm");
            break;
        default:
            weatherIcon.setAttribute("src", "icons/Else.png");
            weatherIcon.setAttribute("alt", "Atmospheric");
    }
};

function changeTemp(formattedJSON) {
    changeTempBtn.addEventListener("click", () => {
        if (changeTempImg.getAttribute("src") == "icons/celsius.png") {
            changeTempImg.setAttribute("src", "icons/fahrenheit.png");
            lowBox.innerHTML = `${formattedJSON.lowC}°C`;
            highBox.innerHTML = `${formattedJSON.highC}°C`;
        } else if (changeTempImg.getAttribute("src") == "icons/fahrenheit.png") {
            changeTempImg.setAttribute("src", "icons/celsius.png");
            lowBox.innerHTML = `${formattedJSON.lowF}°F`;
            highBox.innerHTML = `${formattedJSON.highF}°F`;
        }
    });
};

changeCityBtn.addEventListener("click", () => {getWeather(changeCityBox.value)});

navigator.geolocation.getCurrentPosition((position) => {
    getWeatherCoords(position.coords.latitude, position.coords.longitude);
}, (error) => {getWeather("Atlanta")});

function getWeatherCoords(latitude, longitude) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`)
        .then((response) => {
            return response.json();
        }).then((json) => {
            return formatWeather(json);
        }).then((formattedJSON) => {
            displayWeather(formattedJSON);
        }).catch((error) => {
            console.log(error);
        });
};