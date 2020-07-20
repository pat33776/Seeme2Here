import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Story } from '../_models/story';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  topStoryUrl: string = environment.backend.topStoryBaseURL;
  itemUrl: string = environment.backend.itemBaseURL;
  beerUrl: string = environment.backend.beerBaseUrl;
  jobUrl: string = environment.backend.baseUrl + '/api/HackerNews';
  
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

