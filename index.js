
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "3edd96e6a53c193c228db7adac9e6069";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();
    const city = cityInput.value;

    if (city) {
        try {
            
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        } catch (error) {
            console.error(error);
            displayError(error);
            
        }
    }
    else{
        displayError("Please enter a city");
    }
})

async function getWeatherData(city) {
    
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiURL);

    if (!response.ok) {
        throw new Error("Could not fetch weather Data");
        
    }

    return await response.json();
}

function displayWeatherInfo(data){

    console.log(data);
}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay)
}