import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [

////localhost:4200/ heroes  
////localhost:4200/heroes   


{
  path:'auth',
  loadChildren:()=> import ('./auth/auth.module').then(m=>m.AuthModule)
},
{
  path:'heroes',
  loadChildren:()=> import ('./heroes/heroes.module').then(m=>m.HeroesModule)
},{
path:'',
redirectTo:'heroes',
pathMatch:'full'
},{
  path:'404',
  component:Error404PageComponent
},
{
  path:'**',
  redirectTo:'404'
}
////localhost:4200/404
////localhost:4200/dasjldkajsldkasldkj


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
