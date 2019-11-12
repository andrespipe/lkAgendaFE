import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPanelComponent } from './components/main-panel/main-panel.component';


const routes: Routes = [
  { path: 'activities', loadChildren: './modules/activities/activities.module#ActivitiesModule' },
  { path: 'agenda', loadChildren: './modules/agenda/agenda.module#AgendaModule' },
  { path: 'locations', loadChildren: './modules/locations/locations.module#LocationsModule' },
  { path: 'reports', loadChildren: './modules/reports/reports.module#ReportsModule' },
  { path: 'staff', loadChildren: './modules/staff/staff.module#StaffModule' },
  { path: 'main', component: MainPanelComponent },
  { path: '**', redirectTo: '/agenda' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LKRoutingModule { }
