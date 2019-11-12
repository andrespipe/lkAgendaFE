import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivitiesRoutingModule } from './routes/activities-routing.module';



@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    ActivitiesRoutingModule,
    CommonModule,
  ]
})
export class ActivitiesModule { }
