//https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
const SALng = -98.48527;
const SALat = 29.423017;


//adds todays forecast
let addingTodaysWeather = document.querySelector('.today-weather-card')


async function weatherMapDaily(lat = 29.423017, long= -98.48527) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=imperial&appid=${OPEN_WEATHER_APPID}`);
    const data = await response.json();
    console.log(data);
    addingTodaysWeather.innerHTML = `
                                <h3 class="fontSizeLarge today-title">${data.name}</h3>
                                <p class="fontSizeLarge weather-card-text">${Math.round(data.main.temp)}°</p>
                                <img class="today-icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
                                <p class="fontSizeMed weather-card-text">${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p>
                                <p class="fontSizeMed weather-card-text">High: ${Math.round(data.main.temp_min)}°</p>
                                <p class="fontSizeMed weather-card-text">Low: ${Math.round(data.main.temp_max)}°</p>
                                <p class="fontSizeMed weather-card-text">Wind speed: ${data.wind.speed}mph</p>
                                <p class="fontSizeMed weather-card-text" >Wind direction: ${data.wind.deg}°</p>
                                `;
}

(async () => {
    let dailyWeather = await weatherMapDaily();
})();


//Adds four day forecast cards
daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const addingForecastCards = document.querySelector("#forecastDiv")

async function weatherMap5Day3Hour(lat = 29.423017, long= -98.48527) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${OPEN_WEATHER_APPID}`);
    const data = await response.json();
    console.log(data);
    let forecastHTML = '';
    data.list.forEach((e, i) => {
        if (i % 8 === 0 && i !== 0) {
            const time = new Date(e.dt * 1000);
            forecastHTML += `
                    <div class="column weather-card align-center">
                        <h3>${daysOfTheWeek[time.getDay()]}</h3>
                        <p>${e.weather[0].description.charAt(0).toUpperCase() + e.weather[0].description.slice(1)}</p>
                        <img class="icon" src="https://openweathermap.org/img/w/${e.weather[0].icon}.png" alt="${e.weather[0].description}">
                        <p>High: ${e.main.temp_min}°</p>
                        <p>Low: ${e.main.temp_max}°</p>
                    </div>
            `;
            console.log(daysOfTheWeek[time.getDay()]);
        }
    });
    addingForecastCards.innerHTML = forecastHTML;
}

(async () => {
    let threeHourWeather = await weatherMap5Day3Hour();
})();

//months of the year
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//Grabs the date time

const timeElement = document.querySelector('#time');
const dateElement = document.querySelector('#date');
const currentWeatherElement = document.querySelector('#current-weather');
const timezone = document.querySelector('#time-zone');
const currentTemp = document.querySelector('#current-temp')


// ACTIVATE WHEN COMPLETE
setInterval(() => {
   const time = new Date();
   const month = time.getMonth();
   const date = time.getDate();
   const day = time.getDay();
   const hour = time.getHours();
   const hoursIn12HrFormat = hour >= 13 ? hour % 12: hour
   let minutes = `${time.getMinutes()}`.length === 1 ? '0' + time.getMinutes() : time.getMinutes();
   const ampm = hour >= 12 ? 'PM' : 'AM'

    timeElement.innerHTML = `
                            <div class="column align-center" >
                                <h4 class="fontSizeXLarge white-text">${hoursIn12HrFormat}:${minutes}<span class="fontSizeMed white-text">${ampm}</span></h4>
                            </div>
                            `;
    dateElement.innerHTML = `
                            <div class="column align-center">
                                <h4 class="fontSizeMed white-text">${daysOfTheWeek[day]}, ${date} ${months[month]}</h4>
                            </div>
                            `;
},500);


//weather forecast for every three hours for forty instances
// const daysEnd = [];
// data.list.forEach((forecast, index) => {
//     const dateTime = new Date (forecast.dt * 1000);
//     if (dateTime.getHours() === 22)
//         daysEnd.push(index);
// });
// console.log(daysEnd)
//
// daysEnd.forEach((e,i){
//     const temperatures = []
//     temperatures.push(e.list[i].main.temp);
// });