import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LKRoutingModule } from './lk-routing.module';
import { LKComponent } from './components/lk/lk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiControlsModule } from './modules/ui-controls/ui-controls.module';
import { MainPanelComponent } from './components/main-panel/main-panel.component';

@NgModule({
  declarations: [
    LKComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LKRoutingModule,
    UiControlsModule,
  ],
  providers: [],
  bootstrap: [LKComponent]
})
export class LKModule { }
