import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CalculateVat } from '../models/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url = "Country";
  constructor(private http: HttpClient) { }

  public getCountries() : Observable<CalculateVat[]>{
    
    return this.http.get<CalculateVat[]>(`${environment.apiUrl}/${this.url}`);
  }
}
