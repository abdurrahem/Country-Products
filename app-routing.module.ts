import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONFIG } from './shared';
import { GetProductsResolver } from './shared';



const routes: Routes = [
  // {path:'',component:AppComponent},
  {
    path:CONFIG.products.name,loadChildren:()=> import('./products/products.module').then(m => m.ProductsModule),
    resolve:{
      products:GetProductsResolver
   }
},
//  {path:"**",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
