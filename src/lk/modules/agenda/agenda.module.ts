import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgendaRoutingModule } from './routes/agenda-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AgendaComponent],
  imports: [
    AgendaRoutingModule,
    CommonModule,
    FormsModule,
  ]
})
export class AgendaModule { }
