import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationsRoutingModule } from './routes/locations-routing.module';



@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
  ]
})
export class LocationsModule { }
