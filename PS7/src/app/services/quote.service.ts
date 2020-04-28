import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  urlBase = 'http://philosophy-quotes-api.glitch.me/quotes/author/'

  getQuote(quoteOptions) {
    return this.http.get(`${this.urlBase}${quoteOptions.author}`);
  }
  constructor(private http: HttpClient) { }
}
