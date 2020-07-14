import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Injectable,
  Inject,
} from '@angular/core';

import { DataService } from '../_services/data.service';
import { Story } from '../_models/story';
import { HttpClient } from '@angular/common/http';

const CACHE_KEY = 'hackerNewsTopStory';
const EXPIRY_KEY = 'expiryDateTime';

@Injectable()

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent implements OnInit {

  brews: Object;
  articlesIds: number[] = [];
  articles: Article[] = [];
  article: Article;
  _articlesLocal = [];
  newsCount = 100;
  public forecasts: WeatherForecast[];
  jobs: Story[] = [];

  clickCounter: number = 0;
  name: string = '';

  @Input() searchStr;
  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  
  constructor(private _data: DataService) {}

  ngOnInit(): void {

    this._data.getWeather().subscribe(data => {
      this.forecasts = data;
    });
    
    this._data.getBeer().subscribe(data => {
        this.brews = data;
        //console.log(this.brews);
    });

    this._data.getJobs().subscribe(data => {
      this.jobs = data;
    });

    const isExpired = this.isDateTimeExpired(EXPIRY_KEY)
    //console.log(value);

    if (isExpired === null || isExpired == true) {
      //if it expired, call api
      localStorage.removeItem(CACHE_KEY);
      localStorage.removeItem(EXPIRY_KEY)
      //get a new top stories and set a new expire date
      this.getTopStories();
      this.setExpiryDateTime(EXPIRY_KEY, CACHE_KEY, 900000); //15 min

    } else {
      //if the date is not expired, use localStorage
      this._articlesLocal = JSON.parse(localStorage[CACHE_KEY]) || "[]";
    }
  }


  //get top stories
  getTopStories() {
    this._data.getArticleIds().subscribe((res: number[]) => {
      this.articlesIds = res;
      let item = this.articlesIds
        .slice(Math.max(this.articlesIds.length - this.newsCount, 0))
        .map(i => {
          this._data.getArticleDetail(i).subscribe((res: Article) => {
            this.article = res;
            this.articles.push(this.article);
            this._articlesLocal.push(this.article);
            localStorage[CACHE_KEY] = JSON.stringify(this._articlesLocal);
          });
        });
    });
  }

  //search box
  updateSearchStr(value) {
    this.searchStr = value;
    this.searchModelChange.emit(this.searchStr);
  }

  //crash course
  counterClick() {
    this.clickCounter += 1;
  }

  //class in saass
  setClasses() {
    let myClasses = {
      normal: this.clickCounter > 4,
      notNormal: this.clickCounter <= 4
    }
    return myClasses;
  }

  //set expiry Time
  //timeToLive will be in milliseconds
  setExpiryDateTime(key, value, timeToLive) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + timeToLive
    }
    localStorage.setItem(key, JSON.stringify(item));
  }

  isDateTimeExpired(key) {

    const itemStr = localStorage.getItem(key)
    //if time doesn't exist, return null
    if (!itemStr) {
      return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()
    //compare the expiry time of the item with the current time
    let result = (now.getTime() > item.expiry) ? true : false;
    return result;
  }
}

interface Article {
  id: string,
  by: string,
  title: string,
  url: string
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
