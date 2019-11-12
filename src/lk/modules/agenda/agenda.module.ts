import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgendaRoutingModule } from './routes/agenda-routing.module';



@NgModule({
  declarations: [AgendaComponent],
  imports: [
    AgendaRoutingModule,
    CommonModule,
  ]
})
export class AgendaModule { }
