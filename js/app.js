//API KEY: 9bfc94f07adf1576638ea4934a72a9f3

//API KEY PEXELS: fSmD7EBWyWrNcPRWCfHdRvALS1tVGWu6tHMEscDwxjfEiesW99u9igwA

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
    let errorMessage = document.getElementById('erro');
    const data = await getWeatherData(city);
    const info = document.querySelector(".info")

    try
    {

        errorMessage.classList.add("errorHide");
        info.classList.add("hidden")
    
        cityElement.innerText = data.name;
        tempElement.innerText = parseInt(data.main.temp);
        descElement.innerText = data.weather[0].description;
        weatherIconElement.setAttribute("src", `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`)
        countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/32.png`)
        humidityElement.innerText = `${data.main.humidity}%`
        windElement.innerText = `${data.wind.speed}km/h`

        weatherContainer.classList.remove("hide");

        if(data.name === "Jaraguá do Sul")
        {
            showJaraguaDoSulSpecial(data)
        }
        else
        {
            showBackgroundCountry(data);
        }
    }
    catch(erro)
    {
        weatherContainer.classList.add("hide");
        errorMessage.classList.remove("errorHide");
        errorMessage.innerHTML = `<p>ERRO: Cidade não encontrada</p>`
    }
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

const apiKeyPhoto = "fSmD7EBWyWrNcPRWCfHdRvALS1tVGWu6tHMEscDwxjfEiesW99u9igwA";

const showBackgroundCountry = async (data) =>
{
    const backgroundBody = document.body

    const url = `https://api.pexels.com/v1/search?query=${data.name}&per_page=3&locale=pt-BR`;

    try
    {
        const response = await fetch(url, {
            headers: 
            {
                Authorization: apiKeyPhoto
            }
        });

        const photos = await response.json();

        if(photos.photos.length > 0)
        {
            const imageUrl = photos.photos[2].src.landscape;

            document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)),url("${imageUrl}")`;
            document.body.style.backgroundSize = 'cover';
        }
    }
    catch(erro)
    {
        console.error("Erro ao buscar imagem:" , erro)
    }
 }

 const showJaraguaDoSulSpecial = async(data) =>
 {
    const backgroundBody = document.body
    const info = document.querySelector(".info")

    try
    {
        const image = new Image();
        info.classList.remove("hidden")

        document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)),url("../image/jaragua-do-sul.jpg")`;
        document.body.style.backgroundSize = 'cover';
    }
    catch(erro)
    {
        console.error("Erro ao buscar imagem:" , erro)
    }
 }

 