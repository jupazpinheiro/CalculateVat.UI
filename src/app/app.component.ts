import { Component } from '@angular/core';
import { CalculateVat } from './models/countries'
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculateVat.UI';
  countries: CalculateVat[] = [];

  constructor(private countriesService: CountriesService) {  }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((result: CalculateVat[]) => (this.countries = result));

  }
}
