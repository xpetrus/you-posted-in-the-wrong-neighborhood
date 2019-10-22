import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({  // marks as service that can be injected
  providedIn: 'root'
})
export class ApiService {

  categoryURL = 'http://localhost:8000/api/categories/';
  quoteURL = 'http://localhost:8000/api/quotes/';

  constructor(private httpClient: HttpClient) { }

  getQuotes() {
    return this.httpClient.get(this.quoteURL);
  }

  getQuoteCategory(id: number) {
    return this.httpClient.get(this.categoryURL + id);
  }

  getAQuote(id: number){
    return this.httpClient.get(this.quoteURL + id);
  }
}
