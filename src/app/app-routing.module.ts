import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {path: '', redirectTo: '/login', pathMatch: 'full'},
   {
       path: '',
       component: HomeComponent,
       children: [
           {
               path: 'home',
               loadChildren: 'app/home/home.module#HomeModule'
           }
       ]
   },
   {
       path: 'login',
       component: HomeComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
