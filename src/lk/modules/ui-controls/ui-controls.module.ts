import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

const components = [
  NavMenuComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class UiControlsModule { }
