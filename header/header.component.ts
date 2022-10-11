import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthenicationService } from '../authenication/authenication.service';
import { CONFIG, ICountry, ProductsService } from '../shared';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  countries: ICountry[] = [];

  constructor(private productsService: ProductsService,private router:Router,private authService:AuthenicationService) {  }
  isLoggedIn:boolean=this.authService.isLoggedin;

  ngOnInit(): void {
    ////get the countries data from API
    this.productsService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
    this.authService.isLogged.subscribe(status =>this.isLoggedIn=status);
  }

  //navigate
  selectCountry(country_id: number) {
    this.router.navigate([CONFIG.products.route],
      {
        queryParams:{   ///send params
        country_id:country_id || 0,
        currency:this.countries.find(country => country.country_id==country_id)?.currency || "",
        country_code:this.countries.find(country => country.country_id==country_id)?.country_code || ""
      }})
    
  }
  /////login
  login(){
    this.router.navigate([CONFIG.login.route]);
  }
  ////logout
  logout(){
    this.authService.logout();
    this.router.navigate([CONFIG.login.route]);
  }

}
