import { WeatherService } from './../../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  citys:City[];

  cityname:string='';

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
  }

  getCityWth(){
    let list=[];
    this.weatherService.getCityWeather(this.cityname).subscribe(data =>{
      list.push(data);
    })
    this.citys=list;
  }
}