class Storage{
    constructor(latitude,longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.defaultLongitude =77.676247 ;
        this.defaultLatitude =12.926031 ;
    }
    getLocationData() {
        if (localStorage.getItem("latitude") === null) {
            this.latitude = this.defaultLatitude;
        } else {
            this.latitude = localStorage.getItem("latitude");
         }
        if (localStorage.getItem("longitude") === null) {
            this.longitude = this.defaultLongitude;
        }
        else {
             this.longitude = localStorage.getItem("longitude");
        }

        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    }
    setLocationData(lat, log) {
        localStorage.setItem('latitude', lat);
        localStorage.setItem('longitude', log);
        
    }
}