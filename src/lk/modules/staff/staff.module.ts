import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './components/staff/staff.component';
import { StaffRoutingModule } from './routes/staff-routing.module';



@NgModule({
  declarations: [StaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
  ]
})
export class StaffModule { }
