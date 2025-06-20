const apikey="1e081e93f997c62dc7885675080b507e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

    var data=await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="cloud.png"
    }
    
   else if(data.weather[0].main=="Clear"){
        weatherIcon.src="sunny.png"
    }
    
   else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png"
    }
    
   else if(data.weather[0].main=="Mist"){
        weatherIcon.src="haze.png.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png"
    }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
    }
   
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
 

