export class City{
    request: {
        query:string;
        type:string;
        
    }
    location: {
        localtime:string;
    }
    current: {
        temperature:number;
        weather_icons:string;
        wind_speed:number;
    }
}