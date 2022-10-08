import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, ProductsService } from '../shared';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 allProducts:IProduct[]=[];
 countryProducts:IProduct[]=[];///matched products
 country_id:number=0;
 currency:string="";
 country_code:string='';
                              
  constructor(private productsService:ProductsService,private route:ActivatedRoute) { //using resolver to get data every time products loaded
    this.route.data.subscribe(product => 
      {
        this.allProducts=product['products']//// read from resolver
      });
    this.productsService.products=this.allProducts;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{    //read query params
      this.country_id=params['country_id'];
      this.currency=params['currency'];
      this.country_code=params['country_code'];
    });
    const countryProducts = this.countryProducts;
      this.countryProducts=this.productsService.getRelatedToCountryProducts(this.country_id);//get products witch match country id
      this.country_id=0;
  }

}
