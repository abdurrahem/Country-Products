import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, ProductsService } from '../shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 allProducts:IProduct[]=[];
 countryProducts:IProduct[]=[];
 country_id:number=0;
                              
  constructor(private productsService:ProductsService,private route:ActivatedRoute) { //using resolver to get data every time products loaded
    this.route.data.subscribe(product => {this.allProducts=product['products']});
    this.productsService.products=this.allProducts;
    console.log('all products'+this.allProducts);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{    //read query params
      this.country_id=params['country_id'];
      console.log("country id = "+this.country_id);
      const countryProducts = this.countryProducts;

      this.countryProducts=this.productsService.getRelatedToCountryProducts(this.country_id);//get products witch match country id
      this.country_id=0;
      console.log('country products'+this.countryProducts);
      
    });
  }

}
