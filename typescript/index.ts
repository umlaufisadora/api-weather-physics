//API KEY: 9bfc94f07adf1576638ea4934a72a9f3

//API KEY PEXELS: fSmD7EBWyWrNcPRWCfHdRvALS1tVGWu6tHMEscDwxjfEiesW99u9igwA

const apiKey : string = "9bfc94f07adf1576638ea4934a72a9f3"; 
const apiCountryUrl : string = "https://flagsapi.com/:country_code/:style/:size.png";

const cityInput = document.querySelector<HTMLInputElement>("#city-input")!;
const searchBtn = document.querySelector<HTMLElement>("#search")!; 

const cityElement = document.querySelector<HTMLElement>("#city")!;
const tempElement = document.querySelector<HTMLElement>("#temperature span")!;
const descElement = document.querySelector<HTMLElement>("#description")!;
const weatherIconElement = document.querySelector<HTMLImageElement>("#weather-icon")!;
const countryElement = document.querySelector<HTMLElement>("#country")!;
const humidityElement = document.querySelector<HTMLElement>("#humidity span")!;
const windElement = document.querySelector<HTMLElement>("#wind span")!;

const weatherContainer = document.querySelector<HTMLElement>("#weather-data")!;

interface WeatherData {
    name: string;

    main: { 
        temp: number;
        humidity: number;
    };

    weather: {
        description: string;
        icon: string;
    }[];

    wind: {
        speed: number;
    };

    sys: {
        country: string;
    };
};

const getWeatherData = async(city : string) : Promise<WeatherData> =>
{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}

const showWeatherData = async (city : string) : Promise<void> => 
{
    let errorMessage = document.getElementById('erro')!;
    const info = document.querySelector(".info")!;

    try
    {
        const data = await getWeatherData(city);

        errorMessage.classList.add("errorHide");
        info.classList.add("hidden")
    
        cityElement.innerText = data.name;
        tempElement.innerText = data.main.temp.toFixed(1);
        descElement.innerText = data.weather[0]!.description;
        weatherIconElement.setAttribute("src", `https://openweathermap.org/payload/api/media/file/${data.weather[0]!.icon}.png`)
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
    event.preventDefault();

    const city = cityInput.value

    showWeatherData(city);
});

cityInput.addEventListener("keyup", (event) =>
{
    if(event.code === "Enter")
    {
        const city = cityInput.value;

        showWeatherData(city);
    }
});

const apiKeyPhoto = "fSmD7EBWyWrNcPRWCfHdRvALS1tVGWu6tHMEscDwxjfEiesW99u9igwA";

const showBackgroundCountry = async (data : WeatherData) : Promise<void> =>
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

 const showJaraguaDoSulSpecial = async(data : WeatherData) : Promise<void> =>
 {
    const backgroundBody = document.body
    const info = document.querySelector(".info")!;

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