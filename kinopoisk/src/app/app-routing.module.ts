import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FilmpageComponent } from './filmpage/filmpage.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path : '', redirectTo: 'home', pathMatch: 'full'},
    { path : 'home', component: HomepageComponent },
    { path : 'films', component: FilmpageComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }