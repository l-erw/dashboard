
//get background image for dashboard
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

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
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const sunriseUnix = `${data.sys.sunrise}`
            const sunriseTime = new Date(sunriseUnix*1000)
            const sunriseHours = new Date(sunriseTime).getHours()
            const sunriseMinutes = new Date(sunriseTime).getMinutes()
            
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
        .catch(err => console.error(err))
});

// function loadNewVideo() {
//     const videoId = ["tLcHTdzykgk", "GcclN_MKWsI", 
//                     "qj9YLsjdAJg", "wDIr92u-2cY", 
//                     "HnEqUkVNmPU", "dWpplJRh4xw", 
//                     "I1VUTQCCgdw", "KxlAXZUmevo",
//                     "EZ8H7AvIF3k", "6xMcGzuORCM",
//                     "6s5MEhUblzQ", "HUAvxMQWg1k", 
//                     "Ev9cKmJZy8c", "KtJPbD8eUTU", 
//                     "K1RGa6sW4ME", "vACdgwUuXII", 
//                     "GfsnsS0Bq7I", "qWwN8DnEBBA", 
//                     "YqyYCmem2oM", "JnXP-60Og7E", 
//                     "hPyBU52P_Xc", "CEbfCdeLt9E",
//                     "IHow3Qt86jc", "lwmy2lGGy3A", 
//                     "JhU16ECcd5Y", "O7unqSzJhuM", 
//                     "8CUzG_ny6sg", "uIfX-EqwWcM", 
//                     "Ro_nYcdGVgM", "QUPAFGv72PM"]

//     let currentVideoId = videoId[0]

    //videoId[videoId.length + 1]

    //         document.getElementById("yoga").innerHTML = `
    //             <iframe 
    //                 width="560" 
    //                 height="315" 
    //                 src="https://www.youtube.com/embed/${videoId[i]}" 
    //                 title="YouTube video player" 
    //                 frameborder="0" 
    //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    //                 allowfullscreen>
    //             </iframe>
    //         `
    // }  



// let newVid = setInterval(loadNewVideo, 10000)
