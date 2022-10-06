import { Injectable } from '@angular/core';
import { ICountry ,IProduct} from '..';
import { HttpClient } from '@angular/common/http';
import { API } from '..';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  countries:ICountry[]=[];
  products:IProduct[]=[];
  constructor(private http:HttpClient) { }

  getCountries(){
   return this.http.get(API.countries).pipe(
    map((res:any)=>{
       const result:ICountry[]=[];
       res.forEach((country: { [x: string]: any; })=> {
         result.push({
          country_id:country['id'],
          country_code:country['country_code'],
          name:country['name'],
          currency:country['currency']
         })
       });
       this.countries=result;
       return result;
    })
   );
  }
  getProducts(){
    return this.http.get(API.products).pipe(
      map((res:any)=>{
         const result:IProduct[]=[];
         res.forEach((product: { [x: string]: any; })=> {
           result.push({
            id:product['id'],
            name:product['name'],
            price:product['price'],
            country_id:product['country_id'],
            icon:product['icon']
           })
         });
         this.products=result;
         return result;
      })
     )
  }
}
