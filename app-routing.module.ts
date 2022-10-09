import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenicationComponent } from './authenication/authenication.component';
import { CONFIG } from './shared';
import { GetProductsResolver } from './shared';



const routes: Routes = [
  {path:CONFIG.login.name,component:AuthenicationComponent},
  {
    path:CONFIG.products.name,loadChildren:()=> import('./products/products.module').then(m => m.ProductsModule),
    resolve:{
      products:GetProductsResolver
   },
},
 {path:"**",component:AuthenicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
