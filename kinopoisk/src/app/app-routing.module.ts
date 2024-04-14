import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FilmpageComponent } from './filmpage/filmpage.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NotdoneComponent } from './notdone/notdone.component';

export const routes: Routes = [
    { path : '', redirectTo: 'home', pathMatch: 'full'},
    { path : 'home', component: HomepageComponent },
    { path : 'films', component: FilmpageComponent },
    { path : 'films/:title', component: FilmpageComponent },
    { path : 'search/:searchText', component: SearchComponent },
    { path: 'notdone', component: NotdoneComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }