class UI{
    constructor() {
        this.city = document.getElementById("w-city");
        this.country = document.getElementById("w-country");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.pressure = document.getElementById("w-pressure");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.feels_like = document.getElementById("w-feels-like");
        this.wind = document.getElementById("w-wind");
    }
    paint(weather) {
        this.country.textContent = weather.sys.country;
        this.city.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.feels_like.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.wind.textContent = `Wind: with speed ${weather.wind.speed} at degrees ${weather.wind.deg}`;
        this.icon.setAttribute('src', weather.weather[0].icon);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.string.textContent = weather.main.temp;
        
    }
}