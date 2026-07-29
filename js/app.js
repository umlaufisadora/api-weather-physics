// const describe = document.getElementById('btn-describe');
// let count = 0;

//     describe.addEventListener('click', () =>
//     {
//         if(count <1)
//         {
//             count +=1;
//             const list = document.createElement('li');
//             const lista = document.getElementById('listButton')


//             list.classList.add('task');

//             const content = `<input placeholder="Digite o nome da cidade..." id="input-list"></input>`;

//             list.innerHTML = content;
//             lista.appendChild(list)
//         }
//          console.log(count)
//     });

//API KEY: 9bfc94f07adf1576638ea4934a72a9f3

const apiKey = "9bfc94f07adf1576638ea4934a72a9f3"; 
const apiCountryUrl = "https://flagsapi.com/:country_code/:style/:size.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search"); 

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

//Functions

const getWeatherData = async(city) =>
{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}

const showWeatherData = async (city) => 
{
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`)
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/32.png`)
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}km/h`

    weatherContainer.classList.remove("hide");
}

//Events
searchBtn.addEventListener('click', (event) =>
{
    event.preventDefault;

    const city = cityInput.value

    showWeatherData(city);
});

cityInput.addEventListener("keyup", (event) =>
{
    if(event.code === "Enter")
    {
        const city = event.target.value;

        showWeatherData(city);
    }
});