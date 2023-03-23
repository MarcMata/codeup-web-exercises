//https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
const SALng = -98.48527;
const SALat = 29.423017;
let newMarkerLng = markerCoords[0]
let newMarkerLat = markerCoords[1]

async function weatherMapDaily(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${SALat}&lon=${SALng}&units=imperial&appid=${OPEN_WEATHER_APPID}`);
    const data =  await response.json();
    console.log(data);
    console.log('****************************************')
    console.log(`Today's current temperature: ${data.main.temp}`)
    console.log(`Today's Max Temp: ${data.main.temp_max}`)
    console.log(`Today's Min Temp: ${data.main.temp_min}`)
    console.log(`Today's weather description: ${data.weather[0].description}`)
    console.log(`Today's wind degree: ${data.wind.deg}`)
    console.log(`Today's wind speed: ${data.wind.speed}`)
    console.log('****************************************')
    // data.forEach((e,i) =>{
    //
    // });
}
(async()=>{
    let dailyWeather = await weatherMapDaily();
})();

daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const addingForecastCards = document.querySelector("#forecastDiv")
async function weatherMap5Day3Hour(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALng}&units=imperial&appid=${OPEN_WEATHER_APPID}`);
    const data =  await response.json();
    console.log(data);
    let forecastHTML = '';
    data.list.forEach((e,i) =>{
        if (i % 8 === 0 && i !== 0){
            const time = new Date(e.dt*1000);
            // console.log(time.getHours());
            // console.log(time.getTime());
            //  <div class="column weatherCard">
            //                         <h3>Monday</h3>
            //                     </div>
            forecastHTML += `
                    <div class="column weatherCard align-center ">
                        <h3>${daysOfTheWeek[time.getDay()]}</h3>
                        <p>${e.weather[0].description.toUpperCase()}</p>
                        <img class="icon" src="https://openweathermap.org/img/w/${e.weather[0].icon}.png" alt="${e.weather[0].description}">
                        <p>High: ${e.main.temp_min}°</p>
                        <p>Low: ${e.main.temp_max}°</p>
                    </div>
            `;
            console.log(daysOfTheWeek[time.getDay()]);
            // console.log(e.dt_txt);
            // console.log(e.weather[0].description)
            // console.log(e.main.temp_min)
            // console.log(e.main)
        }
    });
    addingForecastCards.innerHTML = forecastHTML;
}
(async()=>{
    let threeHourWeather = await weatherMap5Day3Hour();
})();