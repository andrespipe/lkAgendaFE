import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPanelComponent } from './components/main-panel/main-panel.component';


const routes: Routes = [
  { path: 'main', component: MainPanelComponent },
  { path: '**', redirectTo: '/main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LKRoutingModule { }
