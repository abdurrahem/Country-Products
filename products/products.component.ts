import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, ProductsService } from '../shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 products:IProduct[]=[];
 country_id:number=0;
                              //using resolver to get data every time products loaded
  constructor(private productsService:ProductsService,private route:ActivatedRoute) { 
    this.route.data.subscribe(product => {this.products=product['products']});
    this.productsService.products=this.products;
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.country_id=params['country_id'];
      console.log("country id = "+this.country_id);
      
    })
  }

}
