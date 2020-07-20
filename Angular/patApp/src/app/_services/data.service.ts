import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Story } from '../_models/story';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   //hackerNewsTopStorie: string = "https://hacker-news.firebaseio.com/v0/topstories.json"
   //hackerNewsGetStory: string = "https://hacker-news.firebaseio.com/v0/item/1.json"
 
  topStoryUrl: string = environment.backend.topStoryBaseURL;
  itemUrl: string = environment.backend.itemBaseURL;
  beerUrl: string = environment.backend.beerBaseUrl;
  jobUrl: string = environment.backend.baseUrl + '/api/HackerNews';
  

  public articleIds: ArticleId[] = [];
  public articleId: ArticleId
  private headers: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getArticleIds() {
    //this will return observable
    return this._http.get(`${this.topStoryUrl}.json?print=pretty`);
  }

  getArticleDetail(id: number) {
    return this._http.get(`${this.itemUrl}/` + id + '.json');
  }

  getBeer() {
    return this._http.get(this.beerUrl)
  }

  getJobs() {
    return this._http.get<Story[]>(this.jobUrl, { headers: this.headers })
  }
}
interface ArticleId {
  id: string
}
