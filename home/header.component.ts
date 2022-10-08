import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG, ICountry, ProductsService } from '../shared';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  countries: ICountry[] = [];
  
  constructor(private productsService: ProductsService,private router:Router) {  }

  ngOnInit(): void {
    ////get the countries data from API
    this.productsService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

  selectCountry(country_id: number) {
    //navigate
    
    this.router.navigate([CONFIG.products.route],
      {
        queryParams:{   ///send params
        country_id:country_id || 0,
        currency:this.countries.find(country => country.country_id==country_id)?.currency || "",
        country_code:this.countries.find(country => country.country_id==country_id)?.country_code || ""
      }})
    
  }

}
