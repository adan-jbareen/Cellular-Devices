import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CartComponent } from './cart/cart.component';
import { PrudectsComponent } from './prudects/prudects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { CatagoriesPrudComponent } from './catagories-prud/catagories-prud.component';
import { ShowProductsComponent } from './show-products/show-products.component';
const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'catagoriesPrud',
    component: CatagoriesPrudComponent 
  },
  {
    path:'ShowProducts',
    component: ShowProductsComponent 
  },
  {
    path:'contacts',
    component:ContactsComponent
  },
  {
    path:'cart',
    component: CartComponent 
  },
  {
    path:'Prudects',
    component: PrudectsComponent 
  },
  {
    path:'login',
    component: LoginComponent 
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
