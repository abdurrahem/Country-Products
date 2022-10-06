import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIG, ICountry, ProductsService } from '../shared';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: ICountry[] = [];
  constructor(private productsService: ProductsService,private router:Router) {
    // this.route.data.subscribe(el => this.countries=el['countries']);
    // this.productsService.countries=this.countries;
  }

  ngOnInit(): void {
    this.productsService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

  selectCountry(country_id: number) {
    //navigate
    this.router.navigate([CONFIG.products.route],{queryParams:{country_id:country_id}})
    console.log(country_id);
    
  }

}
