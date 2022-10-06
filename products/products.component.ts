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
 currency:string="";
                              
  constructor(private productsService:ProductsService,private route:ActivatedRoute) { //using resolver to get data every time products loaded
    this.route.data.subscribe(product => 
      {
        this.allProducts=product['products']
      });
    this.productsService.products=this.allProducts;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{    //read query params
      this.country_id=params['country_id'];
      this.currency=params['currency'];
      console.log('all curremny'+this.currency);
      // console.log("country id = "+this.country_id);
      const countryProducts = this.countryProducts;

      this.countryProducts=this.productsService.getRelatedToCountryProducts(this.country_id);//get products witch match country id
      this.country_id=0;
      // console.log('country products'+this.countryProducts);
      
    });
  }

}
