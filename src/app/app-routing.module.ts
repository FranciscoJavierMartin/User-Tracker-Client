import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './pages/stats/stats.component';
import { ListconnectionsComponent } from './pages/listconnections/listconnections.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { AddconnectionComponent } from './pages/addconnection/addconnection.component';


const routes: Routes = [
  {path: 'stats', component: StatsComponent},
  {path: 'connections/:username', component: ListconnectionsComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'addconnection', component: AddconnectionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'adduser'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
