const apiKey = "1adf57dc387d06bae2dc7f4417834b6c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const icon = document.querySelector(".weather-icon");

async function check(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  // to check the invalid city
  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    //   get the all data
    var data = await res.json(); //contain all imformation abourt the weather

    console.log(data);
    // see these info on colsole
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    //   update image
    //   we get this data.weather[0].main from console log
    if (data.weather[0].main == "Clouds") {
      icon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      icon.src = "images/snow.png";
    }

    // to hide the default
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  check(searchBox.value);
});
