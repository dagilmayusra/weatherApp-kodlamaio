import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getCityWeather(val:string):Observable<City>{
    return this.httpClient.get<City>(`http://api.weatherstack.com/current?access_key=d0cf22007e01209afdf1dcea01c4b896&query=${val}`)
  }
}