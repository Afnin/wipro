import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private endPoint:string='https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/';
  private readonly _keywords = new BehaviorSubject<string[]>([]);
  readonly keywords$ = this._keywords.asObservable();

  constructor(private http:HttpClient) { }

  getEvents(){
    return this.http.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=jLF3DaVIAfY5o9CNsb2jN8GRNuuDSfoA');
  }

  getEventByKeyWord(keyword: string){
    return this.http.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=jLF3DaVIAfY5o9CNsb2jN8GRNuuDSfoA'+'&keyword='+keyword);
  }
  
  getkeyWords(): string[] {
    return this._keywords.getValue();
  }

  private _setKeywords(input: string[]): void {
    this._keywords.next(input);
  }

  addKeyword(key: string): void {
    const keyword = [...this.getkeyWords(), key];
    this._setKeywords(keyword);
  }
}

