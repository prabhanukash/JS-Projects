class Weather{

    constructor(latitude,longitude) {
        this.latitude = latitude;
        this.longitude = longitude; 

    }
    async getWeather() {
        console.log(this.latitude);
        console.log(this.longitude);
        const response = await fetch(
          `https://fcc-weather-api.glitch.me/api/current?lat=${this.latitude}&lon=${this.longitude}`
        );
        const resData = await response.json();
        console.log(resData);
        return resData;
    }
    changeLocation(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}