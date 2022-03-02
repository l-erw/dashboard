//get background image for dashboard
function getBackgroundImage() {
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=plants")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").innerHTML = `<p>By: <a href=${data.urls.raw} class="image-link">${data.user.name}</p>`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").innerHTML = `<a class="image-link" href="https://unsplash.com/photos/3e12Q285lxk">By: Dodi Achmad</a>`
    })
}
getBackgroundImage()

//get current time based on location
function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}
//check for updated time every second
setInterval(getCurrentTime, 1000)

//get weather data for current location
//calculates sunrise and sunset times from unix values that come back from API, converts to hours and minutes
//puts weather data into dashboard based on location received - city, current temp, current weather icon, high and low temp of the day, sunrise and sunset time
function getWeather() {
    navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
            .then(res => {
                if (!res.ok) {
                    throw Error("Weather data not available")
                }
                return res.json()
            })
            .then(data => {
                
                function addZero(i) {
                    if (i < 10) {i = "0" + i}
                    return i;
                  }
                const sunriseUnix = `${data.sys.sunrise}`
                const sunriseTime = new Date(sunriseUnix*1000)
                const sunriseHours = new Date(sunriseTime).getHours()
                const sunriseMinutes = new Date(sunriseTime).getMinutes()
                addZero(sunriseMinutes)
                const sunsetUnix = `${data.sys.sunset}`
                const sunsetTime = new Date(sunsetUnix*1000)
                const sunsetHours = new Date(sunsetTime).getHours()
                const sunsetMinutes = new Date(sunsetTime).getMinutes()
                const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    
                document.getElementById("weather").innerHTML = `
                    <h3 class="weather-city">${data.name}</h3>
                    <div class="weather-today">
                        <div class="weather-current">
                            <img src=${iconUrl} />
                            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                        </div>
    
                        <div class="weather-hi-lo">
                            <p>High: ${Math.round(data.main.temp_max)}º</p>
                            <p>Low: ${Math.round(data.main.temp_min)}º</p>
                        </div>
                    
    
                        <div class="sunrise">
                                <img class="sunrise-icon" src="./Sunrise2.png"/>
                                <p class="sunrise-time">${sunriseHours}:${sunriseMinutes}</p>
                        </div> 
                        
                        <div class="sunset">
                                <img class="sunset-icon" src="./Sunset3.png">
                                <p class="sunset-time">${sunsetHours}:${sunsetMinutes}</p>
                        </div>
                    </div>
                `
            })
    
            //if weather can't be displayed, sends user to weather.com instead
            .catch(err => {
                console.error(err)
                document.getElementById("weather").innerHTML = `<h4>Weather data not available right now. Check <a class="link" href="https://weather.com/en-GB/">weather.com<a> for your local weather</h4>`
            })
    })
}

function loader() {
    document.getElementById("weather").innerHTML = `<div class="loader"></div><p>Weather loading</p>`
}
loader()

setTimeout(() => {
    getWeather()
}, 2000);


