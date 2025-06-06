let arr = [
    { img: "/images/sunny.png" },
    { img: "/images/rain.png" },
    { img: "/images/cloudy.png" },
    { img: "/images/thunder.png" }
];

let city = document.querySelector("#input1");
let temp = document.querySelector("#temp");
let wheat = document.querySelector("#weather");
let loc = document.querySelector("#loc h3");
let wind = document.querySelector("#wind");
let hum = document.querySelector("#hum");
let image = document.querySelector("#img");
let time = document.querySelector("#time");
let day1 = document.querySelector("#day1");
let date1 = document.querySelector("#date1");
let image1 = document.querySelector("#image1");
let temp1 = document.querySelector("#temp1");
let condi1 = document.querySelector("#condi1");
let wind1 = document.querySelector("#wind1");
let day2 = document.querySelector("#day2");
let date2 = document.querySelector("#date2");
let image2 = document.querySelector("#image2");
let temp2 = document.querySelector("#temp2");
let condi2 = document.querySelector("#condi2");
let wind2 = document.querySelector("#wind2");
let day3 = document.querySelector("#day3");
let date3 = document.querySelector("#date3");
let image3 = document.querySelector("#image3");
let temp3 = document.querySelector("#temp3");
let condi3 = document.querySelector("#condi3");
let wind3 = document.querySelector("#wind3");

function getIcon(condition) {
    condition = condition.toLowerCase();
    if (condition.includes("rain")) return arr[1].img;
    if (condition.includes("cloud")) return arr[2].img;
    if (condition.includes("thunder")) return arr[3].img;
    return arr[0].img;
}

let gethistory = async () => {
    let cityName = city.value;
    try {
        const URL = `https://api.weatherapi.com/v1/forecast.json?key=36973b7256d344d597b43509250506&q=${cityName}&days=7`;
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);

      
        temp.innerHTML = `${data.current.temp_c}°C`;
        wheat.innerHTML = `${data.current.condition.text}`;
        loc.innerHTML = `${data.location.name}`;
        wind.innerHTML = `Wind Speed : ${data.current.wind_kph} km/h`;
        hum.innerHTML = `Humidity : ${data.current.humidity}%`;
        time.innerHTML = `Time: ${data.location.localtime}`;
        image.innerHTML = `<img src="${getIcon(data.current.condition.text)}" style="width: 240px;" />`;

       
        date1.innerHTML = `Day 1 - ${data.forecast.forecastday[1].date}`;
        temp1.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c}°C`;
        condi1.innerHTML = `${data.forecast.forecastday[1].day.condition.text}`;
        wind1.innerHTML = `Wind: ${data.forecast.forecastday[1].day.maxwind_kph} km/h`;
        image1.innerHTML = `<img src="${getIcon(data.forecast.forecastday[1].day.condition.text)}" style="width: 240px;" />`;

        
        date2.innerHTML = `Day 2 - ${data.forecast.forecastday[2].date}`;
        temp2.innerHTML = `${data.forecast.forecastday[2].day.avgtemp_c}°C`;
        condi2.innerHTML = `${data.forecast.forecastday[2].day.condition.text}`;
        wind2.innerHTML = `Wind: ${data.forecast.forecastday[2].day.maxwind_kph} km/h`;
        image2.innerHTML = `<img src="${getIcon(data.forecast.forecastday[2].day.condition.text)}" style="width: 240px;" />`;

        date3.innerHTML = `Day 3 - ${data.forecast.forecastday[3].date}`;
        temp3.innerHTML = `${data.forecast.forecastday[3].day.avgtemp_c}°C`;
        condi3.innerHTML = `${data.forecast.forecastday[3].day.condition.text}`;
        wind3.innerHTML = `Wind: ${data.forecast.forecastday[3].day.maxwind_kph} km/h`;
        image3.innerHTML = `<img src="${getIcon(data.forecast.forecastday[3].day.condition.text)}" style="width: 240px;" />`;

    } catch (err) {
        console.error("Error fetching weather:", err);
    }
};

let typingTimer;
city.addEventListener("input", () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(gethistory, 1000);
});

window.addEventListener("load" , ()=>{
    city.value = "London"
    gethistory();
})